export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  demoUrl?: string;
  repoUrl?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'tools' | 'design';
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
  isThinking?: boolean;
}
