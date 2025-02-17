/**
 * @description Root page
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex justify-center items-center w-screen h-screen">
      <Image
        src="/media/banners/wip.jpg"
        alt="Work in progress"
        width={400}
        height={400}
      />
    </main>
  )
}
