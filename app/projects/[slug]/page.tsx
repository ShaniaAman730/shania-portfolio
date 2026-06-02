'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { projects } from '@/lib/data/projects'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link href="/projects">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2" size={18} />
              Back to Projects
            </Button>
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <Badge className="mb-4">{project.category}</Badge>
            <h1 className="text-5xl sm:text-6xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-muted-foreground">{project.description}</p>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-12"
          >
            {/* Problem & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4">Problem</h2>
                <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
              </div>
              <div className="glass rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-4">Solution</h2>
                <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.keyFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3 glass rounded-lg p-4"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Contributions */}
            <div>
              <h2 className="text-2xl font-bold mb-6">My Contributions</h2>
              <ul className="space-y-3">
                {project.contributions.map((contribution, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3 glass rounded-lg p-4"
                  >
                    <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                    <span className="text-foreground">{contribution}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Challenges & Learnings */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Challenges</h2>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-6">Key Learnings</h2>
                <ul className="space-y-3">
                  {project.lessonsLearned.map((lesson, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                      <span>{lesson}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Database Focus */}
            {project.databaseFocus && (
              <div className="glass rounded-lg p-8">
                <h2 className="text-2xl font-bold mb-6">Database Architecture</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold text-lg mb-4 text-primary">Entities</h3>
                    <div className="space-y-2">
                      {project.databaseFocus.entities.map((entity, index) => (
                        <div
                          key={index}
                          className="px-3 py-2 rounded bg-primary/5 text-foreground text-sm"
                        >
                          {entity}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-4 text-cyan-400">Relationships</h3>
                    <div className="space-y-2">
                      {project.databaseFocus.relationships.map((relationship, index) => (
                        <div
                          key={index}
                          className="px-3 py-2 rounded bg-cyan-400/10 text-foreground text-sm"
                        >
                          {relationship}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-16 text-center glass rounded-lg p-8"
          >
            <h2 className="text-2xl font-bold mb-4">Interested in Learning More?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Feel free to reach out if you&apos;d like to discuss this project in more detail or explore potential collaboration opportunities.
            </p>
            <Link href="/contact">
              <Button size="lg">Get in Touch</Button>
            </Link>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
