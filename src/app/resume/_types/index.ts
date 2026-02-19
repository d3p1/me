/**
 * @description Types
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
export interface Experience {
  title: string
  start_date: Date
  end_date?: Date
  description: string
}

export interface Project {
  title: string
  description: string
  link: string
}

type CertificationProvider = {
  name: string
  link: string
}

export interface Certification {
  title: string
  provider: CertificationProvider
}
