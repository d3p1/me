/**
 * @description Types
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
export interface Repo {
  id: string | number
  full_name: string
  html_url: string
  description: string | null
  topics: string[] | undefined
}

export interface FilterTopic {
  label: string
  is_active?: boolean
}
