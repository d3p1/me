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
  description: "Hi! I'm de Picciotto Cristian Marcelo, a Full Stack Developer.",
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
        className={`bg-primary text-secondary ${dmMono.className} antialiased w-screen h-screen grid place-items-center`}
      >
        <main className="max-w-1/3">{children}</main>
      </body>
    </html>
  )
}
