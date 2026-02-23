/**
 * @description List item component
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import type {ListItemComponentProps} from '@/app/(section)/resume/_types'

export default function Item({li, children}: ListItemComponentProps) {
  return (
    <li>
      <h3>{li.title}</h3>
      {li.description && <p>{li.description}</p>}
      {children}
    </li>
  )
}
