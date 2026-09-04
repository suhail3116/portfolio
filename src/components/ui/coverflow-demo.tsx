"use client";

import { CoverflowCarousel } from "@/components/ui/coverflow-carousel";

const UNSPLASH = (id: string) =>
  `https://images.unsplash.com/photo-${id}?w=640&h=640&fit=crop&q=70&auto=format`;

const SLIDES = [
  {
    src: "/assets/projects/sumaiya_tailors.jpg",
    alt: "Sumaiya Tailors Luxury Bespoke Blouse & Maggam Work Website",
    title: "Sumaiya Tailors Client Showcase",
    subtitle: "Bespoke Blouse, Maggam Work & WhatsApp Direct Stitching Web App",
    href: "https://sumaiya-tailors.netlify.app/",
    meta: [
      { label: "Client", value: "Sumaiya Tailors" },
      { label: "Live App", value: "sumaiya-tailors.netlify.app" },
      { label: "Repo", value: "ST-clientPage" },
    ],
  },
  {
    src: "/assets/projects/rolls_royce.jpg",
    alt: "3D Rolls Royce Interactive Car Showcase Website",
    title: "3D Rolls Royce Web Experience",
    subtitle: "Interactive 3D WebGL Rolls Royce Car Showcase Website",
    href: "https://github.com/suhail3116/3d-scrolling-website",
    meta: [
      { label: "Repository", value: "3d-scrolling-website" },
      { label: "Tech", value: "Three.js, WebGL, 3D" },
      { label: "Author", value: "suhail3116" },
    ],
  },
  {
    src: UNSPLASH("1460925895917-afdab827c52f"),
    alt: "IPL Cricket Data Analytics Platform",
    title: "IPL Cricket Data Analyzer",
    subtitle: "Comprehensive Sports Data Visual Insights & Statistics",
    href: "https://github.com/suhail3116/ipl-analyzer",
    meta: [
      { label: "Repository", value: "ipl-analyzer" },
      { label: "Tech", value: "Python, JS Analytics" },
      { label: "Author", value: "suhail3116" },
    ],
  },
  {
    src: UNSPLASH("1519389950473-47ba0277781c"),
    alt: "DocSum AI Document Summarization Suite",
    title: "DocSum AI Document Suite",
    subtitle: "Smart Automated Document Analysis & Text Insights",
    href: "https://github.com/suhail3116/docsum",
    meta: [
      { label: "Repository", value: "docsum" },
      { label: "Tech", value: "Python, React, NLP" },
      { label: "Author", value: "suhail3116" },
    ],
  },
  {
    src: UNSPLASH("1530836369250-ef72a3f5cda8"),
    alt: "AgriGuard Plant Disease Analysis & Detection System",
    title: "AgriGuard Plant Disease AI",
    subtitle: "AI Plant Disease Analysis & Leaf Health Detection Website",
    href: "https://github.com/suhail3116/agrigaurd",
    meta: [
      { label: "Repository", value: "agrigaurd" },
      { label: "Domain", value: "Plant Disease AI" },
      { label: "Author", value: "suhail3116" },
    ],
  },
  {
    src: "/assets/projects/queenathon.jpg",
    alt: "Queenathon Hackathon Platform",
    title: "Queenathon Event Platform",
    subtitle: "Hackathon Competition Portal & Leaderboard Engine",
    href: "https://github.com/suhail3116/queenathon",
    meta: [
      { label: "Repository", value: "queenathon" },
      { label: "Event", value: "Live Hackathon" },
      { label: "Author", value: "suhail3116" },
    ],
  },
  {
    src: "/assets/projects/chemify.jpg",
    alt: "Chemify Interactive 3D Chemistry Learning App",
    title: "Chemify 3D Chemistry App",
    subtitle: "Visual Educational Tool for Chemistry & 3D Molecules",
    href: "https://github.com/suhail3116/Chemify",
    meta: [
      { label: "Repository", value: "Chemify" },
      { label: "Tech", value: "React, 3D Molecules" },
      { label: "Author", value: "suhail3116" },
    ],
  },
  {
    src: "/assets/projects/certificate_editor.jpg",
    alt: "Dynamic Internship Certificate Generator",
    title: "Internship Certificate Editor",
    subtitle: "Customizable Web Tool for Bulk Certificate Design & Issue",
    href: "https://github.com/suhail3116/internship-certificate-editor",
    meta: [
      { label: "Repository", value: "internship-certificate-editor" },
      { label: "Export", value: "Vector PDF / PNG" },
      { label: "Author", value: "suhail3116" },
    ],
  },
  {
    src: "/assets/projects/quiz_mastery.jpg",
    alt: "Quiz-Mastery Interactive Platform",
    title: "Quiz-Mastery Platform",
    subtitle: "Interactive Quiz & Assessment Platform",
    href: "https://github.com/suhail3116/Quiz-Mastery",
    meta: [
      { label: "Repository", value: "Quiz-Mastery" },
      { label: "Features", value: "Live Scoring UI" },
      { label: "Author", value: "suhail3116" },
    ],
  },
  {
    src: "/assets/projects/studyverse.jpg",
    alt: "studyVerse Student Hub",
    title: "studyVerse Workspace",
    subtitle: "Digital Learning Workspace for Students & Peer Groups",
    href: "https://github.com/suhail3116/studyVerse",
    meta: [
      { label: "Repository", value: "studyVerse" },
      { label: "Tech", value: "React, Node, Express" },
      { label: "Author", value: "suhail3116" },
    ],
  },
  {
    src: "/assets/projects/editors.jpg",
    alt: "Editors-Repo Online Code Editor",
    title: "Editors-Repo IDE",
    subtitle: "In-Browser Code Playground with Syntax Highlighting",
    href: "https://github.com/suhail3116/Editors-Repo",
    meta: [
      { label: "Repository", value: "Editors-Repo" },
      { label: "Feature", value: "Live Code Preview" },
      { label: "Author", value: "suhail3116" },
    ],
  },
  {
    src: UNSPLASH("1508700115892-45ecd05ae2ad"),
    alt: "Hawkins Interactive Retro Web Showcase",
    title: "Hawkins Retro Experience",
    subtitle: "Retro Synthwave & Stranger Things Inspired Web Showcase",
    href: "https://github.com/suhail3116/hawkins-site",
    meta: [
      { label: "Repository", value: "hawkins-site" },
      { label: "Style", value: "Retro Synthwave" },
      { label: "Author", value: "suhail3116" },
    ],
  },
  {
    src: "/assets/projects/voting.jpg",
    alt: "Voting E-Voting System",
    title: "Voting System",
    subtitle: "Tamper-Evident Digital E-Voting Web Application",
    href: "https://github.com/suhail3116/voting",
    meta: [
      { label: "Repository", value: "voting" },
      { label: "Security", value: "Encrypted Tallying" },
      { label: "Author", value: "suhail3116" },
    ],
  },
  {
    src: UNSPLASH("1540910419892-4a36d2c3266c"),
    alt: "S-Voting Student Campus Election Portal",
    title: "S-Voting Campus Portal",
    subtitle: "Organization & Student Council E-Voting System",
    href: "https://github.com/suhail3116/s-voting",
    meta: [
      { label: "Repository", value: "s-voting" },
      { label: "Domain", value: "Campus E-Voting" },
      { label: "Author", value: "suhail3116" },
    ],
  },
  {
    src: "/assets/projects/pcod.jpg",
    alt: "PCOD Health Risk Portal",
    title: "PCOD Health Assessment",
    subtitle: "Medical Health Self-Assessment & Risk Analytics",
    href: "https://github.com/suhail3116/pcod",
    meta: [
      { label: "Repository", value: "pcod" },
      { label: "Tech", value: "Python, JS Analytics" },
      { label: "Author", value: "suhail3116" },
    ],
  },
  {
    src: UNSPLASH("1454165804606-c3d57bc86b40"),
    alt: "BISCOM Business Communication Portal",
    title: "BISCOM Business Portal",
    subtitle: "Corporate Services & Commercial Product Web Portal",
    href: "https://github.com/suhail3116/biscom",
    meta: [
      { label: "Repository", value: "biscom" },
      { label: "Domain", value: "Corporate Services" },
      { label: "Author", value: "suhail3116" },
    ],
  },
  {
    src: UNSPLASH("1550745165-9bc0b252726f"),
    alt: "Crasher Web Game Engine",
    title: "Crasher Web Game Engine",
    subtitle: "Arcade Web Game & Browser Canvas Benchmark",
    href: "https://github.com/suhail3116/crasher",
    meta: [
      { label: "Repository", value: "crasher" },
      { label: "Tech", value: "Canvas 2D API" },
      { label: "Author", value: "suhail3116" },
    ],
  }
];

export default function CoverflowDemo() {
  return (
    <div className="w-full overflow-hidden bg-background py-6">
      <CoverflowCarousel slides={SLIDES} showCaption showNavigation showPagination />
    </div>
  );
}
