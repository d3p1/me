/**
 * @description Nav component
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import {links} from '@/app/_etc/nav'
import Link from 'next/link'
import {UrlObject} from 'node:url'

export default function Nav() {
  return (
    <nav
      aria-label="Social links"
      className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3"
    >
      {links.map(({label, href, external}, index) => {
        const props = {
          className: 'token opacity-50 hover:opacity-100 transition-opacity',
          href: href,
          target: '_blank',
          rel: 'me',
        }

        return external ? (
          <a {...props} key={index}>
            {label}
          </a>
        ) : (
          <Link {...props} key={index} href={href as unknown as UrlObject}>
            {label}
          </Link>
        )
      })}
    </nav>
  )
}
