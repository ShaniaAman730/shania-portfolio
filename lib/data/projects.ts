export type Project = {
  id: string
  slug: string
  title: string
  category: string
  summary: string
  description: string
  problem: string
  solution: string
  keyFeatures: string[]
  technologies: string[]
  contributions: string[]
  challenges: string[]
  lessonsLearned: string[]
  databaseFocus?: {
    entities: string[]
    relationships: string[]
  }
  images: {
    hero: string
    dashboard: string
    feature: string
    mobile: string
  }
  video?: string
  erds?: string[]
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'bahayahay',
    title: 'Bahayahay',
    category: 'Real Estate Management',
    summary: 'Comprehensive real estate management system with property listings, verification workflows, and tenant management.',
    description: 'A full-featured real estate platform built from the ground up with a focus on robust database design and complex business logic.',
    problem: 'Real estate agencies struggled with managing properties, verification workflows, and tenant information across multiple locations without a centralized system.',
    solution: 'Developed a comprehensive web application with role-based access control, automated verification workflows, and integrated property management.',
    keyFeatures: [
      'Property listing and management',
      'Automated verification workflows',
      'Tenant and landlord management',
      'Document management system',
      'Payment tracking',
      'Multi-language support'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Express.js', 'Tailwind CSS'],
    contributions: [
      'Led database design and schema optimization',
      'Implemented verification workflow system',
      'Built admin dashboard with analytics',
      'Designed authentication and authorization layer'
    ],
    challenges: [
      'Managing complex verification workflows with multiple states',
      'Optimizing database queries for large datasets',
      'Handling real-time document uploads and processing'
    ],
    lessonsLearned: [
      'Importance of thorough data modeling before implementation',
      'Need for comprehensive testing in workflow-heavy systems',
      'Value of user feedback in refining business processes'
    ],
    databaseFocus: {
      entities: ['Properties', 'Tenants', 'Landlords', 'Verifications', 'Documents', 'Payments'],
      relationships: ['One-to-Many', 'Many-to-Many', 'Hierarchical']
    },
    images: {
      hero: '/images/bahayahay-hero.png',
      dashboard: '/images/bahayahay-dashboard.png',
      feature: '/images/bahayahay-feature.png',
      mobile: '/images/bahayahay-mobile.png'
    }
  },
  {
    id: '2',
    slug: 'real-estate-web-app',
    title: 'Real Estate Web App',
    category: 'Enterprise Platform',
    summary: 'Enterprise-grade real estate platform with database connectivity, admin CMS, and financial calculators.',
    description: 'Scalable platform serving real estate professionals with integrated database systems, administrative tools, and specialized calculators for financial planning.',
    problem: 'Real estate professionals needed a modern platform with integrated database connectivity, easy content management, and specialized calculation tools.',
    solution: 'Built an enterprise platform with robust database connections, comprehensive admin CMS, and specialized calculators for loan and property analysis.',
    keyFeatures: [
      'Database-driven property listings',
      'Admin content management system',
      'Loan calculator with multiple options',
      'Property search with advanced filters',
      'Investment analysis tools',
      'Lead management system'
    ],
    technologies: ['Next.js', 'PostgreSQL', 'Supabase', 'React', 'Node.js', 'TypeScript'],
    contributions: [
      'Designed database schema and connection architecture',
      'Built admin CMS for property management',
      'Implemented loan calculator with complex formulas',
      'Optimized search and filtering performance'
    ],
    challenges: [
      'Maintaining database connection reliability',
      'Implementing complex financial calculations accurately',
      'Scaling to handle large property inventories'
    ],
    lessonsLearned: [
      'Importance of connection pooling for database performance',
      'Value of comprehensive financial calculation testing',
      'Need for caching strategies in large-scale applications'
    ],
    databaseFocus: {
      entities: ['Properties', 'Users', 'Leads', 'Transactions', 'Content'],
      relationships: ['One-to-Many', 'Many-to-Many']
    },
    images: {
      hero: '/images/real-estate-app-hero.png',
      dashboard: '/images/real-estate-app-dashboard.png',
      feature: '/images/real-estate-app-feature.png',
      mobile: '/images/real-estate-app-mobile.png'
    }
  },
  {
    id: '3',
    slug: 'rent-tracker',
    title: 'Rent Tracker',
    category: 'Property Management',
    summary: 'Multi-user rental property management system with utilities tracking, contract management, and payment reconciliation.',
    description: 'Sophisticated rental management application designed for landlords and property managers to track multiple properties, tenants, utilities, and payments.',
    problem: 'Property managers struggled to track multiple rental properties, utilities, contracts, and payments in a unified system.',
    solution: 'Developed a comprehensive tracking system with multi-tenant support, utility management, contract versioning, and automated payment tracking.',
    keyFeatures: [
      'Multi-property management',
      'Tenant tracking and history',
      'Utility bill management and tracking',
      'Contract management with versioning',
      'Payment tracking and reminders',
      'Expense reporting'
    ],
    technologies: ['React', 'Firebase', 'Node.js', 'MongoDB', 'Material-UI'],
    contributions: [
      'Architected database schema for multi-tenant properties',
      'Implemented utility tracking and calculation system',
      'Built contract management with version control',
      'Created payment reconciliation system'
    ],
    challenges: [
      'Managing complex multi-tenant relationships',
      'Accurate utility allocation across multiple properties',
      'Handling payment reconciliation with delays'
    ],
    lessonsLearned: [
      'Complex domain logic benefits from thorough documentation',
      'User experience crucial in financial tracking applications',
      'Importance of audit trails in financial systems'
    ],
    databaseFocus: {
      entities: ['Properties', 'Tenants', 'Contracts', 'Utilities', 'Payments', 'Expenses'],
      relationships: ['One-to-Many', 'Many-to-Many', 'Temporal Data']
    },
    images: {
      hero: '/images/rent-tracker-hero.png',
      dashboard: '/images/rent-tracker-dashboard.png',
      feature: '/images/rent-tracker-feature.png',
      mobile: '/images/rent-tracker-mobile.png'
    }
  },
  {
    id: '4',
    slug: 'inventory-tracker',
    title: 'Inventory Tracker',
    category: 'Asset Management',
    summary: 'Comprehensive inventory management system with stock tracking, expiry management, and detailed reporting.',
    description: 'Enterprise inventory management solution for tracking assets, stock levels, product expiry, and generating analytical reports.',
    problem: 'Businesses needed a centralized inventory system with accurate stock tracking, expiry date management, and comprehensive reporting capabilities.',
    solution: 'Built a full-featured inventory system with real-time stock updates, automated expiry alerts, and advanced analytics.',
    keyFeatures: [
      'Real-time stock tracking',
      'Expiry date management and alerts',
      'Inventory reporting and analytics',
      'Barcode scanning integration',
      'Stock level recommendations',
      'Multi-warehouse support'
    ],
    technologies: ['Vue.js', 'Node.js', 'PostgreSQL', 'Express.js', 'Vuetify'],
    contributions: [
      'Designed scalable inventory database schema',
      'Implemented real-time stock management',
      'Built analytics and reporting engine',
      'Created expiry notification system'
    ],
    challenges: [
      'Maintaining real-time accuracy with high transaction volume',
      'Implementing efficient expiry tracking logic',
      'Generating complex analytics reports performantly'
    ],
    lessonsLearned: [
      'Transaction consistency critical in inventory systems',
      'Real-time data synchronization requires careful planning',
      'Performance optimization essential for large datasets'
    ],
    databaseFocus: {
      entities: ['Products', 'Inventory', 'Stock Movements', 'Warehouses', 'Analytics'],
      relationships: ['One-to-Many', 'Complex Queries']
    },
    images: {
      hero: '/images/inventory-tracker-hero.png',
      dashboard: '/images/inventory-tracker-dashboard.png',
      feature: '/images/inventory-tracker-feature.png',
      mobile: '/images/inventory-tracker-mobile.png'
    }
  },
  {
    id: '5',
    slug: 'enjoy-realty-development',
    title: 'Enjoy Realty Development',
    category: 'Web Development',
    summary: 'Corporate website redesign and modernization for real estate development company with focus on SEO.',
    description: 'Complete website redesign and modernization for a real estate development company, incorporating modern design principles and SEO best practices.',
    problem: 'Enjoy Realty needed a modern web presence with improved user experience and search engine visibility.',
    solution: 'Redesigned corporate website with modern aesthetics, optimized navigation, and comprehensive SEO implementation.',
    keyFeatures: [
      'Modern responsive design',
      'Project showcase gallery',
      'Contact and inquiry forms',
      'Blog section for thought leadership',
      'SEO optimization',
      'Performance optimization'
    ],
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Contentful CMS', 'Vercel'],
    contributions: [
      'Led website redesign and modernization',
      'Implemented SEO optimization strategies',
      'Designed responsive layouts for all devices',
      'Integrated CMS for content management'
    ],
    challenges: [
      'Balancing modern design with corporate branding',
      'Optimizing for search engine visibility',
      'Ensuring fast loading times across regions'
    ],
    lessonsLearned: [
      'SEO requires ongoing attention and optimization',
      'Content strategy critical for engagement',
      'Performance directly impacts user experience and rankings'
    ],
    databaseFocus: {
      entities: ['Projects', 'Content', 'Inquiries', 'Analytics'],
      relationships: ['One-to-Many']
    },
    images: {
      hero: '/images/enjoy-realty-hero.png',
      dashboard: '/images/enjoy-realty-dashboard.png',
      feature: '/images/enjoy-realty-feature.png',
      mobile: '/images/enjoy-realty-mobile.png'
    }
  },
  {
    id: '6',
    slug: 'hdn-integrated-farm',
    title: 'HDN Integrated Farm',
    category: 'E-commerce & Services',
    summary: 'Full-featured platform for agribusiness with product catalog, experience booking, and membership management.',
    description: 'Comprehensive agribusiness platform offering product sales, agritourism experiences, and membership programs with integrated inventory and booking systems.',
    problem: 'Agricultural business needed a unified platform to sell products, offer experiences, and manage memberships efficiently.',
    solution: 'Developed integrated platform with product catalog, experience booking system, and membership management with financial tracking.',
    keyFeatures: [
      'Product catalog and e-commerce',
      'Experience booking system',
      'Membership management',
      'Inventory synchronization',
      'Payment processing',
      'Customer analytics'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Mapbox', 'Redux'],
    contributions: [
      'Architected database schema for complex business model',
      'Implemented booking system with availability management',
      'Built membership tier system with benefits',
      'Integrated payment processing'
    ],
    challenges: [
      'Managing inventory across multiple product types',
      'Coordinating complex booking availability',
      'Handling membership benefits and tier management'
    ],
    lessonsLearned: [
      'Complex business models require clear data relationships',
      'Booking systems need robust conflict resolution',
      'Regular database maintenance critical as data grows'
    ],
    databaseFocus: {
      entities: ['Products', 'Experiences', 'Bookings', 'Memberships', 'Payments', 'Inventory'],
      relationships: ['Complex Many-to-Many', 'Temporal Data', 'State Management']
    },
    images: {
      hero: '/images/hdn-farm-hero.png',
      dashboard: '/images/hdn-farm-dashboard.png',
      feature: '/images/hdn-farm-feature.png',
      mobile: '/images/hdn-farm-mobile.png'
    }
  }
]
