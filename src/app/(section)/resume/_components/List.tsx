/**
 * @description List component
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import type {ListComponentProps} from '@/app/(section)/resume/_types'

export default function List({title, items, link}: ListComponentProps) {
  return (
    <div className="pt-4 border-t-solid border-t-2 border-secondary-500">
      <h3 className="text-center text-secondary-500">{title}</h3>
      <ul className="flex flex-col gap-14">{items}</ul>
      <a
        href={link}
        target="_blank"
        className="text-center text-secondary-500 token my-8 block"
      >
        View More
      </a>
    </div>
  )
}
