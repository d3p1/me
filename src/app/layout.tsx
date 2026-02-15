/**
 * @description Root layout
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import React from 'react'
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
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-primary text-secondary-100 ${dmMono.className} antialiased p-6 text-sm leading-10 min-h-screen grid grid-cols-1 place-items-center`}
      >
        <main>{children}</main>
      </body>
    </html>
  )
}
