/**
 * @description Layout for sections
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
export default function Layout({children}: {children: React.ReactNode}) {
  return <div className="max-w-4xl flex flex-col gap-6 p-8">{children}</div>
}
