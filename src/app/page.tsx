/**
 * @description Root page
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import Hero from '@/app/_components/Hero'
import Intro from '@/app/_components/Intro'
import Nav from '@/app/_components/Nav'

export default function HomePage() {
  return (
    <div className="grid grid-cols-1 gap-4 place-items-center text-center lg:grid-cols-2">
      <Hero />

      <div className="flex flex-col justify-center items-center gap-6">
        <Intro />
        <Nav />
      </div>
    </div>
  )
}
