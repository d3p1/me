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
  {
    title: 'dockgento',
    description:
      'CLI tool designed to provision a fully containerized Magento environment in seconds. Unlike typical Magento Docker setups that focus solely on development, this tool is built with production in mind. It integrates Traefik for automated SSL certificate generation and SSL termination, and runs Docker in rootless mode to enhance security and reduce attack surface in production deployments.',
    link: 'https://github.com/d3p1/dockgento',
  },
  {
    title: 'docknext',
    description:
      'CLI tool designed to provision a fully containerized, self-hosted Next.js environment in seconds.',
    link: 'https://github.com/d3p1/docknext',
    hide: true,
  },
]
