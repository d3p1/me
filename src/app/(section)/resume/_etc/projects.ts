/**
 * @description Projects
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import type {Project} from '@/app/(section)/resume/_types'

export const projects: Project[] = [
  {
    title: 'thr2pxl',
    description:
      'Developed a lightweight, modular particle effect library using Three.js, featuring custom GLSL shaders, GPGPU and optimized raycasting logic for high-performance real-time rendering.',
    link: 'https://github.com/d3p1/thr2pxl',
  },
  {
    title: 'img2pxl',
    description:
      'Developed a lightweight, modular 2D pixelation effect library using Three.js, featuring custom GLSL shaders and optimized raycasting logic for high-performance real-time rendering.',
    link: 'https://github.com/d3p1/img2pxl',
  },
]
