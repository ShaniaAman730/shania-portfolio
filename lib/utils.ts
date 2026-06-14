import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function extractYoutubeId(url: string): string | null {
  const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|shorts\/)?([^&\n?#]+)/
  const match = url.match(youtubeRegex)
  return match ? match[1] : null
}

export function isYoutubeUrl(url: string): boolean {
  return extractYoutubeId(url) !== null
}
