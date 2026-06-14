import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { projects } from '@/lib/data/projects'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowLeft, MonitorPlay } from 'lucide-react'
import { Mail } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { extractYoutubeId, isYoutubeUrl } from '@/lib/utils'
import type { Project } from '@/lib/data/projects'

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

type ProjectMedia = NonNullable<Project['media']>[number]

function MediaCard({ media }: { media: ProjectMedia }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20 shadow-2xl shadow-black/20">
      <div className={media.kind === 'video' ? 'relative aspect-video overflow-hidden' : ''}>
        {media.src ? (
          media.kind === 'video' ? (
            isYoutubeUrl(media.src) ? (
              <iframe
                src={`https://www.youtube.com/embed/${extractYoutubeId(media.src)}`}
                className="h-full w-full object-cover"
                allowFullScreen
                loading="lazy"
                title={media.alt}
              />
            ) : (
              <video className="h-full w-full object-cover" controls playsInline preload="metadata">
                <source src={media.src} />
              </video>
            )
          ) : (
            <img src={media.src} alt={media.alt} className="h-full w-full object-cover" />
          )
        ) : (
          <div className="flex min-h-[280px] items-center justify-center bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 text-center">
            <div className="max-w-sm space-y-3">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary">
                <MonitorPlay className="h-6 w-6" />
              </div>
              <p className="text-lg font-semibold text-foreground">{media.alt}</p>
              <p className="text-sm text-muted-foreground">
                {media.caption ?? 'Media placeholder for this project section.'}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function MediaGroup({ media }: { media?: ProjectMedia[] }) {
  if (!media?.length) {
    return null
  }

  return (
    <div className={media.length > 1 ? 'grid grid-cols-1 gap-6 md:grid-cols-2' : 'grid grid-cols-1'}>
      {media.map((item, index) => (
        <MediaCard key={`${item.slot}-${index}`} media={item} />
      ))}
    </div>
  )
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  const databaseFocus = project.databaseFocus

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Link href="/projects">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2" size={18} />
              Back to Projects
            </Button>
          </Link>

          <div className="mb-12">
            <Badge className="mb-4">{project.category}</Badge>
            <h1 className="mb-4 text-5xl font-bold sm:text-6xl">{project.title}</h1>
            <MediaGroup media={project.media?.filter((item) => item.slot === 'afterTitle')} />
          </div>

          <div className="space-y-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="glass rounded-lg p-8">
                <h2 className="mb-4 text-2xl font-bold">Problem</h2>
                <p className="leading-relaxed text-muted-foreground">{project.problem}</p>
              </div>
              <div className="glass rounded-lg p-8">
                <h2 className="mb-4 text-2xl font-bold">Solution</h2>
                <p className="leading-relaxed text-muted-foreground">{project.solution}</p>
              </div>
            </div>

            <MediaGroup media={project.media?.filter((item) => item.slot === 'afterProblem')} />

            <div>
              <h2 className="mb-6 text-2xl font-bold">Key Features</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {project.keyFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 rounded-lg glass p-4">
                    <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <MediaGroup media={project.media?.filter((item) => item.slot === 'afterKeyFeatures')} />

            <div>
              <h2 className="mb-6 text-2xl font-bold">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="rounded-full bg-primary/10 px-4 py-2 font-medium text-primary">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <MediaGroup media={project.media?.filter((item) => item.slot === 'afterTechnologies')} />

            <div>
              <h2 className="mb-6 text-2xl font-bold">My Contributions</h2>
              <ul className="space-y-3">
                {project.contributions.map((contribution, index) => (
                  <li key={index} className="flex items-start gap-3 rounded-lg glass p-4">
                    <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-cyan-400" />
                    <span className="text-foreground">{contribution}</span>
                  </li>
                ))}
              </ul>
            </div>

            <MediaGroup media={project.media?.filter((item) => item.slot === 'afterContributions')} />

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-6 text-2xl font-bold">Challenges</h2>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-orange-400" />
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-2xl font-bold">Key Learnings</h2>
                <ul className="space-y-3">
                  {project.lessonsLearned.map((lesson, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-green-400" />
                      <span>{lesson}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <MediaGroup media={project.media?.filter((item) => item.slot === 'afterChallenges')} />

            {databaseFocus && (
              <div className="glass rounded-lg p-8">
                <h2 className="mb-6 text-2xl font-bold">Entity-Relationship Diagram</h2>
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20">
                  <img
                    src={databaseFocus.image ?? '/images/placeholder.svg'}
                    alt={databaseFocus.alt ?? `${project.title} ERD`}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            )}
          </div>

          <div className="mt-16 rounded-lg glass p-8 text-center">
            <h2 className="mb-4 text-2xl font-bold">Interested in Learning More?</h2>
            <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
              Feel free to email me if you&apos;d like to discuss this project in more detail or explore potential work/collaboration opportunities.
            </p>
            <Link
              href="mailto:shaniaaman98@gmail.com"
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-background/60 px-5 py-3 text-sm font-semibold text-foreground smooth-transition hover:border-primary/40 hover:bg-primary/10"
            >
              <Mail size={18} />
              <span>shaniaaman98@gmail.com</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}