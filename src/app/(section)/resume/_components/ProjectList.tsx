/**
 * @description Project list
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import List from '@/app/(section)/resume/_components/List'
import Item from '@/app/(section)/resume/_components/List/Item'
import {projects} from '@/app/(section)/resume/_etc/projects'

export default function ProjectList() {
  return (
    <List
      title="Projects"
      items={projects.map((project, index) => (
        <Item li={project} key={index} />
      ))}
    />
  )
}
