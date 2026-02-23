/**
 * @description List item component
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import type {ListItemComponentProps} from '@/app/(section)/resume/_types'

export default function Item({
  li: {title, description, link},
  children,
}: ListItemComponentProps) {
  const content = (
    <>
      <h3>{title}</h3>
      {children}
      {description && <p>{description}</p>}
    </>
  )

  return (
    <li>
      {link ? (
        <a href={link} target="_blank">
          {content}
        </a>
      ) : (
        content
      )}
    </li>
  )
}
