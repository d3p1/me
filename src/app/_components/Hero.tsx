/**
 * @description Hero component
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
'use client'

import {Img2Pxl} from '@d3p1/img2pxl/react'
import {config} from '@/app/_etc/hero'

export default function Hero() {
  return <Img2Pxl {...config} />
}
