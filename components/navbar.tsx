'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ThemeToggle } from '@/components/theme-toggle'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Database', href: '/database' },
    { label: 'Skills', href: '/skills' },
    { label: 'Contact', href: '/contact' }
  ]

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6"
    >
      <div className="max-w-4xl mx-auto glass rounded-full py-3 px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-lg sm:text-xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent smooth-transition hover:opacity-80">
          SA
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'text-sm font-medium smooth-transition relative',
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

        {/* Theme Toggle */}
        <div className="flex items-center gap-4">
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-white/10 rounded-lg smooth-transition"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 right-0 mt-2 mx-4 glass rounded-lg p-4 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'text-sm font-medium smooth-transition',
                    pathname === item.href
                      ? 'text-primary'
                      : 'text-foreground/60 hover:text-foreground'
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
