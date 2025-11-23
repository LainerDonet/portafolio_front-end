import { Project, Skill, ExperienceItem } from './types';

export const DEV_NAME = "Lainer F. Donet";
export const DEV_ROLE = "Desarrollador Front-end Junior";
export const DEV_BIO = "Ingeniero de software especializado en crear experiencias digitales excepcionales. Apasionado por React, la arquitectura escalable y el diseño UI/UX centrado en el usuario.";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Breve Curriculum Page",
    description: "mi Currículum Vitae en formato de página web, desarrollado para presentar de manera profesional y visualmente atractiva mi perfil, experiencia, habilidades y proyectos.",
    techStack: ["HTML", "CSS", "JavaScript"],
    imageUrl: "https://picsum.photos/800/600?random=1",
    demoUrl: "https://brevecurriculum.netlify.app",
    repoUrl: "https://github.com/LainerDonet/Curriculum"
  },
  {
    id: 2,
    title: "Landing page Revista CARAS",
    description: "La landing fue optimizada para maximizar su efectividad en términos de SEO, conversión de ventas y velocidad de carga, integrando buenas prácticas de HTML, optimización de recursos y mejora de la experiencia de usuario.",
    techStack: ["TypeScript", "Tailwind", "React"],
    imageUrl: "https://picsum.photos/800/600?random=2",
    demoUrl: "https://proyectocarasmodulo41.netlify.app",
    repoUrl: "https://github.com/LainerDonet/Proyecto-CARAS-M41"
  },
  {
    id: 3,
    title: "El Tiempo de tus Ciudades",
    description: "Aplicación web desarrollada en React que muestra el pronóstico del tiempo de varias ciudades del mundo utilizando la API pública de OpenWeather.",
    techStack: ["React", "TypeScript", "Tailwind", "Recharts"],
    imageUrl: "https://picsum.photos/800/600?random=3",
    demoUrl: "https://lainerdonet.github.io/Modulo34_EBAC_tercera-practica/",
    repoUrl: "https://github.com/LainerDonet/Modulo34_EBAC_tercera-practica"
  },
  {
    id: 4,
    title: "Sitio Web de Noticias Tecnológicas",
    description: "Es un sitio web estático de noticias de tegnología en gerenal y con especial interés en: HPC, Software Libre, Linux y Distribuciones Linux para servidores.",
    techStack: ["HTML", "CSS", "JavaScript", "SCSS"],
    imageUrl: "https://picsum.photos/800/600?random=4",
    demoUrl: "https://lainerdonet.github.io/noticiastec.github.io",
    repoUrl: "https://github.com/LainerDonet/noticiastec.github.io"
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
