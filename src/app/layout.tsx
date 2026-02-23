/**
 * @description Root layout
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import type {ReactNode} from 'react'
import type {Metadata} from 'next'
import {dmMono} from '@/app/_ui/fonts'
import '@/app/_ui/globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://d3p1.dev'),
  title: {
    template: '%s | d3p1',
    default: 'd3p1',
  },
  description:
    "Hi! I'm de Picciotto, Cristian Marcelo, a full-stack developer.",
  openGraph: {
    images: [
      {
        url: '/media/social/og.jpg',
      },
    ],
  },
  twitter: {
    images: [
      {
        url: '/media/social/twitter.jpg',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmMono.className} antialiased p-2 min-h-screen grid grid-cols-1 place-items-center`}
      >
        <main>{children}</main>
      </body>
    </html>
  )
}
