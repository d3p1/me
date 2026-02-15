/**
 * @description Projects page
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import RepoList from '@/app/(section)/_components/RepoList'
import {GitHubManager} from '@/app/_services/github-manager'

export default async function Page() {
  const gitHub = new GitHubManager()
  const projects = await gitHub.getProjects()

  return <RepoList repos={projects} />
}
