export interface TypeWriterProps {
    text: string;
    onComplete: () => void;
    animate?: boolean;
}

export interface SkillsProps {
    category: string;
    items: string[];
}

export interface CertificationProps {
    name: string;
    issuer: string;
    date: string;
    description: string;
}

export interface ProjectsProps {
    name: string;
    description: string;
    tech: string[];
    github: string;
}