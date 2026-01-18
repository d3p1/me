/**
 * @description Nav component
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {links} from '@/app/_etc/nav'

export default function Nav() {
  return (
    <nav aria-label="Social links" className="grid grid-cols-3 gap-4">
      {links.map(({label, href}, index) => (
        <a
          key={index}
          className="before:content-['_[_'] after:content-['_]_'] opacity-50 hover:opacity-100 transition-opacity"
          href={href}
          target="_blank"
          rel="me"
        >
          {label}
        </a>
      ))}
    </nav>
  )
}
