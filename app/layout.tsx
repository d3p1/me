/**
 * @description Root layout
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import type {Metadata} from 'next'
import {dmMono} from '@/app/ui/fonts'
import '@/app/ui/globals.css'

export const metadata: Metadata = {
  title: {
    template: '%s | d3p1',
    default: 'd3p1',
  },
  description: "Hi! I'm de Picciotto C. M., a Full Stack Developer.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${dmMono.className} antialiased`}>{children}</body>
    </html>
  )
}
