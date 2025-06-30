import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Bassiriki Portfolio",
  description: 'Created par Bassiriki Mangane',
 
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
