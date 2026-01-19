/**
 * @description Root page
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import Hero from '@/app/_components/Hero'
import Intro from '@/app/_components/Intro'
import Nav from '@/app/_components/Nav'

export default function HomePage() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center lg:flex-row lg:gap-8">
      <Hero />

      <div className="flex flex-col justify-center items-center gap-6 text-center lg:max-w-1/3">
        <Intro />
        <Nav />
      </div>
    </div>
  )
}
