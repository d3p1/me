/**
 * @description Layout for laboratories
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <>
      <h2 className="text-center">Laboratories</h2>
      <p className="text-secondary-500">
        Hands-on experiments to explore new technologies, test ideas, expand my
        technical toolkit, and have fun.
      </p>
      {children}
    </>
  )
}
