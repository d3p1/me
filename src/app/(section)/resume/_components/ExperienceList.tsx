/**
 * @description Experience list
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import List from '@/app/(section)/resume/_components/List'
import Item from '@/app/(section)/resume/_components/List/Item'
import {experiences} from '@/app/(section)/resume/_etc/experiences'

export default function ExperienceList() {
  const dateFormatter = new Intl.DateTimeFormat(undefined, {
    month: 'long',
    year: 'numeric',
  })

  return (
    <List
      title="Experience"
      link="https://www.upwork.com/freelancers/cristianmarcelodepicciotto"
      items={experiences.map((experience, index) => (
        <Item li={experience} key={index}>
          <div className="font-black text-secondary-500 flex flex-row gap-4">
            <p>From: {dateFormatter.format(experience.start_date)}</p>
            {experience.end_date && (
              <p>To: {dateFormatter.format(experience.end_date)}</p>
            )}
          </div>
        </Item>
      ))}
    />
  )
}
