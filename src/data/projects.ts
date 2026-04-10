export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  category: "frontend" | "fullstack" | "backend" | "mobile";
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
  gradient: string;
  icon: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "NexaCommerce",
    description:
      "A lightning-fast e-commerce platform built with Next.js and Stripe, featuring real-time inventory, AI-powered recommendations, and a seamless checkout experience.",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    category: "fullstack",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
    featured: true,
    gradient: "from-violet-500 to-indigo-600",
    icon: "🛒",
  },
  // {
  //   id: 2,
  //   title: "PulseAnalytics",
  //   description:
  //     "Real-time analytics dashboard with WebSocket data streams, interactive D3.js charts, and customizable widget layouts for enterprise-grade monitoring.",
  //   tags: ["React", "D3.js", "WebSockets", "Node.js", "Redis"],
  //   category: "fullstack",
  //   liveUrl: "https://example.com",
  //   repoUrl: "https://github.com",
  //   featured: true,
  //   gradient: "from-cyan-500 to-blue-600",
  //   icon: "📊",
  // },
  {
    id: 3,
    title: "Flowboard",
    description:
      "A Kanban-style project management tool with drag-and-drop boards, real-time collaboration, and AI-generated task summaries.",
    tags: ["React", "DnD Kit", "Supabase", "OpenAI", "Tailwind CSS"],
    category: "frontend",
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
    featured: true,
    gradient: "from-emerald-500 to-teal-600",
    icon: "🗂️",
  },
  {
    id: 4,
    title: "SwiftAPI",
    description:
      "A high-performance REST & GraphQL API gateway with rate limiting, JWT auth, automatic OpenAPI docs, and a built-in request playground.",
    tags: ["Node.js", "GraphQL", "JWT", "Docker", "PostgreSQL"],
    category: "backend",
    repoUrl: "https://github.com",
    featured: false,
    gradient: "from-orange-500 to-red-600",
    icon: "⚡",
  },
  // {
  //   id: 5,
  //   title: "LunaApp",
  //   description:
  //     "A cross-platform mobile app for habit tracking with streak gamification, push notifications, and cloud sync across devices.",
  //   tags: ["React Native", "Expo", "Firebase", "Reanimated"],
  //   category: "mobile",
  //   liveUrl: "https://example.com",
  //   repoUrl: "https://github.com",
  //   featured: false,
  //   gradient: "from-pink-500 to-rose-600",
  //   icon: "🌙",
  // },
  // {
  //   id: 6,
  //   title: "CodeArena",
  //   description:
  //     "An interactive coding challenge platform with a Monaco-based editor, real-time test execution, leaderboards, and community-submitted problems.",
  //   tags: ["React", "Monaco Editor", "Go", "WebAssembly", "Redis"],
  //   category: "fullstack",
  //   liveUrl: "https://example.com",
  //   repoUrl: "https://github.com",
  //   featured: false,
  //   gradient: "from-yellow-500 to-amber-600",
  //   icon: "🏆",
  // },
];
