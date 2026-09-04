"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

import { cn } from "@/lib/utils";

const useIsoLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

export interface CoverflowSlide {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
  href?: string;
  meta?: { label: string; value: string }[];
}

export interface CoverflowCarouselProps {
  slides: CoverflowSlide[];
  rotate?: number;
  depth?: number;
  perspective?: number;
  falloff?: number;
  fade?: number;
  cardWidth?: string;
  gap?: number;
  loop?: boolean;
  showCaption?: boolean;
  showPagination?: boolean;
  showNavigation?: boolean;
  label?: string;
  className?: string;
  cardClassName?: string;
}

export function CoverflowCarousel({
  slides,
  rotate = 44,
  depth = 0.6,
  perspective = 3,
  falloff = 0.56,
  fade = 0.1,
  cardWidth = "clamp(148px, 22vw, 260px)",
  gap = 0.05,
  loop = true,
  showCaption = false,
  showPagination = false,
  showNavigation = false,
  label = "Cover carousel",
  className,
  cardClassName,
}: CoverflowCarouselProps) {
  const count = slides.length;

  const frameRef = React.useRef<HTMLDivElement>(null);
  const cardRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const posRef = React.useRef(0);
  const targetRef = React.useRef(0);
  const widthRef = React.useRef(0);
  const rafRef = React.useRef<number | null>(null);
  const dragRef = React.useRef<{
    id: number;
    x: number;
    pos: number;
    v: number;
    t: number;
    dragged: boolean;
  } | null>(null);

  const [selected, setSelected] = React.useState(0);
  const [hoverSide, setHoverSide] = React.useState<"left" | "right" | null>(null);

  const hoverTimerRef = React.useRef<NodeJS.Timeout | null>(null);
  const velocityRef = React.useRef(0);
  const autoRafRef = React.useRef<number | null>(null);
  const isHoveringRef = React.useRef(false);

  const indexAt = React.useCallback(
    (pos: number) => ((Math.round(pos) % count) + count) % count,
    [count],
  );

  const paint = React.useCallback(() => {
    const width = widthRef.current;
    if (!width) return;
    const pitch = width * (1 + gap);
    const pos = posRef.current;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      let offset = index - pos;
      if (loop) {
        offset = ((offset % count) + count) % count;
        if (offset > count / 2) offset -= count;
      }

      const distance = Math.abs(offset);
      const ramp = Math.pow(distance, falloff);
      const tilt = Math.min(rotate * ramp, 82) * Math.sign(offset);

      card.style.transform =
        `translateX(calc(-50% + ${offset * pitch}px)) ` +
        `translateZ(${-depth * width * ramp}px) rotateY(${-tilt}deg)`;

      const edge = loop ? Math.min(1, Math.max(0, count / 2 - distance)) : 1;
      card.style.opacity = String(Math.max(0, 1 - fade * distance) * edge);
      card.style.zIndex = String(100 - Math.round(distance));
    });
  }, [count, depth, fade, falloff, gap, loop, rotate]);

  const settle = React.useCallback(
    (target: number) => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      targetRef.current = target;
      setSelected(indexAt(target));

      const step = () => {
        const remaining = target - posRef.current;
        if (Math.abs(remaining) < 0.0004) {
          posRef.current = target;
          paint();
          rafRef.current = null;
          return;
        }
        posRef.current += remaining * 0.16;
        paint();
        rafRef.current = requestAnimationFrame(step);
      };
      rafRef.current = requestAnimationFrame(step);
    },
    [indexAt, paint],
  );

  const clamp = React.useCallback(
    (pos: number) => (loop ? pos : Math.max(0, Math.min(count - 1, pos))),
    [count, loop],
  );

  const goTo = React.useCallback(
    (index: number) => {
      const target = loop
        ? index + Math.round((targetRef.current - index) / count) * count
        : index;
      settle(clamp(target));
    },
    [clamp, count, loop, settle],
  );

  const nudge = React.useCallback(
    (by: number) => settle(clamp(Math.round(targetRef.current) + by)),
    [clamp, settle],
  );

  const updateAutoScroll = React.useCallback(() => {
    if (!isHoveringRef.current || Math.abs(velocityRef.current) < 0.0001) {
      if (autoRafRef.current !== null) {
        cancelAnimationFrame(autoRafRef.current);
        autoRafRef.current = null;
      }
      return;
    }

    posRef.current = clamp(posRef.current + velocityRef.current);
    targetRef.current = posRef.current;
    const newIdx = indexAt(posRef.current);
    setSelected(newIdx);
    paint();

    autoRafRef.current = requestAnimationFrame(updateAutoScroll);
  }, [clamp, indexAt, paint]);

  const handleContainerMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (dragRef.current?.dragged) return;

    const frame = frameRef.current;
    if (!frame) return;

    const rect = frame.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const centerX = rect.width / 2;
    const normX = (x - centerX) / (rect.width / 2); // -1 (left) to +1 (right)

    // Center 20% deadzone so hovering near center remains steady
    const deadZone = 0.2;
    if (Math.abs(normX) < deadZone) {
      velocityRef.current = 0;
      setHoverSide(null);
      return;
    }

    isHoveringRef.current = true;
    const sign = Math.sign(normX);
    const intensity = (Math.abs(normX) - deadZone) / (1 - deadZone);
    // Smooth serial motion velocity: up to ~0.038 units/frame
    velocityRef.current = sign * Math.pow(intensity, 1.25) * 0.038;
    setHoverSide(sign > 0 ? "right" : "left");

    if (autoRafRef.current === null) {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      autoRafRef.current = requestAnimationFrame(updateAutoScroll);
    }
  };

  const handleContainerMouseLeave = () => {
    isHoveringRef.current = false;
    velocityRef.current = 0;
    setHoverSide(null);
    if (autoRafRef.current !== null) {
      cancelAnimationFrame(autoRafRef.current);
      autoRafRef.current = null;
    }
    settle(clamp(Math.round(posRef.current)));
  };

  const handleSlideHover = React.useCallback(
    (index: number) => {
      if (dragRef.current?.dragged || Math.abs(velocityRef.current) > 0.004) return;
      if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = setTimeout(() => {
        if (index !== selected && Math.abs(velocityRef.current) <= 0.004) {
          goTo(index);
        }
      }, 80);
    },
    [goTo, selected],
  );

  const handleSlideLeave = React.useCallback(() => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
  }, []);

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    isHoveringRef.current = false;
    velocityRef.current = 0;
    setHoverSide(null);
    if (autoRafRef.current !== null) {
      cancelAnimationFrame(autoRafRef.current);
      autoRafRef.current = null;
    }
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    targetRef.current = posRef.current;
    dragRef.current = {
      id: event.pointerId,
      x: event.clientX,
      pos: posRef.current,
      v: 0,
      t: performance.now(),
      dragged: false,
    };
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.id !== event.pointerId) return;

    const pitch = widthRef.current * (1 + gap);
    if (!pitch) return;

    if (!drag.dragged && Math.abs(event.clientX - drag.x) > 5) {
      drag.dragged = true;
      try {
        event.currentTarget.setPointerCapture(event.pointerId);
      } catch {}
    }

    if (!drag.dragged) return;

    const now = performance.now();
    const previous = posRef.current;
    posRef.current = clamp(drag.pos - (event.clientX - drag.x) / pitch);
    drag.v = ((posRef.current - previous) / Math.max(now - drag.t, 1)) * 1000;
    drag.t = now;

    const index = indexAt(posRef.current);
    if (index !== selected) setSelected(index);
    paint();
  };

  const endDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.id !== event.pointerId) return;
    
    if (drag.dragged) {
      try {
        if (event.currentTarget.hasPointerCapture(event.pointerId)) {
          event.currentTarget.releasePointerCapture(event.pointerId);
        }
      } catch {}
      const carried = Math.max(-2, Math.min(2, drag.v * 0.18));
      settle(clamp(Math.round(posRef.current + carried)));
    }
    
    dragRef.current = null;
  };

  const handleSlideClick = (index: number, href?: string) => {
    if (dragRef.current?.dragged) return;
    
    isHoveringRef.current = false;
    velocityRef.current = 0;
    setHoverSide(null);
    if (autoRafRef.current !== null) {
      cancelAnimationFrame(autoRafRef.current);
      autoRafRef.current = null;
    }

    if (index !== selected) {
      goTo(index);
    }
    if (href) {
      window.open(href, "_blank", "noopener,noreferrer");
    }
  };

  useIsoLayoutEffect(() => {
    const frame = frameRef.current;
    if (!frame) return;

    const measure = () => {
      const card = cardRefs.current[0];
      if (!card) return;
      widthRef.current = card.offsetWidth;
      paint();
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(frame);
    return () => observer.disconnect();
  }, [paint]);

  React.useEffect(
    () => () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      if (autoRafRef.current !== null) cancelAnimationFrame(autoRafRef.current);
      if (hoverTimerRef.current !== null) clearTimeout(hoverTimerRef.current);
    },
    [],
  );

  const active = slides[selected];

  return (
    <div
      className={cn("w-full", className)}
      style={{ ["--cf-card" as string]: cardWidth }}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
    >
      <div className="relative overflow-hidden">
        {/* Directional Serial Motion Glowing Cue Indicators */}
        <div
          className={cn(
            "pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#00f0ff]/25 via-[#00f0ff]/5 to-transparent transition-opacity duration-300 z-30 flex items-center justify-start pl-3",
            hoverSide === "left" ? "opacity-100" : "opacity-0",
          )}
        >
          <div className="w-8 h-8 rounded-full bg-slate-950/80 border border-[#00f0ff]/50 flex items-center justify-center text-[#00f0ff] shadow-[0_0_15px_rgba(0,240,255,0.6)] animate-pulse">
            <ChevronLeft className="size-4" />
          </div>
        </div>

        <div
          className={cn(
            "pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#00f0ff]/25 via-[#00f0ff]/5 to-transparent transition-opacity duration-300 z-30 flex items-center justify-end pr-3",
            hoverSide === "right" ? "opacity-100" : "opacity-0",
          )}
        >
          <div className="w-8 h-8 rounded-full bg-slate-950/80 border border-[#00f0ff]/50 flex items-center justify-center text-[#00f0ff] shadow-[0_0_15px_rgba(0,240,255,0.6)] animate-pulse">
            <ChevronRight className="size-4" />
          </div>
        </div>

        <div
          ref={frameRef}
          tabIndex={0}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onMouseMove={handleContainerMouseMove}
          onMouseLeave={handleContainerMouseLeave}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft") {
              event.preventDefault();
              nudge(-1);
            } else if (event.key === "ArrowRight") {
              event.preventDefault();
              nudge(1);
            }
          }}
          className="cursor-grab overflow-hidden py-10 outline-none ring-ring focus-visible:ring-2 active:cursor-grabbing"
          style={{
            perspective: `calc(var(--cf-card) * ${perspective})`,
            touchAction: "pan-y",
          }}
        >
          <div
            className="relative select-none"
            style={{
              height: "var(--cf-card)",
              transformStyle: "preserve-3d",
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                ref={(node) => {
                  cardRefs.current[index] = node;
                }}
                role="group"
                aria-roledescription="slide"
                aria-label={`${index + 1} of ${count}`}
                onClick={() => handleSlideClick(index, slide.href)}
                onMouseEnter={() => handleSlideHover(index)}
                onMouseLeave={handleSlideLeave}
                className={cn(
                  "absolute left-1/2 top-0 aspect-square overflow-hidden rounded-2xl bg-muted shadow-xl will-change-transform group cursor-pointer transition-shadow duration-300 hover:shadow-[0_0_35px_rgba(0,240,255,0.4)]",
                  cardClassName,
                )}
                style={{ width: "var(--cf-card)" }}
              >
                <div className="w-full h-full relative">
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    draggable={false}
                    className="h-full w-full select-none object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center backdrop-blur-sm pointer-events-none">
                    <div className="w-12 h-12 rounded-full bg-[#00f0ff]/20 border border-[#00f0ff]/60 flex items-center justify-center shadow-[0_0_25px_rgba(0,240,255,0.6)] group-hover:scale-110 transition-transform">
                      <ExternalLink className="size-5 text-[#00f0ff]" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {showNavigation && (
          <>
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => nudge(-1)}
              className="absolute left-3 top-1/2 z-[200] -translate-y-1/2 rounded-full bg-background/70 p-2 text-foreground backdrop-blur transition hover:bg-background"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => nudge(1)}
              className="absolute right-3 top-1/2 z-[200] -translate-y-1/2 rounded-full bg-background/70 p-2 text-foreground backdrop-blur transition hover:bg-background"
            >
              <ChevronRight className="size-5" />
            </button>
          </>
        )}
      </div>

      {showCaption && active?.title && (
        <div
          key={selected}
          className="mt-2 flex flex-col items-center px-6 duration-300 animate-in fade-in text-center"
        >
          <a
            href={active.href || "#"}
            target="_blank"
            rel="noreferrer"
            className="text-[17px] font-bold tracking-tight text-foreground hover:text-[#00f0ff] flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            {active.title} <ExternalLink className="size-4 text-[#00f0ff]" />
          </a>
          {active.subtitle && (
            <p className="mt-1 text-[13px] text-muted-foreground">
              {active.subtitle}
            </p>
          )}
          {active.meta && active.meta.length > 0 && (
            <dl className="mt-6 w-full max-w-[260px] text-[12px]">
              {active.meta.map((row) => (
                <div key={row.label} className="flex justify-between py-[5px] border-b border-white/5">
                  <dt className="text-muted-foreground">{row.label}</dt>
                  <dd className="font-medium text-foreground">{row.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      )}

      {showPagination && (
        <div className="mt-6 flex items-center justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === selected}
              onClick={() => goTo(index)}
              className={cn(
                "size-2 rounded-full bg-foreground transition-opacity",
                index === selected ? "opacity-100" : "opacity-30",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
