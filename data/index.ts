export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  name: string;
  category: 'language' | 'framework' | 'tool' | 'database' | 'expertise';
}

export interface Education {
  id: string;
  period: string;
  degree: string;
  institution: string;
  location?: string;
}

export interface Experience {
  id: string;
  period: string;
  position: string;
  company: string;
  location?: string;
  description: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  status: string;
  bio: string;
  linkedin: string;
  github: string;
  profileImage?: string;
}

export const personalInfo: PersonalInfo = {
  name: 'Houcem Belkhiria',
  title: 'Senior Software Engineer | AI & Data Systems',
  email: 'houcembelkhiria@gmail.com',
  phone: '+216 28 598 448',
  location: 'Tunis, Tunisia',
  status: 'Available for Senior Roles',
  bio: 'Senior Software Engineer specializing in AI-powered systems and full-stack development. I architect and deliver production-grade solutions that bridge machine learning with scalable web applications. My expertise spans from designing enterprise data pipelines to building intelligent document processing systems—always with a focus on performance, maintainability, and measurable business impact.',
  linkedin: 'https://www.linkedin.com/in/belkhiria-houcem-250a59226/',
  github: 'https://github.com/houcembelkhiria',
  profileImage: '/profile.jpg',
};

export const projects: Project[] = [
  {
    id: '8',
    title: 'ChatDoc — AI Document Analysis Platform',
    description: 'Architected and built an intelligent document analysis platform leveraging RAG (Retrieval-Augmented Generation) for enterprise knowledge extraction. Designed a full-stack system with semantic search via vector embeddings, multi-format document ingestion (PDF/DOCX/web scraping), and AI-powered chat interfaces. Features include auto-summarization, quiz/flashcard generation, Mermaid diagram creation, and self-hosted LLM integration via Ollama. Led containerization strategy with Docker for seamless deployment.',
    technologies: ['Python', 'FastAPI', 'Next.js', 'TypeScript', 'Supabase', 'Ollama', 'Docker', 'RAG', 'Gemini'],
    githubUrl: 'https://github.com/houcembelkhiria/ChatDoc-Backend',
  },
  {
    id: '9',
    title: 'DeepFake Detection System',
    description: 'Engineered an AI-powered image authenticity analyzer using Error Level Analysis (ELA) and custom CNN architectures. Built a production-ready system with a React-based interface for drag-and-drop upload, real-time model inference, and confidence scoring. Designed the full deployment pipeline with Docker Compose and Nginx reverse proxy. System detects both manipulated images and AI-generated content with high accuracy.',
    technologies: ['Python', 'FastAPI', 'TensorFlow', 'React', 'Vite', 'Docker', 'Nginx', 'Deep Learning'],
    githubUrl: 'https://github.com/houcembelkhiria/DeepFake-Backend',
  },
  {
    id: '7',
    title: 'AI-Powered Document Summarization',
    description: 'Developed an automatic text summarization system implementing both extractive and abstractive NLP methods. Architected transformer-based pipelines using T5 and BART for generating concise, coherent summaries while preserving critical information. System supports multiple languages and document types with configurable summary lengths. Built for scalability with batch processing capabilities.',
    technologies: ['Python', 'Transformers', 'NLP', 'TensorFlow', 'Hugging Face', 'spaCy'],
    githubUrl: 'https://github.com/houcembelkhiria',
  },
  {
    id: '6',
    title: 'Named Entity Recognition (NER) System',
    description: 'Built a deep learning-based NER system for extracting structured entities from unstructured text. Designed and implemented BiLSTM-CRF architecture alongside fine-tuned transformer models to identify persons, organizations, locations, and custom entities. Achieved state-of-the-art performance on CoNLL-2003 and custom domain datasets.',
    technologies: ['Python', 'TensorFlow', 'spaCy', 'NLP', 'PyTorch', 'Transformers'],
    githubUrl: 'https://github.com/houcembelkhiria',
  },
  {
    id: '5',
    title: 'Text Classification & Topic Modeling',
    description: 'Architected an ML-powered text classification system using advanced NLP techniques including TF-IDF, Word2Vec, and neural network architectures. Implemented topic modeling pipelines with LDA and BERTopic for document clustering and semantic analysis. Built automated preprocessing workflows for processing large-scale text corpora.',
    technologies: ['Python', 'Scikit-learn', 'NLP', 'Transformers', 'NLTK', 'Gensim'],
    githubUrl: 'https://github.com/houcembelkhiria',
  },
  {
    id: '3',
    title: 'Sentiment Analysis System',
    description: 'Designed and implemented an advanced NLP model for sentiment analysis using deep learning techniques. Built with TensorFlow and BERT, achieving 92% accuracy on customer review datasets. System features real-time analysis API, batch processing pipelines, and comprehensive visualization dashboards for sentiment trend tracking.',
    technologies: ['Python', 'TensorFlow', 'BERT', 'NLP', 'Pandas', 'NumPy'],
    githubUrl: 'https://github.com/houcembelkhiria',
  },
  {
    id: '1',
    title: 'Car Inventory Management System',
    description: 'Led development of an enterprise inventory management system with role-based access control and full CRUD operations. Designed the database schema, implemented business logic layer, and built a responsive admin interface. System handles user management, car registration, and comprehensive data reporting.',
    technologies: ['Java', 'JavaFX', 'JavaScript', 'MySQL'],
    githubUrl: 'https://github.com/houcembelkhiria',
  },
  {
    id: '2',
    title: 'Realtime Chat Application',
    description: 'Built a real-time mobile chat application with instant messaging capabilities and Firebase-backed synchronization. Designed the app architecture for scalability and offline-first functionality. Implemented end-to-end message delivery with push notifications.',
    technologies: ['Java', 'Android Studio', 'Firebase'],
    githubUrl: 'https://github.com/houcembelkhiria',
  },
];

export const skills: Skill[] = [
  // Programming Languages
  { name: 'Python', category: 'language' },
  { name: 'TypeScript', category: 'language' },
  { name: 'JavaScript', category: 'language' },
  { name: 'Java', category: 'language' },
  { name: 'SQL', category: 'language' },
  { name: 'R', category: 'language' },
  { name: 'PL/SQL', category: 'language' },

  // Frameworks & Libraries
  { name: 'React.js', category: 'framework' },
  { name: 'Next.js', category: 'framework' },
  { name: 'Node.js', category: 'framework' },
  { name: 'FastAPI', category: 'framework' },
  { name: 'TensorFlow', category: 'framework' },
  { name: 'PyTorch', category: 'framework' },
  { name: 'Scikit-learn', category: 'framework' },
  { name: 'Transformers', category: 'framework' },
  { name: 'Pandas', category: 'framework' },
  { name: 'NumPy', category: 'framework' },

  // Tools & Platforms
  { name: 'Docker', category: 'tool' },
  { name: 'Git', category: 'tool' },
  { name: 'Jenkins', category: 'tool' },
  { name: 'Firebase', category: 'tool' },
  { name: 'Supabase', category: 'tool' },
  { name: 'Ollama', category: 'tool' },
  { name: 'Jupyter', category: 'tool' },
  { name: 'Power BI', category: 'tool' },
  { name: 'Oracle Apex', category: 'tool' },
  { name: 'Android Studio', category: 'tool' },

  // Databases
  { name: 'PostgreSQL', category: 'database' },
  { name: 'MongoDB', category: 'database' },
  { name: 'MySQL', category: 'database' },
  { name: 'Oracle', category: 'database' },

  // Expertise
  { name: 'System Architecture', category: 'expertise' },
  { name: 'Full-Stack Development', category: 'expertise' },
  { name: 'Machine Learning', category: 'expertise' },
  { name: 'Deep Learning', category: 'expertise' },
  { name: 'NLP & LLMs', category: 'expertise' },
  { name: 'RAG Systems', category: 'expertise' },
  { name: 'API Design', category: 'expertise' },
  { name: 'Data Engineering', category: 'expertise' },
  { name: 'CI/CD & DevOps', category: 'expertise' },
];

export const education: Education[] = [
  {
    id: '1',
    period: '2023 - Present',
    degree: "Cycle d'ingénieur en Data Science",
    institution: 'Tek-Up University',
    location: 'Tunis, Tunisia',
  },
  {
    id: '2',
    period: '2020 - 2023',
    degree: 'Licence en Informatique',
    institution: 'Faculté des sciences Tunis El Manar',
    location: 'Tunis, Tunisia',
  },
];

export const experience: Experience[] = [
  {
    id: '1',
    period: '2023 — 2024',
    position: 'Oracle Apex Developer — Full-Stack Engineer',
    company: 'Muris Tunisie',
    location: 'Tunis, Tunisia',
    description: [
      'Architected and developed enterprise-grade PL/SQL packages for complex business logic and large-scale data processing',
      'Designed and deployed responsive web applications using Oracle APEX, serving internal business operations',
      'Implemented automated testing frameworks and CI/CD pipelines using Jenkins and Selenium, reducing deployment time by 40%',
      'Built comprehensive BI Publisher reports and dashboards for executive-level data visualization and analytics',
      'Led technical collaboration with cross-functional teams to deliver mission-critical solutions on schedule',
    ],
  },
];

export const typingTexts = [
  'Senior Software Engineer',
  'AI Systems Architect',
  'Full-Stack Developer',
  'Machine Learning Engineer',
];

