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
  title: 'Data Science Student',
  email: 'houcembelkhiria@gmail.com',
  phone: '+216 28 598 448',
  location: 'Tunis, Tunisia',
  status: 'Open for Internship',
  bio: 'Passionate Data Science student with expertise in Machine Learning, Deep Learning, and Python Development. Seeking a 4-6 month final year internship to apply my skills in real-world projects and contribute to innovative data-driven solutions.',
  linkedin: 'https://www.linkedin.com/in/belkhiria-houcem-250a59226/',
  github: 'https://github.com/houcembelkhiria',
  profileImage: '/profile.jpg',
};

export const projects: Project[] = [
  {
    id: '1',
    title: 'Car Inventory Management',
    description: 'Admin interface for registering cars with role-based authentication and CRUD operations. Features include user management, car registration, and comprehensive data management.',
    technologies: ['Java', 'JavaFX', 'JavaScript', 'MySQL'],
    githubUrl: 'https://github.com/houcembelkhiria',
  },
  {
    id: '2',
    title: 'Realtime Chat App',
    description: 'A real-time chat mobile application with instant messaging capabilities. Built with modern mobile development practices and real-time synchronization.',
    technologies: ['Java', 'Android Studio', 'Firebase'],
    githubUrl: 'https://github.com/houcembelkhiria',
  },
  {
    id: '3',
    title: 'Sentiment Analysis System',
    description: 'Advanced NLP model for analyzing sentiment in text data using deep learning techniques. Built with TensorFlow and BERT, achieving 92% accuracy on customer review datasets. Features include real-time analysis, batch processing, and comprehensive visualization of sentiment trends.',
    technologies: ['Python', 'TensorFlow', 'BERT', 'NLP', 'Pandas', 'NumPy'],
    githubUrl: 'https://github.com/houcembelkhiria',
  },
  {
    id: '5',
    title: 'Text Classification & Topic Modeling',
    description: 'ML-powered text classification system using advanced NLP techniques including TF-IDF, Word2Vec, and neural networks. Includes topic modeling with LDA and BERTopic for document clustering and semantic analysis. Processes large-scale text corpora with automated preprocessing pipelines.',
    technologies: ['Python', 'Scikit-learn', 'NLP', 'Transformers', 'NLTK', 'Gensim'],
    githubUrl: 'https://github.com/houcembelkhiria',
  },
  {
    id: '6',
    title: 'Named Entity Recognition (NER) System',
    description: 'Deep learning-based NER system for extracting entities from unstructured text. Uses BiLSTM-CRF architecture and fine-tuned transformer models to identify persons, organizations, locations, and custom entities. Achieves state-of-the-art performance on CoNLL-2003 and custom datasets.',
    technologies: ['Python', 'TensorFlow', 'spaCy', 'NLP', 'PyTorch', 'Transformers'],
    githubUrl: 'https://github.com/houcembelkhiria',
  },
  {
    id: '7',
    title: 'AI-Powered Document Summarization',
    description: 'Automatic text summarization system using extractive and abstractive NLP methods. Implements transformer-based models (T5, BART) for generating concise summaries while preserving key information. Supports multiple languages and document types with customizable summary length.',
    technologies: ['Python', 'Transformers', 'NLP', 'TensorFlow', 'Hugging Face', 'spaCy'],
    githubUrl: 'https://github.com/houcembelkhiria',
  },

];

export const skills: Skill[] = [
  // Programming Languages
  { name: 'Python', category: 'language' },
  { name: 'JavaScript', category: 'language' },
  { name: 'TypeScript', category: 'language' },
  { name: 'Java', category: 'language' },
  { name: 'R', category: 'language' },
  { name: 'SQL', category: 'language' },
  { name: 'PL/SQL', category: 'language' },
  
  // Frameworks & Libraries
  { name: 'React.js', category: 'framework' },
  { name: 'Next.js', category: 'framework' },
  { name: 'Node.js', category: 'framework' },
  { name: 'TensorFlow', category: 'framework' },
  { name: 'Scikit-learn', category: 'framework' },
  { name: 'Pandas', category: 'framework' },
  { name: 'NumPy', category: 'framework' },
  
  // Tools & Platforms
  { name: 'Jupyter', category: 'tool' },
  { name: 'Power BI', category: 'tool' },
  { name: 'Git', category: 'tool' },
  { name: 'Docker', category: 'tool' },
  { name: 'Oracle Apex', category: 'tool' },
  { name: 'Jenkins', category: 'tool' },
  { name: 'Firebase', category: 'tool' },
  { name: 'Android Studio', category: 'tool' },
  
  // Databases
  { name: 'Oracle', category: 'database' },
  { name: 'PostgreSQL', category: 'database' },
  { name: 'MongoDB', category: 'database' },
  { name: 'MySQL', category: 'database' },
  
  // Expertise
  { name: 'Web Development', category: 'expertise' },
  { name: 'Machine Learning', category: 'expertise' },
  { name: 'Deep Learning', category: 'expertise' },
  { name: 'Data Visualization', category: 'expertise' },
  { name: 'Data Cleaning', category: 'expertise' },
  { name: 'Databases', category: 'expertise' },
  { name: 'CRUD Operations', category: 'expertise' },
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
    period: '2023 - 2024',
    position: 'Développeur Oracle Apex',
    company: 'Muris Tunisie',
    location: 'Tunis, Tunisia',
    description: [
      'Developed PL/SQL packages for complex business logic and data processing',
      'Built responsive web applications using Oracle APEX framework',
      'Implemented automated testing and CI/CD pipelines with Jenkins and Selenium',
      'Created comprehensive BI Publisher reports for data visualization and analytics',
      'Collaborated with cross-functional teams to deliver high-quality solutions',
    ],
  },
];

export const typingTexts = [
  'Data Science Student',
  'AI Enthusiast',
  'Python Developer',
  'Machine Learning Engineer',
];

