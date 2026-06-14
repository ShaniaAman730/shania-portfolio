'use client'

import { Mail } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border/50 bg-background/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Shania Aman
            </h3>
            <p className="text-sm text-muted-foreground">
              Fresh Graduate with Experience in Full-stack Development, Database Design, and Multimedia Production
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-foreground">Navigate</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="hover:text-foreground smooth-transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-foreground smooth-transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/multimedia" className="hover:text-foreground smooth-transition">
                  Multimedia
                </Link>
              </li>
            </ul>
          </div>

          {/* Email */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-foreground">Email</h4>
            <a
              href="mailto:shaniaaman98@gmail.com"
              className="inline-flex items-center gap-3 text-sm text-muted-foreground smooth-transition hover:text-foreground"
            >
              <Mail size={18} />
              <span>shaniaaman98@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border/50" />

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>&copy; {currentYear} Shania Aman. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-foreground smooth-transition">
              Privacy
            </Link>
            <Link href="#" className="hover:text-foreground smooth-transition">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
