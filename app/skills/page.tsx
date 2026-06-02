'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { skillsData } from '@/lib/data/skills'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

export default function SkillsPage() {
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
            <h1 className="text-5xl sm:text-6xl font-bold mb-4">Skills & Expertise</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A comprehensive overview of my technical skills, tools, and specializations across full-stack development and database architecture.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {skillsData.map((category, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="glass h-full p-8 space-y-6 hover:border-primary/50 smooth-transition group">
                  <div>
                    <h2 className="text-2xl font-bold mb-2 group-hover:text-primary smooth-transition">
                      {category.category}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: skillIndex * 0.05 }}
                        className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary hover:bg-primary/20 smooth-transition"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                title: 'Experience Level',
                description: 'B.S. in Information Technology with hands-on experience in building production applications.',
                color: 'from-blue-500 to-cyan-500'
              },
              {
                title: 'Specialization',
                description: 'Database architecture, full-stack development, and business system design.',
                color: 'from-cyan-500 to-blue-500'
              },
              {
                title: 'Approach',
                description: 'Clean code, scalability, performance optimization, and user-centric design.',
                color: 'from-purple-500 to-pink-500'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-lg p-6"
              >
                <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${item.color} mb-4`} />
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
