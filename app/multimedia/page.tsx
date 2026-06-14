'use client'

import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import Image from 'next/image'

type MultimediaItem =
  | {
      title: string
      kind: 'image'
      src: string
      alt: string
    }
  | {
      title: string
      kind: 'video'
      src: string
      alt: string
    }

const multimediaItems: MultimediaItem[] = [
  {
    title: 'Enjoy Realty Promo Video',
    kind: 'video',
    src: '/images/Final_Promo_Video.mp4',
    alt: 'Enjoy Realty Promotional Video',
  },
  {
    title: 'ARISE Technology Promotional Video',
    kind: 'video',
    src: '/images/ARISE_EDITED2.mp4',
    alt: 'ARISE Technology Promo Video',
  },
]

function MultimediaTile({ item }: { item: MultimediaItem }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/20 shadow-2xl shadow-black/20">
      <div className="relative aspect-square overflow-hidden">
        {item.kind === 'video' ? (
          <video className="h-full w-full bg-black object-contain" controls playsInline preload="metadata" aria-label={item.alt}>
            <source src={item.src} />
          </video>
        ) : (
          <Image src={item.src} alt={item.alt} fill className="object-contain bg-black transition duration-500 group-hover:scale-105" />
        )}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-4">
          <h2 className="text-lg font-bold text-white">{item.title}</h2>
          <p className="text-xs uppercase tracking-[0.2em] text-white/70">{item.kind}</p>
        </div>
      </div>
    </article>
  )
}

export default function MultimediaPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 space-y-4">
            <h1 className="text-5xl font-bold sm:text-6xl">Multimedia Projects</h1>
            <p className="max-w-2xl text-lg text-muted-foreground">
              Video projects I have produced and edited.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {multimediaItems.map((item) => (
              <MultimediaTile key={item.title} item={item} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}