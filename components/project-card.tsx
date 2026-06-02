'use client'

import Link from 'next/link'
import { Project } from '@/lib/data/projects'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Card } from '@/components/ui/card'

interface ProjectCardProps {
  project: Project
  index?: number
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link href={`/projects/${project.slug}`}>
        <Card className="group relative h-full glass hover:border-primary/50 smooth-transition cursor-pointer overflow-hidden p-6">
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 smooth-transition" />

          {/* Content */}
          <div className="relative space-y-4">
            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              {project.category}
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary smooth-transition line-clamp-2">
              {project.title}
            </h3>

            {/* Summary */}
            <p className="text-sm text-muted-foreground line-clamp-3">
              {project.summary}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs rounded bg-secondary text-secondary-foreground"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-2 py-1 text-xs rounded bg-secondary text-secondary-foreground">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>

            {/* Arrow */}
            <div className="flex items-center gap-2 pt-4 text-primary opacity-0 group-hover:opacity-100 smooth-transition translate-x-0 group-hover:translate-x-1">
              <span className="text-sm font-semibold">View Project</span>
              <ArrowRight size={16} />
            </div>
          </div>
        </Card>
      </Link>
    </motion.div>
  )
}
