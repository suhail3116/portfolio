export interface Skill {
  name: string;
  category: string;
  level: number;
  iconName: string;
  years: string;
  highlight: string;
}

export interface Metric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  featured: boolean;
  image: string;
  metrics: Metric[];
  tags: string[];
  description: string;
  highlights: string[];
  github: string;
  live: string;
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  location: string;
  summary: string;
  achievements: string[];
}

export interface Education {
  degree: string;
  institution: string;
  status: string;
  year: string;
  highlights: string[];
}

export interface Honor {
  number: string;
  title: string;
  event: string;
  description: string;
  achievement: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  badgeColor: string;
  skills: string[];
  verificationUrl: string;
  image?: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "M MUHAMMED SUHAIL",
    handle: "suhail3116",
    title: "AI & Pro Full-Stack Developer",
    tagline: "Building High-Scale Web Platforms, Claude AI Apps, 3D WebGL Experiences & Client E-Commerce Systems",
    location: "Coimbatore, Tamil Nadu, India",
    status: "Open for Full-Stack Contracts & AI Engineering Roles",
    statusColor: "#10b981",
    bio: "Passionate AI & Full-Stack Developer pursuing B.E. in Computer Science Engineering. Experienced in crafting production web apps, client e-commerce platforms, Claude API prompt architectures, and 3D WebGL experiences.",
    avatar: "/assets/avatar_user.jpg",
    stats: [
      { label: "Public Repos", value: "17" },
      { label: "Voters Served", value: "700+" },
      { label: "Client Apps", value: "Live" },
      { label: "Certifications", value: "Verified" }
    ],
    social: {
      github: "https://github.com/suhail3116",
      linkedin: "https://www.linkedin.com/in/muhammed-suhail-4a0a9936b/",
      twitter: "https://x.com",
      email: "cse23500492@gmail.com",
      phone: "+91 9043356776"
    }
  },

  skillCategories: [
    { id: "all", name: "All Technologies" },
    { id: "frontend", name: "Frontend & 3D Web" },
    { id: "backend", name: "Backend & Databases" },
    { id: "tools", name: "Tools & Leadership" }
  ],

  skills: [
    { name: "React.js & Next.js", category: "frontend", level: 94, iconName: "Atom", years: "Modern", highlight: "Interactive SPAs, Modern Hooks, Custom UI" },
    { name: "TypeScript & JavaScript (ES6+)", category: "frontend", level: 93, iconName: "Code2", years: "Core", highlight: "Strict Typing, Async/Await, Web APIs" },
    { name: "Three.js & 3D WebGL", category: "frontend", level: 88, iconName: "Palette", years: "Creative", highlight: "Scroll-Driven 3D Models, Custom Shaders" },
    { name: "Tailwind CSS & Glassmorphism", category: "frontend", level: 95, iconName: "Layout", years: "Design", highlight: "Responsive Layouts, Dark Themes, shadcn" },

    { name: "MongoDB & MERN Stack", category: "backend", level: 92, iconName: "Database", years: "MERN", highlight: "MongoDB Schemas, Express REST, Full-Stack" },
    { name: "Node.js & Express", category: "backend", level: 90, iconName: "Server", years: "Backend", highlight: "REST APIs, Middleware, Auth Handlers" },
    { name: "Python & Data Science", category: "backend", level: 88, iconName: "Terminal", years: "Analytics", highlight: "FastAPI, Data Analysis, NLP Pipelines" },
    { name: "Supabase & PostgreSQL", category: "backend", level: 90, iconName: "Database", years: "Realtime", highlight: "Row Level Security (RLS), Realtime DB" },

    { name: "Git, GitHub & Workflows", category: "tools", level: 95, iconName: "GitBranch", years: "DevOps", highlight: "Version Control, Agile Sprint Leadership" },
    { name: "Agile Project Leadership", category: "tools", level: 91, iconName: "ShieldCheck", years: "Team", highlight: "Sprint Planning, Cross-Functional Leadership" }
  ],

  certifications: [
    {
      id: "cert-mern-vaizai",
      title: "6-Month MERN Stack Development Internship",
      issuer: "Vaizai Solutions (Mentor: Vijay S)",
      issueDate: "Verified",
      credentialId: "VAIZAI-MERN-6M",
      badgeColor: "#3b82f6",
      skills: ["MongoDB", "Express.js", "React.js", "Node.js", "Full-Stack Web Dev"],
      verificationUrl: "https://www.linkedin.com/in/muhammed-suhail-4a0a9936b/",
      image: "/assets/vaizai_mern_certificate.png"
    },
    {
      id: "cert-ai-claude",
      title: "Claude AI & Multimodal Prompt Engineering",
      issuer: "Anthropic / CodePath Fellowship Track",
      issueDate: "Verified",
      credentialId: "MS-AI-88392",
      badgeColor: "#00f0ff",
      skills: ["Claude API", "Multimodal Vision", "System Guardrails", "Prompt Design"],
      verificationUrl: "https://www.linkedin.com/in/muhammed-suhail-4a0a9936b/"
    },
    {
      id: "cert-fullstack-dev",
      title: "Full-Stack Web Development & Modern React",
      issuer: "Professional Web Engineering Certification",
      issueDate: "Verified",
      credentialId: "MS-FS-94021",
      badgeColor: "#a855f7",
      skills: ["React.js", "TypeScript", "Node.js", "REST APIs", "Tailwind CSS"],
      verificationUrl: "https://www.linkedin.com/in/muhammed-suhail-4a0a9936b/"
    },
    {
      id: "cert-agile-lead",
      title: "Agile Project Leadership & Software Delivery",
      issuer: "Agna Private Limited — Internship Certification",
      issueDate: "Verified",
      credentialId: "AGNA-LEAD-2024",
      badgeColor: "#10b981",
      skills: ["Agile Sprint Leadership", "Task Breakdown", "Code Reviews", "Cross-Functional Management"],
      verificationUrl: "https://www.linkedin.com/in/muhammed-suhail-4a0a9936b/"
    },
    {
      id: "cert-python-data",
      title: "Python Data Science & NLP Automation",
      issuer: "Advanced Technical Competency",
      issueDate: "Verified",
      credentialId: "MS-PY-73019",
      badgeColor: "#eab308",
      skills: ["Python", "FastAPI", "NLP Tokenization", "Data Analytics"],
      verificationUrl: "https://www.linkedin.com/in/muhammed-suhail-4a0a9936b/"
    },
    {
      id: "cert-sih-national",
      title: "Smart India Hackathon (SIH) National Finalist",
      issuer: "Government of India / SIH Committee",
      issueDate: "Verified",
      credentialId: "SIH-NAT-FINALIST",
      badgeColor: "#ec4899",
      skills: ["Rapid 36-Hour Sprint", "Civic Problem Solving", "System Architecture"],
      verificationUrl: "https://www.linkedin.com/in/muhammed-suhail-4a0a9936b/"
    }
  ],

  // ALL 17 PUBLIC REPOSITORIES
  projects: [
    {
      id: "ST-clientPage",
      title: "Sumaiya Tailors: Bespoke Blouse & Maggam Work Web Platform",
      subtitle: "Bespoke Blouse Stitching, Hand-Embroidered Maggam & Direct WhatsApp Booking",
      category: "Client E-Commerce Web App",
      featured: true,
      image: "/assets/projects/sumaiya_tailors.jpg",
      metrics: [
        { label: "Client", value: "Sumaiya Tailors Studio" },
        { label: "Live Deployment", value: "sumaiya-tailors.netlify.app" },
        { label: "Integration", value: "WhatsApp Direct Inquiries" }
      ],
      tags: ["React", "JavaScript", "Tailwind CSS", "Netlify Deployment", "WhatsApp API"],
      description: "A luxury boutique tailoring web application built for Sumaiya Tailors featuring custom blouse measurement forms, handcrafted zardosi maggam work galleries, saree pre-pleating services, and direct WhatsApp stitching inquiry integration.",
      highlights: [
        "Architected an elegant client-facing luxury web application for custom blouse and maggam stitching orders.",
        "Integrated direct WhatsApp booking flows for instant stitching inquiries and appointment scheduling.",
        "Built responsive design galleries for traditional models, fabric guides, and pre-pleating services."
      ],
      github: "https://github.com/suhail3116/ST-clientPage",
      live: "https://sumaiya-tailors.netlify.app/"
    },
    {
      id: "ev-cast",
      title: "EV-CAST / Voting: Secure Civic E-Voting Platform",
      subtitle: "Full-Stack Electronic Voting Platform for 700+ Active Voters",
      category: "Civic Tech & Web Security",
      featured: true,
      image: "/assets/projects/voting.jpg",
      metrics: [
        { label: "Active Voters", value: "700+ Members" },
        { label: "Security", value: "Supabase RLS & Auth" },
        { label: "Sync", value: "Real-Time DB" }
      ],
      tags: ["JavaScript", "HTML5", "CSS3", "Supabase", "Supabase Auth", "Realtime DB"],
      description: "A production-tested secure electronic voting system engineered for institutional elections, serving over 700 voters with live real-time result syncing and role-based access controls.",
      highlights: [
        "Engineered a full-stack electronic voting platform for 700+ members with multi-position balloting.",
        "Implemented role-based authentication (Voter vs. Staff) with Supabase Auth and live database sync.",
        "Uses Supabase PostgreSQL with Row Level Security (RLS) policies to prevent double-voting and enforce audit integrity."
      ],
      github: "https://github.com/suhail3116/voting",
      live: "https://github.com/suhail3116/voting"
    },
    {
      id: "3d-scrolling-website",
      title: "Rolls-Royce Cinematic 3D Web Experience",
      subtitle: "Immersive WebGL 3D Rolls Royce Scroll-Driven Website",
      category: "Frontend & 3D Web",
      featured: true,
      image: "/assets/projects/rolls_royce.jpg",
      metrics: [
        { label: "Renderer", value: "WebGL / Three.js" },
        { label: "Frame Rate", value: "60 FPS Smooth" },
        { label: "UX", value: "Scroll Driven" }
      ],
      tags: ["Vanilla JS", "Three.js", "WebGL", "CSS Glassmorphism", "HTML5"],
      description: "High-end interactive web showcase featuring WebGL 3D particle canvas, frame-by-frame scroll animations, luxury glassmorphism UI, and custom cursor interaction.",
      highlights: [
        "Built a scroll-triggered image-sequence luxury website with glassmorphism overlays and custom cursor.",
        "Optimized WebGL particle rendering and smooth 60fps animation performance.",
        "Custom requestAnimationFrame render loop with hardware-accelerated CSS transform layers."
      ],
      github: "https://github.com/suhail3116/3d-scrolling-website",
      live: "https://github.com/suhail3116/3d-scrolling-website"
    },
    {
      id: "agrigaurd",
      title: "AgriGuard: AI Plant Disease Analysis & Detection System",
      subtitle: "Multimodal AI Crop Protection & Leaf Health Detection Website",
      category: "Computer Vision & AI",
      featured: true,
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=800&q=80",
      metrics: [
        { label: "Model", value: "Claude Vision AI" },
        { label: "Region", value: "Tamil Nadu AgriTech" },
        { label: "Output", value: "Structured Remedial JSON" }
      ],
      tags: ["Python", "Claude API (Vision)", "Multimodal AI", "OpenCV", "JavaScript"],
      description: "Multimodal AI crop protection tool that analyzes plant leaf images using Claude Vision to identify diseases early and recommend organic/chemical treatments for local farmers.",
      highlights: [
        "Developed a crop disease identification pipeline using Claude's multimodal vision model.",
        "Empowered smallholder farmers in Tamil Nadu with localized, actionable treatment remedies.",
        "Combines image preprocessing with structured JSON output prompts to yield multi-language treatment instructions."
      ],
      github: "https://github.com/suhail3116/agrigaurd",
      live: "https://github.com/suhail3116/agrigaurd"
    },
    {
      id: "pcod",
      title: "PCOD Care AI & Risk Assessment Portal",
      subtitle: "Medical Health Assistant & Empathetic AI Diagnostic Guidance",
      category: "Healthcare AI",
      featured: true,
      image: "/assets/projects/pcod.jpg",
      metrics: [
        { label: "Engine", value: "Claude API / LLM" },
        { label: "Safety", value: "Empathetic Guardrails" },
        { label: "UX", value: "Patient Guidance" }
      ],
      tags: ["Python", "Claude API (Anthropic)", "FastAPI", "Prompt Engineering"],
      description: "An AI-powered health assistant leveraging the Claude API to analyze PCOS/PCOD symptoms, providing empathetic medical guidance and tailored lifestyle interventions.",
      highlights: [
        "Built a diagnostic assistant analyzing PCOD/PCOS symptoms with personalized health guidance.",
        "Architected empathetic, multi-turn conversational prompt chains tailored to sensitive health queries.",
        "Employs system-prompt guardrails ensuring safety, non-diagnostic disclaimers, and empathetic conversational flow."
      ],
      github: "https://github.com/suhail3116/pcod",
      live: "https://github.com/suhail3116/pcod"
    },
    {
      id: "ipl-analyzer",
      title: "IPL Cricket Data Analytics & Insights Platform",
      subtitle: "Comprehensive Sports Data Analysis & Visual Dashboards",
      category: "Data Analytics",
      featured: true,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      metrics: [
        { label: "Data Scope", value: "All IPL Seasons" },
        { label: "Analytics", value: "Real-time Metrics" },
        { label: "Charts", value: "Dynamic Visuals" }
      ],
      tags: ["Python", "JavaScript", "Data Visualization", "REST API"],
      description: "Data analytics application providing deep statistical breakdowns, player performance comparisons, and match outcome predictions.",
      highlights: [
        "Clean chart visualizations for run rates, wicket distributions, and venue statistics.",
        "Fast query performance across large historical cricket match datasets.",
        "Interactive filter controls for team, season, and player stats."
      ],
      github: "https://github.com/suhail3116/ipl-analyzer",
      live: "https://github.com/suhail3116/ipl-analyzer"
    },
    {
      id: "docsum",
      title: "DocSum: NLP Hierarchical Document Intelligence Engine",
      subtitle: "Smart Automated Document Analysis & Text Summarizer",
      category: "NLP & Productivity",
      featured: true,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      metrics: [
        { label: "Engine", value: "Claude API / PyPDF2" },
        { label: "Processing", value: "Token Chunking" },
        { label: "Speed", value: "Hierarchical Summaries" }
      ],
      tags: ["Python", "Claude API", "PyPDF2", "NLP", "React"],
      description: "Document intelligence engine that parses multi-page PDFs and synthesizes core takeaways, methodology, and conclusion summaries using chunked tokenization pipelines.",
      highlights: [
        "Ingests long-form PDFs and research papers to generate hierarchical bullet summaries.",
        "Accelerates study and literature review times for students and researchers.",
        "Chunked text tokenization pipeline for processing long papers within Claude context limits."
      ],
      github: "https://github.com/suhail3116/docsum",
      live: "https://github.com/suhail3116/docsum"
    },
    {
      id: "Chemify",
      title: "Chemify: STEM AI Chemistry Learning Companion",
      subtitle: "Visual Educational Tool for Chemical Reactions & 3D Models",
      category: "EdTech & STEM AI",
      featured: false,
      image: "/assets/projects/chemify.jpg",
      metrics: [
        { label: "Engine", value: "Claude API / React" },
        { label: "Visuals", value: "3D Molecular Models" },
        { label: "Features", value: "Step-by-step Reasoning" }
      ],
      tags: ["Python", "Claude API", "React", "Prompt Design", "3D Molecules"],
      description: "Interactive STEM learning companion designed to guide students through chemistry homework, reaction mechanisms, and equation balancing.",
      highlights: [
        "Constructed a chemistry learning assistant explaining complex chemical reactions and stoichiometry.",
        "Implemented step-by-step tutoring flows with multi-turn context retention.",
        "Structured prompt formatting converts raw chemical notation into clear step-by-step reasoning."
      ],
      github: "https://github.com/suhail3116/Chemify",
      live: "https://github.com/suhail3116/Chemify"
    },
    {
      id: "queenathon",
      title: "Queenathon: Hackathon & Event Management Platform",
      subtitle: "Competition Portal for Team Registration & Submissions",
      category: "Event Tech Web App",
      featured: false,
      image: "/assets/projects/queenathon.jpg",
      metrics: [
        { label: "Teams", value: "Multi-Team Registration" },
        { label: "Timeline", value: "Live Agenda" },
        { label: "Submissions", value: "Project Portal" }
      ],
      tags: ["JavaScript", "HTML5", "CSS3", "Event Tech"],
      description: "A dedicated hackathon portal providing schedule timelines, team registration forms, problem statements, and submission links.",
      highlights: [
        "Responsive event homepage showcasing countdown clocks and rules.",
        "Interactive problem statement tabs and judge evaluation guidelines.",
        "Smooth mobile navigation and dark aesthetic."
      ],
      github: "https://github.com/suhail3116/queenathon",
      live: "https://github.com/suhail3116/queenathon"
    },
    {
      id: "internship-certificate-editor",
      title: "Dynamic Internship Certificate Generator",
      subtitle: "Customizable Web Tool for Bulk Certificate Design & Issue",
      category: "Web Tool",
      featured: false,
      image: "/assets/projects/certificate_editor.jpg",
      metrics: [
        { label: "Output", value: "High-Res PDF / PNG" },
        { label: "Templates", value: "Fully Dynamic" },
        { label: "Speed", value: "Instant Export" }
      ],
      tags: ["JavaScript", "Canvas API", "HTML5", "CSS3"],
      description: "A flexible web application for custom designing, editing, and batch generating official internship certificates.",
      highlights: [
        "WYSIWYG live editing canvas with custom typography and logo placement.",
        "One-click batch generation from CSV intern lists.",
        "High-resolution vector PDF export support."
      ],
      github: "https://github.com/suhail3116/internship-certificate-editor",
      live: "https://github.com/suhail3116/internship-certificate-editor"
    },
    {
      id: "Quiz-Mastery",
      title: "Quiz-Mastery: Interactive Quiz & Assessment Platform",
      subtitle: "Gamified Testing & Knowledge Evaluation Engine",
      category: "EduTech Web App",
      featured: false,
      image: "/assets/projects/quiz_mastery.jpg",
      metrics: [
        { label: "Scoring", value: "Instant Feedback" },
        { label: "Timer", value: "Per Question" },
        { label: "UX", value: "Gamified UI" }
      ],
      tags: ["JavaScript", "React", "CSS3", "State Management"],
      description: "An engaging quiz platform featuring real-time score tracking, countdown timers, subject categorization, and detailed performance analytics.",
      highlights: [
        "Dynamic question generator supporting multiple choice and true/false types.",
        "Live leaderboard and instant answer explanation tooltips.",
        "Responsive dark mode UI built with custom CSS variables."
      ],
      github: "https://github.com/suhail3116/Quiz-Mastery",
      live: "https://github.com/suhail3116/Quiz-Mastery"
    },
    {
      id: "studyVerse",
      title: "studyVerse: Student Collaboration & Learning Hub",
      subtitle: "Digital Learning Workspace for Students & Peer Groups",
      category: "Full Stack Web App",
      featured: false,
      image: "/assets/projects/studyverse.jpg",
      metrics: [
        { label: "Workspace", value: "Group Study" },
        { label: "Resources", value: "Shared Hub" },
        { label: "Features", value: "Notes & Chat" }
      ],
      tags: ["React", "Node.js", "Express", "Tailwind CSS"],
      description: "A centralized digital environment allowing students to share study materials, collaborate on assignments, and track task progress.",
      highlights: [
        "Shared note repository with tagged search and document uploads.",
        "Real-time task board for tracking individual and group assignment deadlines.",
        "Minimalist aesthetic focused on study productivity."
      ],
      github: "https://github.com/suhail3116/studyVerse",
      live: "https://github.com/suhail3116/studyVerse"
    },
    {
      id: "Editors-Repo",
      title: "Editors-Repo: Online Code & Content Editor Workspace",
      subtitle: "In-Browser Code Playground with Syntax Highlighting",
      category: "Developer Tool",
      featured: false,
      image: "/assets/projects/editors.jpg",
      metrics: [
        { label: "Languages", value: "HTML/CSS/JS" },
        { label: "Preview", value: "Instant Live" },
        { label: "Performance", value: "Zero Delay" }
      ],
      tags: ["TypeScript", "Monaco / CodeMirror", "CSS3", "DOM API"],
      description: "A browser-based code editing playground allowing developers to prototype HTML, CSS, and JavaScript snippets with instant live preview.",
      highlights: [
        "Split-pane layout with adjustable editor and preview viewports.",
        "Syntax highlighting and automatic line numbering.",
        "Local storage persistence for keeping code drafts saved across sessions."
      ],
      github: "https://github.com/suhail3116/Editors-Repo",
      live: "https://github.com/suhail3116/Editors-Repo"
    },
    {
      id: "hawkins-site",
      title: "Hawkins Interactive Themed Web Experience",
      subtitle: "Retro Synthwave & Stranger Things Inspired Web Showcase",
      category: "Creative Frontend",
      featured: false,
      image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80",
      metrics: [
        { label: "Style", value: "Retro Synthwave" },
        { label: "FX", value: "CRT & Neon Glow" },
        { label: "Audio", value: "Ambient FX" }
      ],
      tags: ["JavaScript", "HTML5", "CSS3 Animations"],
      description: "A retro-themed web application showcasing custom CRT screen animations, glowing neon typography, and interactive easter eggs.",
      highlights: [
        "Custom CSS keyframe glow filters and scanline overlay effects.",
        "Sound effect toggles for keypresses and atmospheric audio.",
        "Fully responsive layout across mobile and desktop breakpoints."
      ],
      github: "https://github.com/suhail3116/hawkins-site",
      live: "https://github.com/suhail3116/hawkins-site"
    },
    {
      id: "s-voting",
      title: "S-Voting: Student & Campus Election Portal",
      subtitle: "Organization & Student Council E-Voting System",
      category: "Web Security",
      featured: false,
      image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=800&q=80",
      metrics: [
        { label: "Authentication", value: "Student ID Auth" },
        { label: "Audit", value: "Transparent Logs" },
        { label: "UI", value: "Clean & Simple" }
      ],
      tags: ["JavaScript", "HTML5", "CSS3", "Authentication"],
      description: "A campus election portal designed to streamline student council voting with secure voter credential verification.",
      highlights: [
        "Role-based voting system for different student departments.",
        "Live ballot count updates and position summaries.",
        "Clean mobile-friendly layout for quick voter participation."
      ],
      github: "https://github.com/suhail3116/s-voting",
      live: "https://github.com/suhail3116/s-voting"
    },
    {
      id: "biscom",
      title: "BizConnect & BISCOM: Corporate AI Networking Portal",
      subtitle: "AI Co-Founder Matchmaker & Corporate Services Portal",
      category: "E-Commerce & AI",
      featured: false,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      metrics: [
        { label: "Engine", value: "Claude API / Node.js" },
        { label: "Matching", value: "Vector Profiles" },
        { label: "Services", value: "Product Catalog" }
      ],
      tags: ["JavaScript", "Node.js", "Express", "Claude API"],
      description: "Intelligent professional networking web application that matches founders with investors and generates tailored collaboration proposals.",
      highlights: [
        "Created an AI matching platform connecting entrepreneurs, investors, and technical co-founders.",
        "Integrated Claude API to generate personalized icebreaker summaries based on user profiles.",
        "Uses vector profile similarity and Claude LLM synthesis to draft warm introductory messages."
      ],
      github: "https://github.com/suhail3116/biscom",
      live: "https://github.com/suhail3116/biscom"
    },
    {
      id: "crasher",
      title: "Crasher: Web Game Engine & Benchmark Utility",
      subtitle: "Arcade Web Game & Browser Canvas Benchmark",
      category: "Web Game / Utility",
      featured: false,
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
      metrics: [
        { label: "Engine", value: "Canvas 2D API" },
        { label: "FPS", value: "60 FPS Game Loop" },
        { label: "Controls", value: "Keyboard / Touch" }
      ],
      tags: ["JavaScript", "HTML5 Canvas", "Game Loop"],
      description: "An arcade-style browser web game utilizing Canvas 2D frame rendering and collision detection algorithms.",
      highlights: [
        "Custom requestAnimationFrame game loop.",
        "Collision detection and score multiplier engine.",
        "Retro arcade sound and visual feedback."
      ],
      github: "https://github.com/suhail3116/crasher",
      live: "https://github.com/suhail3116/crasher"
    }
  ],

  experience: [
    {
      period: "6-MONTH INTERNSHIP",
      role: "MERN Stack Development Intern",
      company: "Vaizai Solutions",
      location: "Full-Stack Development (Mentor: Vijay S)",
      summary: "Successfully completed a 6-month full-stack development internship covering MongoDB, Express.js, React.js, and Node.js (MERN stack), gaining comprehensive practical knowledge through hands-on projects and real-time development activities.",
      achievements: [
        "Architected and built full-stack web application components using MongoDB NoSQL databases, Express.js REST APIs, React.js frontend interfaces, and Node.js runtime.",
        "Engaged in real-time software development activities, hands-on production coding, and API endpoint integration under the direct mentorship of Vijay S.",
        "Applied core full-stack web development principles, responsive UI design, and database schema modeling to real-world software solutions."
      ]
    },
    {
      period: "HACKATHONS & COMPETITIVE TECH",
      role: "Team Leader across All Hackathons",
      company: "National & Regional Hackathon Sprints",
      location: "Dhaanish Ahmed Institute of Technology (B.E. CSE)",
      summary: "Served as the team captain and technical lead across all major hackathons, steering system architecture, rapid full-stack prototyping, and live pitch presentations with a dedicated squad of B.E. Computer Science Engineering classmates.",
      teamContext: "College Classmates in B.E. CSE",
      teamMembers: [
        "Ayisha Afreen",
        "Mohammed Basil",
        "Muhammad Farhan",
        "Balakumaran",
        "Anusuya",
        "Arul Devi"
      ],
      achievements: [
        "Led end-to-end system architecture, technical task distribution, and rapid code execution across 24-36 hour hackathon challenges.",
        "Team captain for our B.E. CSE classmates squad: Ayisha Afreen, Mohammed Basil, Muhammad Farhan, Balakumaran, Anusuya, and Arul Devi.",
        "Steered team to National Finalist status at Smart India Hackathon (SIH) and active team leader at Hackathon 360 (KPR Institute).",
        "Maintained high team velocity, agile sprint check-ins, and rapid git version control merges during intense competition deadlines."
      ]
    },
    {
      period: "INTERNSHIP ENGAGEMENT",
      role: "Team Leader – Internship Project",
      company: "Agna Private Limited",
      location: "Coimbatore, Tamil Nadu",
      summary: "Led a cross-functional student engineering team through a real-world software project from requirement analysis to final production delivery.",
      achievements: [
        "Managed task breakdown, timelines, daily standups, and code quality reviews using Agile methodologies.",
        "Served as the primary technical point of contact between student developers and company leadership.",
        "Ensured high code standards and timely deployment of deliverables."
      ]
    }
  ],

  education: [
    {
      degree: "B.E. Computer Science Engineering",
      institution: "Dhaanish Ahmed Institute of Technology, Coimbatore",
      status: "Pursuing (Current Student)",
      year: "2023 – Present",
      highlights: [
        "Focus on Artificial Intelligence, Database Systems, Web Technologies, and Software Engineering.",
        "Active team leader and hackathon competitor representing the institute."
      ]
    },
    {
      degree: "Diploma in Computer Science Engineering",
      institution: "Polytechnic / Technical Institute",
      status: "Completed (Graduated)",
      year: "Graduated",
      highlights: [
        "Built rigorous foundation in core computer science, C/C++ programming, networking, and data structures.",
        "Graduated with practical project completion and lab honors."
      ]
    }
  ],

  honors: [
    {
      number: "01",
      title: "Smart India Hackathon (SIH)",
      event: "Government of India National Hackathon",
      description: "Competed in the prestigious national-level hackathon solving real government problem statements under strict 36-hour sprint constraints.",
      achievement: "National Finalist Participant"
    },
    {
      number: "02",
      title: "Hackathon 360",
      event: "KPR Institute of Engineering & Technology",
      description: "Led frontend development of a functional working software prototype within a fastpassed 24-hour competitive coding hackathon.",
      achievement: "24-Hour Hackathon Leader"
    },
    {
      number: "03",
      title: "Office Task Site Challenge",
      event: "Productivity Hack Sprint",
      description: "Architected and delivered an office task automation and team workflow web tool during a rapid development competition.",
      achievement: "Rapid Build Highlight"
    },
    {
      number: "04",
      title: "Inter-College Code Competitions",
      event: "Multiple Regional Tech Sprints",
      description: "Consistent participant in competitive programming, web development showcases, and AI innovation hackathons across Tamil Nadu.",
      achievement: "Active Tech Competitor"
    }
  ],

  terminalCommands: {
    help: "Available commands:\n  • about    - Brief bio and background\n  • skills   - List top developer skills\n  • projects - View comprehensive details for all 17 projects\n  • project <#|name> - View detailed spec for a specific project\n  • exp / experience - View leadership & internship experience\n  • edu      - View education & degrees\n  • certs / certifications - View comprehensive details for verified certifications\n  • cert <#|name> - View detailed spec for a specific certification\n  • honors   - View hackathons & awards\n  • contact  - Display phone, email, LinkedIn links\n  • theme    - Cycle color theme (neon/emerald/sapphire)\n  • clear    - Clear terminal screen\n  • sudo hire - Unlock priority developer booking",
    about: "M MUHAMMED SUHAIL (suhail3116) // AI & MERN Full-Stack Developer\nCoimbatore, Tamil Nadu, India\nSpecializing in production MERN stack web apps, client e-commerce platforms, Claude AI prompt engineering, 3D WebGL, and civic tech.",
    skills: "PRIMARY TECH STACK:\n  MERN & Full-Stack: MongoDB, Express.js, React.js, Node.js, Next.js, TypeScript\n  Frontend & 3D:     React, Three.js, WebGL, Tailwind CSS, Glassmorphism\n  Backend:           Node.js, Express, Python, FastAPI, Supabase, PostgreSQL\n  Tools & Leadership: Git, GitHub, Agile Sprint Leadership",
    projects: `=== M MUHAMMED SUHAIL // ALL 17 PUBLIC PROJECTS & REPOSITORIES ===

[01] SUMAIYA TAILORS CLIENT PAGE (Client E-Commerce Web App)
     • Domain:      Bespoke Blouse Stitching, Maggam Work & Saree Pre-Pleating
     • Stack:       React, JavaScript, Tailwind CSS, Netlify, WhatsApp API
     • Metrics:     Client: Sumaiya Tailors Studio | Live Deployment | Direct WhatsApp
     • Details:     Luxury boutique tailoring web app featuring custom blouse measurement forms, handcrafted zardosi maggam work galleries, saree pre-pleating services, and direct WhatsApp stitching inquiry integration.
     • GitHub Repo: https://github.com/suhail3116/ST-clientPage
     • Live App:    https://sumaiya-tailors.netlify.app/

[02] EV-CAST / VOTING (Civic Tech & Web Security)
     • Domain:      Secure Institutional Electronic Voting Platform
     • Stack:       JavaScript, HTML5, CSS3, Supabase Auth, PostgreSQL, Realtime DB
     • Metrics:     700+ Active Voters | Supabase RLS Policies | Real-Time DB Sync
     • Details:     Production-tested electronic voting system engineered for institutional elections, serving over 700 voters with live real-time result syncing and role-based access controls to prevent double-voting.
     • GitHub Repo: https://github.com/suhail3116/voting
     • Live Demo:   https://github.com/suhail3116/voting

[03] 3D SCROLLING WEBSITE: ROLLS-ROYCE (Frontend & 3D Web)
     • Domain:      Immersive WebGL 3D Rolls-Royce Scroll-Driven Showcase
     • Stack:       Vanilla JS, Three.js, WebGL, CSS Glassmorphism, HTML5
     • Metrics:     60 FPS Render Loop | WebGL Particles | Scroll-Driven Shaders
     • Details:     High-end interactive web showcase featuring WebGL 3D particle canvas, frame-by-frame scroll animations, luxury glassmorphism UI, and custom cursor interaction.
     • GitHub Repo: https://github.com/suhail3116/3d-scrolling-website
     • Live Demo:   https://github.com/suhail3116/3d-scrolling-website

[04] AGRIGUARD (Computer Vision & AgriTech AI)
     • Domain:      Multimodal AI Crop Protection & Leaf Health Detection Website
     • Stack:       Python, Claude API (Vision), Multimodal AI, OpenCV, JavaScript
     • Metrics:     Claude Vision AI | Tamil Nadu AgriTech | Structured Remedial JSON
     • Details:     Multimodal AI crop protection tool that analyzes plant leaf images using Claude Vision to identify diseases early and recommend organic and chemical treatments for local farmers.
     • GitHub Repo: https://github.com/suhail3116/agrigaurd
     • Live Demo:   https://github.com/suhail3116/agrigaurd

[05] PCOD CARE AI (Healthcare AI & Assistant)
     • Domain:      Medical Health Assistant & Empathetic AI Diagnostic Guidance
     • Stack:       Python, Claude API (Anthropic), FastAPI, Prompt Engineering
     • Metrics:     Claude LLM Engine | Empathetic Guardrails | Patient Guidance Flow
     • Details:     AI-powered health assistant leveraging the Claude API to analyze PCOS/PCOD symptoms, providing empathetic medical guidance and tailored lifestyle interventions.
     • GitHub Repo: https://github.com/suhail3116/pcod
     • Live Demo:   https://github.com/suhail3116/pcod

[06] IPL ANALYZER (Sports Data Analytics)
     • Domain:      Comprehensive Cricket Data Analysis & Visual Dashboards
     • Stack:       Python, JavaScript, Data Visualization, REST API
     • Metrics:     Historical IPL Seasons Data | Real-time Metrics | Dynamic Visuals
     • Details:     Data analytics application providing deep statistical breakdowns, player performance comparisons, and match outcome predictions with responsive interactive charts.
     • GitHub Repo: https://github.com/suhail3116/ipl-analyzer
     • Live Demo:   https://github.com/suhail3116/ipl-analyzer

[07] DOCSUM (NLP & Productivity)
     • Domain:      Smart Automated Document Analysis & Text Summarizer
     • Stack:       Python, Claude API, PyPDF2, NLP, React
     • Metrics:     Token Chunking Pipeline | PyPDF2 Ingestion | Hierarchical Summaries
     • Details:     Document intelligence engine that parses multi-page PDFs and synthesizes core takeaways, methodology, and conclusion summaries using chunked tokenization pipelines.
     • GitHub Repo: https://github.com/suhail3116/docsum
     • Live Demo:   https://github.com/suhail3116/docsum

[08] CHEMIFY (STEM EdTech & Interactive 3D)
     • Domain:      Visual Educational Tool for Chemical Reactions & 3D Models
     • Stack:       Python, Claude API, React, Prompt Design, 3D Molecules
     • Metrics:     3D Molecular Models | Step-by-step Reasoning | Multi-turn Context
     • Details:     Interactive STEM learning companion designed to guide students through chemistry homework, reaction mechanisms, and equation balancing with step-by-step reasoning.
     • GitHub Repo: https://github.com/suhail3116/Chemify
     • Live Demo:   https://github.com/suhail3116/Chemify

[09] QUEENATHON (Event Tech Web App)
     • Domain:      Hackathon Competition Portal & Leaderboard Engine
     • Stack:       JavaScript, HTML5, CSS3, Event Tech
     • Metrics:     Multi-Team Registration | Live Agenda Timeline | Project Submissions
     • Details:     Dedicated hackathon portal providing schedule timelines, team registration forms, problem statement tabs, and judge evaluation guidelines.
     • GitHub Repo: https://github.com/suhail3116/queenathon
     • Live Demo:   https://github.com/suhail3116/queenathon

[10] INTERNSHIP CERTIFICATE GENERATOR (Web Automation Tool)
     • Domain:      Customizable Web Tool for Bulk Certificate Design & Issue
     • Stack:       JavaScript, Canvas API, HTML5, CSS3
     • Metrics:     Vector PDF / PNG Output | Dynamic Templates | Instant CSV Batch Export
     • Details:     Flexible web application for custom designing, editing, and batch generating official internship certificates from CSV intern lists with live WYSIWYG canvas preview.
     • GitHub Repo: https://github.com/suhail3116/internship-certificate-editor
     • Live Demo:   https://github.com/suhail3116/internship-certificate-editor

[11] QUIZ-MASTERY (EduTech Platform)
     • Domain:      Gamified Testing & Knowledge Evaluation Engine
     • Stack:       JavaScript, React, CSS3, State Management
     • Metrics:     Instant Feedback Scoring | Per-Question Timer | Gamified Dark UI
     • Details:     Engaging quiz platform featuring real-time score tracking, countdown timers, subject categorization, and detailed performance analytics.
     • GitHub Repo: https://github.com/suhail3116/Quiz-Mastery
     • Live Demo:   https://github.com/suhail3116/Quiz-Mastery

[12] STUDYVERSE (Collaboration & Full-Stack Platform)
     • Domain:      Digital Learning Workspace for Students & Peer Groups
     • Stack:       React, Node.js, Express, Tailwind CSS
     • Metrics:     Group Study Hub | Shared Notes Archive | Assignment Task Board
     • Details:     Centralized digital environment allowing students to share study materials, collaborate on assignments, and track task deadlines with a clean productivity aesthetic.
     • GitHub Repo: https://github.com/suhail3116/studyVerse
     • Live Demo:   https://github.com/suhail3116/studyVerse

[13] EDITORS-REPO (Developer In-Browser IDE)
     • Domain:      In-Browser Code Playground with Live Preview & Syntax Highlighting
     • Stack:       TypeScript, Monaco / CodeMirror, CSS3, DOM API
     • Metrics:     HTML/CSS/JS Support | Split-Pane Live View | LocalStorage Drafts
     • Details:     Browser-based code editing playground allowing developers to prototype HTML, CSS, and JavaScript snippets with instant live preview and syntax highlighting.
     • GitHub Repo: https://github.com/suhail3116/Editors-Repo
     • Live Demo:   https://github.com/suhail3116/Editors-Repo

[14] HAWKINS SITE (Creative Frontend Experience)
     • Domain:      Retro Synthwave & Stranger Things Inspired Web Showcase
     • Stack:       JavaScript, HTML5, CSS3 Keyframe Animations
     • Metrics:     Retro Synthwave Theme | CRT Scanlines & Glow | Atmospheric Audio
     • Details:     Retro-themed web application showcasing custom CRT screen animations, glowing neon typography, scanline overlay effects, and interactive easter eggs.
     • GitHub Repo: https://github.com/suhail3116/hawkins-site
     • Live Demo:   https://github.com/suhail3116/hawkins-site

[15] S-VOTING (Student & Campus Governance Portal)
     • Domain:      Organization & Student Council E-Voting System
     • Stack:       JavaScript, HTML5, CSS3, Authentication Handlers
     • Metrics:     Student ID Auth | Transparent Audit Logs | Mobile-First UI
     • Details:     Campus election portal designed to streamline student council voting with secure voter credential verification and departmental position summaries.
     • GitHub Repo: https://github.com/suhail3116/s-voting
     • Live Demo:   https://github.com/suhail3116/s-voting

[16] BIZCONNECT / BISCOM (Corporate AI Networking Portal)
     • Domain:      AI Co-Founder Matchmaker & Corporate Services Portal
     • Stack:       JavaScript, Node.js, Express, Claude API
     • Metrics:     Claude Profile Matching | Vector Similarity | Personalized Icebreakers
     • Details:     Intelligent professional networking web application that matches founders with investors, draft personalized warm outreach letters, and showcases product catalogs.
     • GitHub Repo: https://github.com/suhail3116/biscom
     • Live Demo:   https://github.com/suhail3116/biscom

[17] CRASHER (Web Game & Canvas Benchmark)
     • Domain:      Arcade Web Game & Browser Canvas 2D Benchmark
     • Stack:       JavaScript, HTML5 Canvas 2D, Game Loop
     • Metrics:     60 FPS Canvas Game Loop | Collision Engine | Score Multiplier
     • Details:     Arcade-style browser web game utilizing Canvas 2D frame rendering, collision detection algorithms, score multipliers, and keyboard/touch controls.
     • GitHub Repo: https://github.com/suhail3116/crasher
     • Live Demo:   https://github.com/suhail3116/crasher`,
    edu: "EDUCATION:\n  • B.E. Computer Science Engineering @ Dhaanish Ahmed Institute of Tech, Coimbatore (Pursuing)\n  • Diploma in Computer Science Engineering (Completed)",
    certs: `=== M MUHAMMED SUHAIL // VERIFIED INDUSTRY CERTIFICATIONS & LICENSES ===

[01] 6-MONTH MERN STACK DEVELOPMENT INTERNSHIP
     • Issuer:        Vaizai Solutions (Mentor: Vijay S)
     • Status:        Verified 6-Month Completion Credential
     • Credential ID: VAIZAI-MERN-6M
     • Core Skills:   MongoDB, Express.js, React.js, Node.js, Full-Stack Web Dev
     • Verification:  https://www.linkedin.com/in/muhammed-suhail-4a0a9936b/

[02] CLAUDE AI & MULTIMODAL PROMPT ENGINEERING
     • Issuer:        Anthropic / CodePath Fellowship Track
     • Status:        Verified Credential
     • Credential ID: MS-AI-88392
     • Core Skills:   Claude API, Multimodal Vision, System Guardrails, Prompt Design
     • Verification:  https://www.linkedin.com/in/muhammed-suhail-4a0a9936b/recent-activity/all/

[03] FULL-STACK WEB DEVELOPMENT & MODERN REACT
     • Issuer:        Professional Web Engineering Certification
     • Status:        Verified Credential
     • Credential ID: MS-FS-94021
     • Core Skills:   React.js, TypeScript, Node.js, REST APIs, Tailwind CSS
     • Verification:  https://www.linkedin.com/in/muhammed-suhail-4a0a9936b/recent-activity/all/

[04] AGILE PROJECT LEADERSHIP & SOFTWARE DELIVERY
     • Issuer:        Agna Private Limited — Internship Certification
     • Status:        Verified Credential
     • Credential ID: AGNA-LEAD-2024
     • Core Skills:   Agile Sprint Leadership, Task Breakdown, Code Reviews, Cross-Functional Management
     • Verification:  https://www.linkedin.com/in/muhammed-suhail-4a0a9936b/recent-activity/all/

[05] PYTHON DATA SCIENCE & NLP AUTOMATION
     • Issuer:        Advanced Technical Competency
     • Status:        Verified Credential
     • Credential ID: MS-PY-73019
     • Core Skills:   Python, FastAPI, NLP Tokenization, Data Analytics
     • Verification:  https://www.linkedin.com/in/muhammed-suhail-4a0a9936b/recent-activity/all/

[06] SMART INDIA HACKATHON (SIH) NATIONAL FINALIST
     • Issuer:        Government of India / SIH Committee
     • Status:        National Finalist Distinction
     • Credential ID: SIH-NAT-FINALIST
     • Core Skills:   Rapid 36-Hour Sprint, Civic Problem Solving, System Architecture
     • Verification:  https://www.linkedin.com/in/muhammed-suhail-4a0a9936b/recent-activity/all/

Note: Type "cert <#|name>" (e.g. "cert 1", "cert vaizai", "cert claude") to view individual certification breakdown.`,
    certifications: `=== M MUHAMMED SUHAIL // VERIFIED INDUSTRY CERTIFICATIONS & LICENSES ===

[01] 6-MONTH MERN STACK DEVELOPMENT INTERNSHIP
     • Issuer:        Vaizai Solutions (Mentor: Vijay S)
     • Status:        Verified 6-Month Completion Credential
     • Credential ID: VAIZAI-MERN-6M
     • Core Skills:   MongoDB, Express.js, React.js, Node.js, Full-Stack Web Dev
     • Verification:  https://www.linkedin.com/in/muhammed-suhail-4a0a9936b/

[02] CLAUDE AI & MULTIMODAL PROMPT ENGINEERING
     • Issuer:        Anthropic / CodePath Fellowship Track
     • Status:        Verified Credential
     • Credential ID: MS-AI-88392
     • Core Skills:   Claude API, Multimodal Vision, System Guardrails, Prompt Design
     • Verification:  https://www.linkedin.com/in/muhammed-suhail-4a0a9936b/recent-activity/all/

[03] FULL-STACK WEB DEVELOPMENT & MODERN REACT
     • Issuer:        Professional Web Engineering Certification
     • Status:        Verified Credential
     • Credential ID: MS-FS-94021
     • Core Skills:   React.js, TypeScript, Node.js, REST APIs, Tailwind CSS
     • Verification:  https://www.linkedin.com/in/muhammed-suhail-4a0a9936b/recent-activity/all/

[04] AGILE PROJECT LEADERSHIP & SOFTWARE DELIVERY
     • Issuer:        Agna Private Limited — Internship Certification
     • Status:        Verified Credential
     • Credential ID: AGNA-LEAD-2024
     • Core Skills:   Agile Sprint Leadership, Task Breakdown, Code Reviews, Cross-Functional Management
     • Verification:  https://www.linkedin.com/in/muhammed-suhail-4a0a9936b/recent-activity/all/

[05] PYTHON DATA SCIENCE & NLP AUTOMATION
     • Issuer:        Advanced Technical Competency
     • Status:        Verified Credential
     • Credential ID: MS-PY-73019
     • Core Skills:   Python, FastAPI, NLP Tokenization, Data Analytics
     • Verification:  https://www.linkedin.com/in/muhammed-suhail-4a0a9936b/recent-activity/all/

[06] SMART INDIA HACKATHON (SIH) NATIONAL FINALIST
     • Issuer:        Government of India / SIH Committee
     • Status:        National Finalist Distinction
     • Credential ID: SIH-NAT-FINALIST
     • Core Skills:   Rapid 36-Hour Sprint, Civic Problem Solving, System Architecture
     • Verification:  https://www.linkedin.com/in/muhammed-suhail-4a0a9936b/recent-activity/all/

Note: Type "cert <#|name>" (e.g. "cert 1", "cert vaizai", "cert claude") to view individual certification breakdown.`,
    exp: `=== M MUHAMMED SUHAIL // PROFESSIONAL EXPERIENCE & LEADERSHIP ===

[01] 6-MONTH MERN STACK DEVELOPMENT INTERN (Vaizai Solutions)
     • Duration:    6-Month Internship Program
     • Mentor:      Vijay S
     • Role:        MERN Stack Development Intern
     • Highlights:  Gained hands-on knowledge building full-stack web applications with MongoDB, Express.js, React.js, and Node.js through real-time development activities.

[02] TEAM LEADER ACROSS ALL HACKATHONS (Competitive Tech & Hackathons)
     • Context:     B.E. CSE, Dhaanish Ahmed Institute of Technology
     • Squad:       Ayisha Afreen, Mohammed Basil, Muhammad Farhan, Balakumaran, Anusuya, Arul Devi (College Classmates in B.E. CSE)
     • Role:        Team Captain & Lead Engineer
     • Highlights:  Led 24-36hr sprint architecture at Smart India Hackathon (SIH National Finalist) and Hackathon 360 (24-Hour Hackathon Leader).

[03] TEAM LEADER – INTERNSHIP PROJECT (Agna Private Limited)
     • Location:    Coimbatore, Tamil Nadu
     • Role:        Team Leader
     • Highlights:  Agile sprint workflows, student engineering leadership, production code reviews.`,
    experience: `=== M MUHAMMED SUHAIL // PROFESSIONAL EXPERIENCE & LEADERSHIP ===

[01] 6-MONTH MERN STACK DEVELOPMENT INTERN (Vaizai Solutions)
     • Duration:    6-Month Internship Program
     • Mentor:      Vijay S
     • Role:        MERN Stack Development Intern
     • Highlights:  Gained hands-on knowledge building full-stack web applications with MongoDB, Express.js, React.js, and Node.js through real-time development activities.

[02] TEAM LEADER ACROSS ALL HACKATHONS (Competitive Tech & Hackathons)
     • Context:     B.E. CSE, Dhaanish Ahmed Institute of Technology
     • Squad:       Ayisha Afreen, Mohammed Basil, Muhammad Farhan, Balakumaran, Anusuya, Arul Devi (College Classmates in B.E. CSE)
     • Role:        Team Captain & Lead Engineer
     • Highlights:  Led 24-36hr sprint architecture at Smart India Hackathon (SIH National Finalist) and Hackathon 360 (24-Hour Hackathon Leader).

[03] TEAM LEADER – INTERNSHIP PROJECT (Agna Private Limited)
     • Location:    Coimbatore, Tamil Nadu
     • Role:        Team Leader
     • Highlights:  Agile sprint workflows, student engineering leadership, production code reviews.`,
    honors: "HACKATHONS & AWARDS:\n  🏆 Smart India Hackathon (SIH) - National Finalist\n  🏆 Hackathon 360 (KPR Institute) - 24-Hour Hackathon Leader\n  🏆 Office Task Site Challenge - Rapid Build Winner\n  🏆 Inter-College Code Sprints - Active Competitor",
    contact: "CONTACT INFO:\n  Email:    cse23500492@gmail.com\n  Phone:    +91 9043356776\n  LinkedIn: linkedin.com/in/muhammed-suhail-4a0a9936b/\n  Location: Coimbatore, Tamil Nadu, India\n  GitHub:   github.com/suhail3116",
    "sudo hire": "ACCESS GRANTED: Priority status activated! Feel free to send an inquiry via the Contact form or connect via LinkedIn!"
  }
};
