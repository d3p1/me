/**
 * @description Layout for projects
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <>
      <h2>Projects</h2>
      <p className="text-secondary-500 text-center">
        Projects I enjoy building that simplify developers’ workflows and
        accelerate feature implementation.
      </p>
      {children}
    </>
  )
}
