import type { Metadata } from 'next'
import { Open_Sans, Bebas_Neue } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from 'next-themes'
import './globals.css'

const openSans = Open_Sans({ subsets: ["latin"], variable: '--font-open-sans' });
const bebasNeue = Bebas_Neue({ subsets: ["latin"], variable: '--font-bebas-neue', weight: '400' });

export const metadata: Metadata = {
  title: 'Shania Aman | Full-Stack Developer & Database Architect',
  description: 'Professional portfolio of Shania Aman - Full-stack developer specializing in database design, business systems, and scalable applications.',
  generator: 'v0.app',
  metadataBase: new URL('https://shania-aman.dev'),
  openGraph: {
    title: 'Shania Aman | Full-Stack Developer & Database Architect',
    description: 'Full-stack developer specializing in database design, business systems, and scalable applications.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${openSans.variable} ${bebasNeue.variable} font-sans antialiased bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </ThemeProvider>
      </body>
    </html>
  )
}
