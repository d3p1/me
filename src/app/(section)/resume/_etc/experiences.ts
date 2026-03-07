/**
 * @description Experiences
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import type {Experience} from '@/app/(section)/resume/_types'

export const experiences: Experience[] = [
  {
    title:
      'Magento Developer | Next.js Developer | Three.js Developer | Upwork Freelance',
    start_date: new Date('2016-05-01'),
    description:
      'Freelancing allows me to leverage my knowledge across the full software development lifecycle—from architecture and development to deployment and production support—while taking full end-to-end ownership of projects. It also enables me to apply and further develop my frontend, backend, DevOps, and System Administration skills using technologies such as Magento, Docker, Next.js, React, Tailwind CSS, Three.js, and Blender.',
  },
  {
    title: 'Magento Full-Stack Developer | Sepoy',
    start_date: new Date('2024-01-01'),
    description:
      'Working as a Magento full-stack developer, implementing modern websites using Hyvä, ScandiPWA, and other modern headless architectures.',
  },
  {
    title: 'Magento Full-Stack Developer | Bina Commerce',
    start_date: new Date('2021-01-01'),
    end_date: new Date('2026-01-01'),
    description:
      'Developed a cloud-based service to automate provisioning of production-ready custom Magento stores. Enabled one-click deployment of fully configured Magento instances without manual server setup. Automated infrastructure provisioning, domain and SSL configuration, Cloudflare integration (DNS, caching, security), Varnish, Redis, Elasticsearch, and SMTP setup, while enforcing security and performance best practices.',
  },
  {
    title:
      'Magento Full-Stack Developer | Scala Full-Stack Developer | Bina Chess',
    start_date: new Date('2021-01-01'),
    end_date: new Date('2026-01-01'),
    description:
      'Independent personal project. Bina Chess was an online chess platform where users verified their identity and participated in tournaments with monetary prizes. Built a custom Magento module enabling users to purchase tournament tickets directly from the product detail page (PDP). Developed the gameplay platform using Scala and the Play Framework. Designed and implemented a custom Single Sign-On (SSO) system to synchronize authentication and session state between the Magento store and the chess platform. One of my most valuable technical and entrepreneurial learning experiences.',
  },
  {
    title: 'Magento Full-Stack Developer | Balloon Group',
    start_date: new Date('2023-10-01'),
    end_date: new Date('2024-03-01'),
    description:
      "Contracted to migrate Abbot's multi-website platform from Magento 2.0 to Magento 2.4.",
    hide: true,
  },
  {
    title: 'Magento Developer | Bonoxs',
    start_date: new Date('2023-01-01'),
    end_date: new Date('2024-04-01'),
    description:
      'Contracted to build the complete API layer for the mobile app and improve performance of mobile and web platforms.',
    hide: true,
  },
  {
    title: 'Magento Developer | Summa Solutions',
    start_date: new Date('2016-02-01'),
    end_date: new Date('2016-05-01'),
    description:
      "Worked on the successful implementation of Prosegur's new site while maintaining Cetrogar's site.",
    hide: true,
  },
  {
    title: 'Magento Full-Stack Developer | Frávega',
    start_date: new Date('2014-01-01'),
    end_date: new Date('2016-01-01'),
    description:
      'Principal developer responsible for implementing the new desktop and mobile site.',
    hide: true,
  },
  {
    title: 'Magento Developer | IDS',
    start_date: new Date('2012-01-01'),
    end_date: new Date('2014-01-01'),
    description:
      'Principal developer of large company eCommerce sites such as Naldo, Agrofy, Viaggio, and Cristobal. Developed global modules for company-wide use, including payment, shipping, SEO, and shared functionality modules.',
    hide: true,
  },
]
