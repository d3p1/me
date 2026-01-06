/**
 * @description Root page
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
'use client'

import {Img2Pxl} from '@d3p1/img2pxl/react'

const config = {
  images: {
    0: {
      src: 'media/home/profile.png',
      width: 280,
      height: 280,
      resolution: {
        width: 70,
        height: 70,
      },
      pixel: {
        size: 3,
        motion: {
          displacement: {
            frequency: 1,
            amplitude: 40,
          },
        },
      },
      motion: {
        noise: {
          frequency: 0.05,
          amplitude: 2,
        },
      },
    },
  },
  pointer: {
    size: 0.1,
    trailing: {
      factor: 0.01,
    },
  },
}

export default function HomePage() {
  return (
    <main className="flex justify-center items-center w-screen h-screen">
      <Img2Pxl {...config} />
    </main>
  )
}
