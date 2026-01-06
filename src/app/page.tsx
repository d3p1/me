/**
 * @description Root page
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import Image from 'next/image'
import profile from '../../public/media/home/profile.png'

export default function HomePage() {
  return (
    <main className="flex justify-center items-center w-screen h-screen">
      <Image
        src={profile}
        alt="Cristian Marcelo de Picciotto profile image"
        placeholder="blur"
      />
    </main>
  )
}
