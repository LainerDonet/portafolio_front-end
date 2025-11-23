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
    role: "Junior Front-end Developer",
    company: "Escuela Britanica de Artes Creativas y Tecnología",
    period: "2025 - Presente",
    description: "Desarrollo de sitios web como parte de la enseñanza de la programación Front-end. Implementación de herremientas de programación Front-end actualizadas."
  },
  {
    id: 2,
    role: "HPC Specialist",
    company: "LUFAC Company",
    period: "2021 - Presente",
    description: "Desarrollo de herramientas de supercomputo para la investigación en física y matemáticas. Administración de clusters de supercomputo de Alto Rendimiento y alta disponibilidad."
  }
];
