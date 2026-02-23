/**
 * @description Resume
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import ProjectList from '@/app/(section)/resume/_components/ProjectList'
import ExperienceList from '@/app/(section)/resume/_components/ExperienceList'
import CertificationList from '@/app/(section)/resume/_components/CertificationList'

export default function Page() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col items-center justify-center gap-6 text-center mb-8">
        <h1>de Picciotto, Cristian Marcelo</h1>

        <h2 className="text-secondary-500">
          Adobe Magento Certified Expert Developer | Next.js Developer |
          Three.js Developer
        </h2>

        <p>
          Adobe Magento Certified Expert Developer with 13+ years of hands-on
          experience designing, building, and optimizing complex eCommerce
          platforms. Beyond eCommerce, I have a strong passion for DevOps,
          graphics programming, and game development.
        </p>
      </div>

      <ProjectList />
      <ExperienceList />
      <CertificationList />
    </div>
  )
}
