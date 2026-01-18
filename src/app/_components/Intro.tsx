/**
 * @description Intro component
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
export default function Intro() {
  return (
    <div className="flex flex-col justify-center items-center gap-6">
      <h1 className="font-black uppercase text-lg before:content-['_[_'] after:content-['_]_']">
        de Picciotto, Cristian Marcelo
      </h1>
      <p className="lowercase leading-10">
        Hi! I am a full-stack developer who loves building high-performance
        e-commerce sites, immersive website experiences, and web-based games.
      </p>
    </div>
  )
}
