/**
 * @description Types
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import type {ReactElement, ReactNode} from 'react'

export interface ListItem {
  title: string
  description?: string
  link?: string
  hide?: boolean
}

export type ListItemComponentProps = {
  li: ListItem
  children?: ReactNode
}

export type ListComponentProps = {
  title: string
  items: ReactElement<ListItemComponentProps>[]
}

export interface Experience extends ListItem {
  start_date: Date
  end_date?: Date
}

export type Project = ListItem

export interface Certification extends ListItem {
  provider: CertificationProvider
}
type CertificationProvider = {
  name: string
  link: string
}
