import { Project, Skill, ExperienceItem } from './types';

export const DEV_NAME = "Lainer F. Donet";
export const DEV_ROLE = "Desarrollador Front-end Junior";
export const DEV_BIO = "Ingeniero de software especializado en crear experiencias digitales excepcionales. Apasionado por React, la arquitectura escalable y el diseño UI/UX centrado en el usuario.";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "Panel de administración completo con análisis de datos en tiempo real, gestión de inventario y temas personalizables.",
    techStack: ["React", "TypeScript", "Tailwind", "Recharts"],
    imageUrl: "https://picsum.photos/800/600?random=1",
    demoUrl: "#",
    repoUrl: "#"
  },
  {
    id: 2,
    title: "AI Image Generator",
    description: "Aplicación web que utiliza modelos de difusión para generar imágenes artísticas a partir de texto.",
    techStack: ["Next.js", "Gemini API", "Three.js"],
    imageUrl: "https://picsum.photos/800/600?random=2",
    demoUrl: "#",
    repoUrl: "#"
  },
  {
    id: 3,
    title: "Finance Tracker",
    description: "Gestor de finanzas personales con visualización de gastos, presupuestos y sincronización bancaria.",
    techStack: ["Vue.js", "Firebase", "D3.js"],
    imageUrl: "https://picsum.photos/800/600?random=3",
    demoUrl: "#",
    repoUrl: "#"
  },
  {
    id: 4,
    title: "Social Connect",
    description: "Plataforma social para desarrolladores enfocada en la colaboración de código en tiempo real.",
    techStack: ["React", "Socket.io", "Node.js"],
    imageUrl: "https://picsum.photos/800/600?random=4",
    demoUrl: "#",
    repoUrl: "#"
  }
];

export const SKILLS: Skill[] = [
  { name: "React / Next.js", level: 95, category: "frontend" },
  { name: "TypeScript", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 95, category: "frontend" },
  { name: "Node.js", level: 80, category: "backend" },
  { name: "GraphQL", level: 75, category: "backend" },
  { name: "UI/UX Design", level: 85, category: "design" },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "TechFlow Solutions",
    period: "2021 - Presente",
    description: "Liderando la migración de monolitos a micro-frontends. Mentoria de desarrolladores junior y definición de estándares de código."
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Creative Digital Agency",
    period: "2018 - 2021",
    description: "Desarrollo de sitios web premiados para clientes internacionales. Implementación de animaciones complejas y optimización de rendimiento."
  }
];
