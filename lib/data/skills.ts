export type SkillCategory = {
  category: string
  description: string
  skills: string[]
}

export const skillsData: SkillCategory[] = [
  {
    category: 'Frontend Development',
    description: 'Modern web technologies for building responsive, interactive user interfaces',
    skills: [
      'React / React Hooks',
      'Next.js / App Router',
      'TypeScript',
      'Tailwind CSS',
      'Vue.js',
      'Responsive Design',
      'Component Architecture',
      'State Management (Redux, Zustand)',
      'CSS-in-JS (Styled Components)',
      'Performance Optimization'
    ]
  },
  {
    category: 'Backend Development',
    description: 'Server-side development, API design, and business logic implementation',
    skills: [
      'Node.js / Express.js',
      'RESTful API Design',
      'GraphQL',
      'Authentication & Authorization',
      'Server-side Rendering',
      'Microservices Architecture',
      'Error Handling & Logging',
      'Rate Limiting & Caching',
      'WebSockets',
      'API Security Best Practices'
    ]
  },
  {
    category: 'Database Design & Architecture',
    description: 'Expert in relational databases, schema design, and data optimization',
    skills: [
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Database Schema Design',
      'Query Optimization',
      'Indexing Strategies',
      'Normalization & Denormalization',
      'Data Modeling',
      'Complex Joins & Aggregations',
      'Transaction Management',
      'Database Security',
      'Entity-Relationship Diagrams (ERD)'
    ]
  },
  {
    category: 'DevOps & Deployment',
    description: 'Cloud infrastructure, containerization, and deployment automation',
    skills: [
      'Vercel',
      'AWS (EC2, RDS, S3)',
      'Docker',
      'CI/CD Pipelines',
      'Git & GitHub',
      'Environment Management',
      'Monitoring & Alerting',
      'Database Migrations',
      'SSL/TLS Configuration'
    ]
  },
  {
    category: 'Tools & Specializations',
    description: 'Additional tools and specialized knowledge areas',
    skills: [
      'Firebase / Supabase',
      'Stripe (Payments)',
      'CMS Integration (Contentful, Sanity)',
      'SEO Optimization',
      'Web Accessibility (A11y)',
      'Testing (Jest, Vitest, Cypress)',
      'Figma & Design Systems',
      'Project Management',
      'Technical Documentation',
      'Code Review & Best Practices'
    ]
  },
  {
    category: 'Business & Communication',
    description: 'Professional skills for effective collaboration and delivery',
    skills: [
      'Full-Stack Development',
      'Requirements Analysis',
      'Technical Problem Solving',
      'Cross-functional Collaboration',
      'Stakeholder Communication',
      'Documentation',
      'Mentoring & Code Review',
      'Agile/Scrum Methodologies',
      'Performance Analysis',
      'System Design & Architecture'
    ]
  }
]
