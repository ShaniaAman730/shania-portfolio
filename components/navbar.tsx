'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Multimedia', href: '/multimedia' },
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6"
    >
      <div className="relative mx-auto flex min-h-[50px] max-w-6xl items-center justify-between rounded-full border border-white/10 bg-background/90 px-3 py-2 shadow-xl shadow-black/10 backdrop-blur-xl dark:border-white/10 dark:bg-background/80 sm:px-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/portfolio-logo.ico" alt="Shania Aman logo" width={30} height={30} className="h-8 w-8 rounded-full" priority />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'relative text-base font-semibold smooth-transition',
                pathname === item.href
                  ? 'text-primary'
                  : 'text-foreground/60 hover:text-foreground'
              )}
            >
              {item.label}
              {pathname === item.href && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="rounded-lg p-2 text-foreground hover:bg-primary/10 smooth-transition md:hidden"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 mx-4 mt-3 rounded-2xl border border-border/80 bg-background/95 p-4 shadow-2xl shadow-black/20 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-4 py-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'rounded-lg px-3 py-2 text-base font-semibold smooth-transition',
                    pathname === item.href
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground hover:bg-muted/60 hover:text-foreground'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
