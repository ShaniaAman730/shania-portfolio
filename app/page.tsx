'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BackgroundPaths } from '@/components/background-paths'
import { ProjectCard } from '@/components/project-card'
import { Button } from '@/components/ui/button'
import { projects } from '@/lib/data/projects'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const featuredProjects = projects.slice(0, 3)

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
      <BackgroundPaths />
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-balance text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              Full-Stack Developer &{' '}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Database Architect
              </span>
            </h1>
            <p className="text-balance text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              I build scalable, database-driven applications with a focus on clean architecture, performance, and user experience. Specializing in real estate, fintech, and e-commerce platforms.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/projects">
              <Button size="lg" className="group">
                View Projects
                <ArrowRight className="ml-2 group-hover:translate-x-1 smooth-transition" size={18} />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Get in Touch
              </Button>
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center gap-4 pt-8"
          >
            <a
              href="#"
              className="p-3 rounded-lg hover:bg-secondary smooth-transition"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="p-3 rounded-lg hover:bg-secondary smooth-transition"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:hello@shania-aman.dev"
              className="p-3 rounded-lg hover:bg-secondary smooth-transition"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4 mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A selection of projects showcasing my expertise in full-stack development and database architecture.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/projects">
              <Button variant="outline" size="lg" className="group">
                View All Projects
                <ArrowRight className="ml-2 group-hover:translate-x-1 smooth-transition" size={18} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4 mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold">Expertise</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Comprehensive skill set across modern web development, from frontend frameworks to advanced database architecture.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                title: 'Frontend',
                skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
              },
              {
                title: 'Backend',
                skills: ['Node.js', 'Express', 'PostgreSQL', 'API Design']
              },
              {
                title: 'Database',
                skills: ['Schema Design', 'Optimization', 'ERD', 'Performance']
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="glass rounded-lg p-6 space-y-4"
              >
                <h3 className="text-xl font-bold">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
