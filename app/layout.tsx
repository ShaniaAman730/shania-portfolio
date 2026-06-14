import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const glacial = localFont({
  src: [
    {
      path: '../public/glacial-indifference.regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/glacial-indifference.bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-glacial-indifference',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Shania Aman | Portfolio',
  description: 'Professional portfolio of Shania Aman - full-stack developer, database designer, and multimedia producer.',
  generator: 'v0.app',
  metadataBase: new URL('https://shania-aman.dev'),
  openGraph: {
    title: 'Shania Aman | Portfolio',
    description: 'Fresh Graduate Full-stack developer.',
    type: 'website',
  },
  icons: {
    icon: '/portfolio-logo-2.ico',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={glacial.variable}>
      <body className="font-sans antialiased bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}
