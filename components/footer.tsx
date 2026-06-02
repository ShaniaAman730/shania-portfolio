'use client'

import { Github, Linkedin, Mail, Globe } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      href: '#',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: '#',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:hello@shania-aman.dev',
      label: 'Email'
    },
    {
      icon: Globe,
      href: '#',
      label: 'Portfolio'
    }
  ]

  return (
    <footer className="relative border-t border-border/50 bg-background/95 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <h3 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Shania Aman
            </h3>
            <p className="text-sm text-muted-foreground">
              Full-stack developer & database architect specializing in scalable applications.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-foreground">Navigate</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/projects" className="hover:text-foreground smooth-transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/skills" className="hover:text-foreground smooth-transition">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/database" className="hover:text-foreground smooth-transition">
                  Database Design
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-foreground smooth-transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-3">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground smooth-transition"
                >
                  <link.icon size={18} />
                </a>
              ))}
            </div>
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
