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
    summary: string
    image?: string
    alt?: string
    entities?: string[]
    relationships?: string[]
  }
  media?: Array<{
    slot:
      | 'afterTitle'
      | 'afterProblem'
      | 'afterSolution'
      | 'afterKeyFeatures'
      | 'afterTechnologies'
      | 'afterContributions'
      | 'afterChallenges'
    kind: 'image' | 'gif' | 'video'
    src?: string
    alt: string
    caption?: string
  }>
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
    summary: 'Comprehensive real estate listing platform to combat illegal real estate practitioners or "colorums".',
    description: 'A real estate listing management platform developed as a Capstone Project in partnership with REBAP Naga City Chapter that helps combat illegal real estate practices through admin and system verification workflows.',
    problem: 'Illegal real estate practitioners were exploiting the lack of verifications in listing platforms, leading to fraudulent activities and difficulties for homebuyers.',
    solution: 'Developed a comprehensive web application with role-based access control, admin verification workflows, property listing management, review and messaging features.',
    keyFeatures: [
      'Property listing',
      'Map-based property search',
      'Admin verification workflows',
      'Messaging system for communication between realtors and clients',
      'Review and rating system for realtors',
      'Guides and resources for homebuyers',
    ],
    technologies: ['Ruby on Rails', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Render', 'Github'],
    contributions: [
      'Built the entire web application independently',
      'Conducted a literature and market review to identify key features and workflows for the platform',
      'Tested the application with real users and iterated based on feedback to improve usability and functionality',
      'Created user manuals for each user type to guide them through the platform\'s features and workflows',
    ],
    challenges: [
      'Designing and implementing complex workflows for multiple user roles',
      'Ensuring data integrity and security in a platform that handles sensitive information',
      'Developing a large application independently while managing time and resources effectively'
    ],
    lessonsLearned: [
      'Thorough planning and design are crucial for complex applications with multiple user roles and workflows',
      'User testing and feedback are essential for improving usability and functionality',
      'Entity Relationship Diagrams (ERDs) are valuable tools for designing and understanding database structures, especially in applications with complex data relationships'
    ],
    databaseFocus: {
      summary: 'Centralized property, tenant, and verification data to support a controlled listing workflow.',
      image: '/images/Bahayahay_ERD.png',
      alt: 'Bahayahay ERD placeholder',
      entities: ['Properties', 'Tenants', 'Landlords', 'Verifications', 'Documents', 'Payments'],
      relationships: ['One-to-Many', 'Many-to-Many', 'Hierarchical']
    },
    media: [
      {
        slot: 'afterTitle',
        kind: 'video',
        alt: 'Bahayahay project video',
        src: 'https://youtu.be/N5oOilWn87s',
      }
    ],
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
    summary: 'Company real estate platform with property database, admin dashboard, and loan calculator.',
    description: 'A real estate sales platform developed for Enjoy Realty & Development Corporation and Aman Engineering. The system showcases model houses and lot-only properties while providing clients with an integrated loan calculator.',
    problem: 'Real estate professionals needed a modern platform with integrated database connectivity, content management, and loan calculation capabilities.',
    solution: 'Built a platform with a property database, admin dashboard, and loan calculator.',
    keyFeatures: [
      'Database-driven property listings',
      'Admin content management system',
      'Loan calculator with multiple options',
      'Property search with advanced filters',
    ],
    technologies: ['Next.js', 'PostgreSQL', 'Supabase (PostgreSQL)', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel', 'Github'],
    contributions: [
      'Designed database schema and connection',
      'Built admin dashboardfor property management',
      'Implemented loan calculator with complex formulas',
      'Optimized search and filtering performance'
    ],
    challenges: [
      'Maintaining database connection reliability',
      'Implementing complex financial calculations accurately',
      'Handling large property inventories'
    ],
    lessonsLearned: [
      'Importance of doing an inventory for existing development projects',
      'Value of comprehensive loan calculation',
      'Need for caching strategies in servicing real estate brokers and salespersons'
    ],
    databaseFocus: {
      summary: 'Supports content, lead, and property data with a lightweight structure for CMS-driven updates.',
      image: '/images/Aman_Webapp_New_Database.png',
      alt: 'Real Estate Web App ERD placeholder',
      entities: ['Properties', 'Users', 'Leads', 'Transactions', 'Content'],
      relationships: ['One-to-Many', 'Many-to-Many']
    },
    media: [
      {
        slot: 'afterContributions',
        kind: 'video',
        alt: 'Real Estate Web App Portfolio Video',
        src: 'https://youtu.be/aEnuxzQtGyU',
      },
      {
        slot: 'afterTitle',
        kind: 'video',
        alt: 'Real Estate Web App Tutorial Video',
        src: 'https://youtu.be/9CxS9rqO3jo',
      }
    ],
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
    description: 'A rental management application designed to track multiple properties, tenants, utilities, and payments.',
    problem: 'A property manager struggled to track multiple rental properties, utilities, contracts, and payments in a unified system.',
    solution: 'Developed a comprehensive tracking system with multi-user support, utility management, contract generation, and payment tracking.',
    keyFeatures: [
      'Multi-property management',
      'Rent tracking and history',
      'Utility bill management and tracking',
      'Contract management and tracking',
    ],
    technologies: ['Next.js', 'Supabase (PostgreSQL)', 'React', 'Node.js', 'TypeScript', 'Vercel', 'Tailwind CSS', 'Github'],
    contributions: [
      'Architected database schema for multi-tenant properties',
      'Developed the web application independently',
      'Implemented utility tracking and calculation system',
      'Built contract management and generation (to PDF/Word)',
    ],
    challenges: [
      'Managing complex functionalities across multiple properties and tenants',
      'Accurate utility calculation',
      'Making each contract customizable to varying properties while retaining common elements'
    ],
    lessonsLearned: [
      'Designing for multi-tenancy requires careful data modeling and access control',
      'Utility tracking can be complex and may require iterative refinement based on real-world usage',
      'Balancing customization and standardization in contract generation is key for usability'
    ],
    databaseFocus: {
      summary: 'Tracks rentals, utilities, and payment history across tenants and properties in one place while also managing contracts and their relationships to properties and tenants.',
      image: '/images/RentTracker_ERD.png',
      alt: 'Rent Tracker ERD placeholder',
      entities: ['Properties', 'Tenants', 'Contracts', 'Utilities', 'Payments', 'Expenses'],
      relationships: ['One-to-Many', 'Many-to-Many', 'Temporal Data']
    },
    media: [
      {
        slot: 'afterProblem',
        kind: 'gif',
        src: '/images/RT_Utility.gif',
        alt: 'Rent Tracker GIF'
      },
      {
        slot: 'afterKeyFeatures',
        kind: 'gif',
        src: '/images/RT_Contract.gif',
        alt: 'Rent Tracker GIF 2'
      },
      {
        slot: 'afterContributions',
        kind: 'gif',
        src: '/images/RT_Rent_Tracking.gif',
        alt: 'Rent Tracker GIF3' 
      }
    ],
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
    summary: 'Comprehensive inventory management system that tracks inventory stocks, expiry dates, and generates reports.',
    description: 'Enterprise inventory management solution for tracking assets, stock levels, product expiry, and generating reports.',
    problem: 'Businesses needed a centralized inventory system with accurate stock and expiry date tracking.',
    solution: 'Built an inventory system with stock and expiry date tracking, and report generation.',
    keyFeatures: [
      'Stock tracking',
      'Expiry date tracking',
      'Inventory report generation (Excel file)',
    ],
    technologies: ['Python', 'Tkinter', 'PostrgreSQL', 'Github'],
    contributions: [
      'Developed the entire application independently',
      'Tested the application with real inventory data and iterated based on quality of output',
    ],
    challenges: [
      'Making data entries easier for 200+ inventory items',
      'Identifying reports that need to be separated into multiple reports for better readability'
    ],
    lessonsLearned: [
      'Iterating based on the quality of the output file is crucial for improving usability',
      'Generating reports in multiple formats can improve readability and user experience'
    ],
    databaseFocus: {
      summary: 'Tracking stocks and inventory levels. Separating acquisitions and statuses reporting for a more readable and comprehensive database structure.',
      image: '/images/IM_ERD.png',
      alt: 'Inventory Tracker ERD',
      entities: ['Users', 'Products', 'Assets'],
      relationships: ['One-to-Many', 'Complex Queries']
    },
    media: [
      {
        slot: 'afterProblem',
        kind: 'gif',
        src: '/images/IM_Overview.gif',
        alt: 'Inventory Tracker GIF'
      },
      {
        slot: 'afterKeyFeatures',
        kind: 'gif',
        src: '/images/IM_Exporting.gif',
        alt: 'Inventory Tracker GIF 2'
      },
      {
        slot: 'afterContributions',
        kind: 'gif',
        src: '/images/IM_Expiry.gif',
        alt: 'Inventory Tracker GIF3' 
      }
    ],
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
    title: 'Enjoy Realty Development and Corporation',
    category: 'Web Design',
    summary: 'Corporate website redesign for real estate development company with SEO.',
    description: 'Complete website redesign and modernization for a real estate development company, Enjoy Realty Development and Corporation, and incorporating SEO practices.',
    problem: 'Enjoy Realty needed a modern web presence with improved search engine visibility.',
    solution: 'Redesigned corporate website with modern aesthetics and implemented Search Engine Optimization (SEO) strategies.',
    keyFeatures: [
      'Modern responsive design', 
      'Contact and inquiry forms',
      'Search engine optimization',
    ],
    technologies: ['Wordpress', 'Local', 'Yoast SEO', 'WPForms'],
    contributions: [
      'Managed full website redesign independently',
      'Implemented Search Engine Optimization (SEO) strategies',
    ],
    challenges: [
      'Adapting to Wordpress and Local\'s development environments',
      'Optimizing for search engine visibility',
      'Recovering from a website breach and restoring functionality'
    ],
    lessonsLearned: [
      'SEO requires ongoing attention and optimization',
      'Double check widget and plugin security settings to prevent breaches',
      'Regular backups are essential for recovery from security incidents'
    ],
    media: [
      {
        slot: 'afterProblem',
        kind: 'gif',
        src: '/images/ER_home_page.gif',
        alt: 'Enjoy Realty home page GIF',
        caption: 'Home page before and after'
      },
      {
        slot: 'afterKeyFeatures',
        kind: 'gif',
        src: '/images/ER_about_page.gif',
        alt: 'Enjoy Realty about page GIF'
      }
    ],
    images: {
      hero: '/images/ER_home_page.gif',
      dashboard: '/images/enjoy-realty-dashboard.png',
      feature: '/images/enjoy-realty-feature.png',
      mobile: '/images/enjoy-realty-mobile.png'
    }
  },
  {
    id: '6',
    slug: 'hdn-integrated-farm',
    title: 'HDN Integrated Farm',
    category: 'Agri-business Platform',
    summary: 'Full-featured platform for agribusiness with product catalog and experience bookings.',
    description: 'Comprehensive agribusiness platform showcasing products, agritourism experiences, and membership programs with integrated content manager and booking forms.',
    problem: 'Agricultural business needed a unified platform to showcase products and offer experiences effectively.',
    solution: 'Developed integrated platform with product catalog and experience booking forms',
    keyFeatures: [
      'Product catalog with content management',
      'Experience booking forms'
    ],
    technologies: ['React', 'Node.js', 'Supabase (PostgreSQL)', 'Tailwind CSS', 'Vercel', 'Github'],
    contributions: [
      'Developed full website independently',
      'Implemented content management and booking forms',
    ],
    challenges: [
      'Conceptualizing products and experiences in the website that do not physically exist yet'
    ],
    lessonsLearned: [
      'Effective communication with stakeholders is crucial when building a platform for a business that is still in development'
    ],
    media: [
      {
        slot: 'afterProblem',
        kind: 'gif',
        src: '/images/HDN_home_page.gif',
        alt: 'HDN Integrated Farm GIF'
      },
      {
        slot: 'afterKeyFeatures',
        kind: 'gif',
        src: '/images/HDN_pick_pay_page.gif',
        alt: 'HDN Integrated Farm GIF 2'
      },
      {
        slot: 'afterContributions',
        kind: 'gif',
        src: '/images/HDN_content_manager_page.gif',
        alt: 'HDN Integrated Farm GIF3' 
      }
    ],
    images: {
      hero: '/images/hdn-farm-hero.png',
      dashboard: '/images/hdn-farm-dashboard.png',
      feature: '/images/hdn-farm-feature.png',
      mobile: '/images/hdn-farm-mobile.png'
    }
  }
]
