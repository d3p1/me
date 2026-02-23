/**
 * @description Certification list
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import List from '@/app/(section)/resume/_components/List'
import Item from '@/app/(section)/resume/_components/List/Item'
import {certifications} from '@/app/(section)/resume/_etc/certifications'

export default function CertificationList() {
  return (
    <List
      title="Certifications"
      link="https://www.linkedin.com/in/cristian-marcelo-de-picciotto/"
      items={certifications.map((certification, index) => (
        <Item li={certification} key={index}>
          <a
            href={certification.provider.link}
            target="_blank"
            className="text-secondary-500 font-black"
          >
            Provider: {certification.provider.name}
          </a>
        </Item>
      ))}
    />
  )
}
