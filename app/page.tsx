'use client'

import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { BackgroundPaths } from '@/components/background-paths'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { projects } from '@/lib/data/projects'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  const portfolioProjects = projects
  const [isQpiOpen, setIsQpiOpen] = useState(false)
  const [isFlexOpen, setIsFlexOpen] = useState(false)
  const [isFirstAidOpen, setIsFirstAidOpen] = useState(false)
  const [isDeansListerOpen, setIsDeansListerOpen] = useState(false)
  const [isPresidentsListerOpen, setIsPresidentsListerOpen] = useState(false)

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
      <section className="relative px-4 sm:px-6 lg:px-8 pt-28 pb-16 lg:pt-32 lg:pb-20 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-8 text-left"
            >
              <div className="space-y-5 max-w-3xl">
                <h1 className="text-5xl sm:text-6xl lg:text-8xl leading-none tracking-wide uppercase bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Shania Aman
                </h1>
                <h4 className="text-2xl sm:text-3xl lg:text-4xl leading-tight text-foreground/90 uppercase">
                  Fresh Graduate with Experience in Full-stack Development, Database Design, and Multimedia Production
                </h4>
                <p className="max-w-3xl text-base sm:text-lgss text-muted-foreground leading-relaxed text-pretty">
                  I design and develop database-driven applications that solve real business problems through thoughtful database architecture. My work spans real estate platforms, inventory management system, and other business web applications. I also produce digital media that helps organizations communicate their brand and reach their audience.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="flex flex-col sm:flex-row items-start gap-4"
              >
                <Link href="/projects">
                  <Button size="lg" className="group">
                    View projects
                    <ArrowRight className="ml-2 group-hover:translate-x-1 smooth-transition" size={18} />
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="space-y-6"
              >
                <div className="space-y-3">
                  <h4 className="text-3xl leading-none uppercase">Education</h4>
                  <div className="flex flex-wrap items-center gap-2 text-base sm:text-lg text-muted-foreground">
                    <span>Ateneo de Naga University — Bachelor of Science in Information Technology </span>
                    <button
                      type="button"
                      onClick={() => setIsQpiOpen(true)}
                      className="border-b border-transparent text-muted-foreground smooth-transition hover:border-primary hover:text-primary"
                    >
                      General QPI: 3.30/4.0
                    </button>
                    <span>2025 - 2026, Graduated</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="text-3xl leading-none uppercase">Awards</h4>
                  
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-4"
                      >

                      <ul className="space-y-3">
                        <li className="flex gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                              <span>
                                <button
                                  type="button"
                                  onClick={() => setIsDeansListerOpen(true)}
                                  className="border-b border-transparent text-muted-foreground smooth-transition hover:border-primary hover:text-primary"
                                >
                                  Dean's Lister, First Semester 2018-2019
                                </button>
                              </span>
                        </li>
                        <li className="flex gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                              <span>
                                <button
                                  type="button"
                                  onClick={() => setIsPresidentsListerOpen(true)}
                                  className="border-b border-transparent text-muted-foreground smooth-transition hover:border-primary hover:text-primary"
                                >
                                  President's Lister, Second Semester 2018-2019
                                </button>
                              </span>
                        </li>

                      </ul>
                      </motion.div>

                    {isDeansListerOpen && (
                      <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 py-8 backdrop-blur-sm"
                        onClick={() => setIsDeansListerOpen(false)}
                      >
                        <div
                          role="dialog"
                          aria-modal="true"
                          aria-label="Dean's Lister image"
                          className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-background shadow-2xl"
                          onClick={(event) => event.stopPropagation()}
                        >
                          <button
                            type="button"
                            onClick={() => setIsDeansListerOpen(false)}
                            className="absolute right-4 top-4 z-10 rounded-full bg-black/60 px-3 py-1 text-sm text-white smooth-transition hover:bg-black/80"
                          >
                            Close
                          </button>
                          <div className="relative aspect-[4/3] w-full">
                            <Image
                              src="/images/deans_lister.jpg"
                              alt="Dean's Lister certificate"
                              fill
                              sizes="(max-width: 1024px) 100vw, 1024px"
                              className="object-contain bg-background"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {isPresidentsListerOpen && (
                      <div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 py-8 backdrop-blur-sm"
                        onClick={() => setIsPresidentsListerOpen(false)}
                      >
                        <div
                          role="dialog"
                          aria-modal="true"
                          aria-label="President's Lister image"
                          className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-background shadow-2xl"
                          onClick={(event) => event.stopPropagation()}
                        >
                          <button
                            type="button"
                            onClick={() => setIsPresidentsListerOpen(false)}
                            className="absolute right-4 top-4 z-10 rounded-full bg-black/60 px-3 py-1 text-sm text-white smooth-transition hover:bg-black/80"
                          >
                            Close
                          </button>
                          <div className="relative aspect-[4/3] w-full">
                            <Image
                              src="/images/presidents_lister.jpg"
                              alt="President's Lister certificate"
                              fill
                              sizes="(max-width: 1024px) 100vw, 1024px"
                              className="object-contain bg-background"
                            />
                          </div>
                        </div>
                      </div>
                    )}    
                </div>

                <div className="space-y-3">
                  <h4 className="text-3xl leading-none uppercase">Organizations</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>AdNU Student Supreme Government, Student Congress Representative 2017-2018</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span>AdNU TACTICS, President 2018-2019</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative"
            >
              <div className="inset-0 -z-10 rounded-[2rem] bg-gradient-to-br from-blue-500/20 via-cyan-400/10 to-transparent blur-3xl" />
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-secondary/30 shadow-2xl shadow-black/20">
                <Image
                  src="/images/Shania_Headshot.jpg"
                  alt="Shania Aman headshot"
                  width={900}
                  height={1200}
                  priority
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {isQpiOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 py-8 backdrop-blur-sm"
            onClick={() => setIsQpiOpen(false)}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-label="General QPI image"
              className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-background shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setIsQpiOpen(false)}
                className="absolute right-4 top-4 z-10 rounded-full bg-black/60 px-3 py-1 text-sm text-white smooth-transition hover:bg-black/80"
              >
                Close
              </button>
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/General_QPI.png"
                  alt="General QPI certificate"
                  fill
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="object-contain bg-background"
                />
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Work Experience Section */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4 mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold">Work Experience</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="glass rounded-[2rem] p-8 md:p-10"
          >
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-8">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold">Enjoy Realty & Development Corporation - IT Support</h3>
                <p className="text-lg text-muted-foreground">January 2026 - April 2026</p>
              </div>
            </div>

            <ul className="mt-8 space-y-4 text-muted-foreground">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <span>Designed, developed, and enhanced four websites and business applications across several companies within the corporation.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <span>Assisted in migrating operational data from spreadsheets into the company&apos;s centralized business management system</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <span>Produced digital media and marketing assets to support the company&apos;s marketing efforts</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4 mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold">Portfolio</h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {portfolioProjects.map((project, index) => (
              <motion.div key={project.id} variants={itemVariants}>
                <Link href={`/projects/${project.slug}`}>
                  <Card className="group glass hover:border-primary/50 smooth-transition overflow-hidden p-6 md:p-8">
                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                      <div className="space-y-4 min-w-0">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold w-fit">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {project.category}
                        </div>
                        <h3 className="text-3xl font-bold text-foreground group-hover:text-primary smooth-transition line-clamp-2">
                          {project.title}
                        </h3>
                        <p className="text-sm sm:text-base text-muted-foreground max-w-4xl">
                          {project.summary}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 text-primary md:shrink-0">
                        <span className="text-sm font-semibold">View project</span>
                        <ArrowRight className="group-hover:translate-x-1 smooth-transition" size={18} />
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
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
            <h2 className="text-4xl sm:text-5xl font-bold">Skills</h2>
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
                skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS']
              },
              {
                title: 'Backend',
                skills: ['Ruby on Rails', 'Node.js', 'PHP', 'C++']
              },
              {
                title: 'Database',
                skills: ['Schema Design', 'PostgreSQL', 'MySQL', 'SQLite']
              }
            ].map((category, index) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="glass rounded-lg p-6 space-y-4"
              >
                <h3 className="text-3xl font-bold">{category.title}</h3>
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

      {/* Seminars Section */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4 mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold">Seminars Attended</h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >

          <ul className="space-y-3">
            <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <span>
                    <button
                      type="button"
                      onClick={() => setIsFlexOpen(true)}
                      className="border-b border-transparent text-foreground smooth-transition hover:border-primary hover:text-primary"
                    >
                      Foundations of Leadership Excellence by Innov8, May 2026
                    </button>
                  </span>
            </li>
            <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <span>
                    <button
                      type="button"
                      onClick={() => setIsFirstAidOpen(true)}
                      className="border-b border-transparent text-foreground smooth-transition hover:border-primary hover:text-primary"
                    >
                      Basic Life Support and Basic First Aid Training by 3rd District of Camarines Sur House of Representatives, March 2026
                    </button>
                  </span>
            </li>

          </ul>
          </motion.div>
          
        </div>

         {isFlexOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 py-8 backdrop-blur-sm"
            onClick={() => setIsFlexOpen(false)}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Foundations of Leadership Excellence image"
              className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-background shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setIsFlexOpen(false)}
                className="absolute right-4 top-4 z-10 rounded-full bg-black/60 px-3 py-1 text-sm text-white smooth-transition hover:bg-black/80"
              >
                Close
              </button>
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/FLEX.jpg"
                  alt="Foundations of Leadership Excellence certificate"
                  fill
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="object-contain bg-background"
                />
              </div>
            </div>
          </div>
        )}

        {isFirstAidOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 py-8 backdrop-blur-sm"
            onClick={() => setIsFirstAidOpen(false)}
          >
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Basic Life Support and Basic First Aid Training image"
              className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-background shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setIsFirstAidOpen(false)}
                className="absolute right-4 top-4 z-10 rounded-full bg-black/60 px-3 py-1 text-sm text-white smooth-transition hover:bg-black/80"
              >
                Close
              </button>
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/Red_Cross.jpg"
                  alt="Basic Life Support and Basic First Aid Training certificate"
                  fill
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="object-contain bg-background"
                />
              </div>
            </div>
          </div>
        )}

      </section>

      <Footer />
    </div>
  )
}


