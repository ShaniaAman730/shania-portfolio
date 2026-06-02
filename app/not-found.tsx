'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-background text-foreground">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-6"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-8xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
        >
          404
        </motion.div>

        <h1 className="text-4xl font-bold">Page Not Found</h1>
        <p className="text-lg text-muted-foreground max-w-md mx-auto">
          Sorry, the page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track.
        </p>

        <Link href="/">
          <Button size="lg">Back to Home</Button>
        </Link>
      </motion.div>
    </div>
  )
}
