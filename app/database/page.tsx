'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Database, Zap, Shield, TrendingUp } from 'lucide-react'

export default function DatabasePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const databases = [
    {
      name: 'PostgreSQL',
      description: 'Primary relational database for complex business logic, transactions, and data integrity.',
      features: ['ACID Compliance', 'Complex Queries', 'JSON Support', 'Full-text Search']
    },
    {
      name: 'MongoDB',
      description: 'Document database for flexible schemas and rapid iteration on evolving data structures.',
      features: ['Flexible Schema', 'Scalability', 'Aggregation Pipeline', 'Document Storage']
    },
    {
      name: 'Firebase/Supabase',
      description: 'Real-time databases for applications requiring instant data synchronization.',
      features: ['Real-time Updates', 'Authentication', 'Serverless', 'Scalability']
    },
    {
      name: 'Caching Strategies',
      description: 'Redis and in-memory caching for performance optimization and reduced database load.',
      features: ['Performance', 'Session Storage', 'Rate Limiting', 'Cache Invalidation']
    }
  ]

  const designPrinciples = [
    {
      icon: Database,
      title: 'Schema Design',
      description: 'Careful planning of entity relationships, normalization levels, and data constraints to ensure consistency and performance.'
    },
    {
      icon: Zap,
      title: 'Query Optimization',
      description: 'Strategic indexing, query rewriting, and execution plan analysis to minimize response times and resource usage.'
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Implementation of authentication, authorization, encryption, and compliance measures to protect sensitive information.'
    },
    {
      icon: TrendingUp,
      title: 'Scalability',
      description: 'Database architecture that grows with application demands while maintaining performance and reliability.'
    }
  ]

  const erds = [
    {
      project: 'Bahayahay',
      entities: ['Properties', 'Tenants', 'Landlords', 'Verifications', 'Documents', 'Payments'],
      complexity: 'Complex'
    },
    {
      project: 'Rent Tracker',
      entities: ['Properties', 'Tenants', 'Contracts', 'Utilities', 'Payments'],
      complexity: 'Medium'
    },
    {
      project: 'Inventory Tracker',
      entities: ['Products', 'Stock Movements', 'Warehouses', 'Alerts'],
      complexity: 'Medium'
    },
    {
      project: 'HDN Integrated Farm',
      entities: ['Products', 'Experiences', 'Bookings', 'Memberships', 'Payments', 'Inventory'],
      complexity: 'Complex'
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-4">Database Architecture</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Expertise in designing scalable, efficient, and secure database systems that power modern applications.
            </p>
          </motion.div>

          {/* Design Principles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8">Core Principles</h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {designPrinciples.map((principle, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass rounded-lg p-6"
                >
                  <principle.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-lg font-bold mb-2">{principle.title}</h3>
                  <p className="text-sm text-muted-foreground">{principle.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Database Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8">Database Technologies</h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {databases.map((db, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass rounded-lg p-6 space-y-4"
                >
                  <h3 className="text-lg font-bold text-primary">{db.name}</h3>
                  <p className="text-sm text-muted-foreground">{db.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {db.features.map((feature, fIndex) => (
                      <Badge key={fIndex} variant="secondary">{feature}</Badge>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Entity-Relationship Diagrams */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8">Project ERDs</h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {erds.map((erd, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="glass rounded-lg p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold">{erd.project}</h3>
                    <Badge className={erd.complexity === 'Complex' ? 'bg-red-500' : 'bg-yellow-500'}>
                      {erd.complexity}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-primary">Entities</h4>
                    <div className="flex flex-wrap gap-2">
                      {erd.entities.map((entity, eIndex) => (
                        <span
                          key={eIndex}
                          className="px-2 py-1 text-xs rounded bg-primary/10 text-primary"
                        >
                          {entity}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Query Optimization Tips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass rounded-lg p-8"
          >
            <h2 className="text-2xl font-bold mb-6">Optimization Strategies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Indexing',
                  items: ['B-tree indexes', 'Hash indexes', 'Full-text search', 'Composite indexes']
                },
                {
                  title: 'Query Performance',
                  items: ['EXPLAIN ANALYZE', 'Query planning', 'Materialized views', 'Partitioning']
                },
                {
                  title: 'Data Integrity',
                  items: ['Constraints', 'Transactions', 'Foreign keys', 'Triggers']
                },
                {
                  title: 'Scalability',
                  items: ['Replication', 'Sharding', 'Connection pooling', 'Caching layers']
                }
              ].map((strategy, index) => (
                <div key={index}>
                  <h3 className="font-semibold mb-3 text-primary">{strategy.title}</h3>
                  <ul className="space-y-2">
                    {strategy.items.map((item, iIndex) => (
                      <li key={iIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
