export interface Skill {
  name: string;
  level: number; // 0-100
  category: "frontend" | "backend" | "devops" | "tools";
  icon: string;
}

export interface SkillCategory {
  label: string;
  key: "frontend" | "backend" | "devops" | "tools";
  color: string;
  bg: string;
}

export const skillCategories: SkillCategory[] = [
  { label: "Frontend", key: "frontend", color: "text-violet-600", bg: "bg-violet-100" },
  { label: "Backend", key: "backend", color: "text-cyan-600", bg: "bg-cyan-100" },
  { label: "DevOps", key: "devops", color: "text-emerald-600", bg: "bg-emerald-100" },
  { label: "Tools", key: "tools", color: "text-orange-600", bg: "bg-orange-100" },
];

export const skills: Skill[] = [
  // Frontend
  { name: "React", level: 95, category: "frontend", icon: "⚛️" },
  { name: "TypeScript", level: 92, category: "frontend", icon: "🔷" },
  { name: "Next.js", level: 88, category: "frontend", icon: "▲" },
  { name: "Tailwind CSS", level: 97, category: "frontend", icon: "🎨" },
  // { name: "Vue.js", level: 75, category: "frontend", icon: "💚" },
  { name: "Framer Motion", level: 80, category: "frontend", icon: "🎞️" },

  // Backend
  { name: "Node.js", level: 90, category: "backend", icon: "🟢" },
  // { name: "Go", level: 72, category: "backend", icon: "🐹" },
  { name: "MYSQL", level: 85, category: "backend", icon: "🐘" },
  { name: "REST API", level: 82, category: "backend", icon: "🔺" },
  { name: "FLASK", level: 78, category: "backend", icon: "🔴" },
  { name: "Python", level: 70, category: "backend", icon: "🐍" },

  // DevOps
  { name: "Docker", level: 84, category: "devops", icon: "🐳" },
  { name: "AWS", level: 76, category: "devops", icon: "☁️" },
  { name: "CI/CD", level: 80, category: "devops", icon: "🔄" },
  { name: "Kubernetes", level: 65, category: "devops", icon: "⚙️" },

  // Tools
  { name: "Git", level: 96, category: "tools", icon: "🌿" },
  { name: "Figma", level: 82, category: "tools", icon: "✏️" },
  { name: "VS Code", level: 99, category: "tools", icon: "💙" },
  { name: "Postman", level: 90, category: "tools", icon: "📬" },
];
