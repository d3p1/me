/**
 * @description Nav component
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
export default function Nav() {
  return (
    <nav>
      <ul className="grid grid-cols-3 gap-4">
        <li className="opacity-50 hover:opacity-100 transition-opacity">
          <a
            className="before:content-['_[_'] after:content-['_]_']"
            href="https://www.linkedin.com/in/cristian-marcelo-de-picciotto/"
          >
            linkedin
          </a>
        </li>
        <li className="opacity-50 hover:opacity-100 transition-opacity">
          <a
            className="before:content-['_[_'] after:content-['_]_']"
            href="https://www.upwork.com/freelancers/cristianmarcelodepicciotto"
          >
            upwork
          </a>
        </li>
        <li className="opacity-50 hover:opacity-100 transition-opacity">
          <a
            className="before:content-['_[_'] after:content-['_]_']"
            href="https://github.com/d3p1"
          >
            github
          </a>
        </li>
        <li className="opacity-50 hover:opacity-100 transition-opacity">
          <a
            className="before:content-['_[_'] after:content-['_]_']"
            href="https://www.chess.com/member/depichess"
          >
            chess.com
          </a>
        </li>
        <li className="opacity-50 hover:opacity-100 transition-opacity">
          <a
            className="before:content-['_[_'] after:content-['_]_']"
            href="https://lichess.org/@/depichess"
          >
            lichess
          </a>
        </li>
        <li className="opacity-50 hover:opacity-100 transition-opacity">
          <a
            className="before:content-['_[_'] after:content-['_]_']"
            href="https://x.com/___d3p1"
          >
            twitter
          </a>
        </li>
        <li className="opacity-50 hover:opacity-100 transition-opacity">
          <a
            className="before:content-['_[_'] after:content-['_]_']"
            href="https://www.instagram.com/___d3p1"
          >
            instagram
          </a>
        </li>
      </ul>
    </nav>
  )
}
