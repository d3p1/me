/**
 * @description Root page
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import Image from 'next/image'
import wipBanner from '@/public/media/banners/wip.jpg'

export default function Home() {
  return (
    <main className="flex justify-center items-center w-screen h-screen">
      <Image src={wipBanner} alt="Work in progress" placeholder="blur" />
    </main>
  )
}
