import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GenAIaaS',
  description: 'Generative AIaaS Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  <ClerkProvider>
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
  </ClerkProvider>
}
