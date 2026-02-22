/**
 * @description Types
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
export interface ListItem {
  title: string
  description?: string
}

export interface Experience extends ListItem {
  start_date: Date
  end_date?: Date
}

export interface Project extends ListItem {
  link: string
}

export interface Certification extends ListItem {
  provider: CertificationProvider
}
type CertificationProvider = {
  name: string
  link: string
}
