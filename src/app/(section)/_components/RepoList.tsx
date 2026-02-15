/**
 * @description Repo list
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import type {Repo} from '@/app/_types'

export default function RepoList({repos}: {repos: Repo[]}) {
  return (
    <ul className="grid grid-cols-1 gap-12 text-center">
      {repos.map((repo) => (
        <li
          key={repo.id}
          className="border-solid border-2 border-secondary-500"
        >
          <Card repo={repo} />
        </li>
      ))}
    </ul>
  )
}

function Card({repo}: {repo: Repo}) {
  return (
    <a href={repo.html_url} target="_blank" className="p-8 flex flex-col gap-4">
      <h3 className="wrap-break-word">{repo.full_name}</h3>
      <p className="text-secondary-500">{repo.description}</p>
      {repo.topics?.length && <TopicList topics={repo.topics} />}
    </a>
  )
}

function TopicList({topics}: {topics: string[]}) {
  return (
    <div className="border-t-solid border-t-2 border-t-secondary-500 mt-4 p-2 flex flex-col">
      <h4 className="font-black">Topics</h4>
      <ul className="flex flex-row flex-wrap gap-2 justify-center items-center">
        {topics.map((topic, index) => (
          <li
            key={index}
            className="token opacity-50 hover:opacity-100 transition-opacity"
          >
            {topic}
          </li>
        ))}
      </ul>
    </div>
  )
}
