/**
 * @description Repo list
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 * @todo        Improve filter logic
 */
'use client'

import {useState} from 'react'
import type {FilterTopic} from '@/app/_types'
import {filter_topic_list} from '@/app/_etc/github'
import type {Repo} from '@/app/_types'

export default function RepoList({repos}: {repos: Repo[]}) {
  const [filterList, setFilterList] = useState<FilterTopic[]>(filter_topic_list)
  const handleFilter = (index: number) => {
    const list = [...filterList]
    list[index].is_active = !list[index].is_active
    setFilterList(list)
  }

  const activeFilterList = filterList.filter((topic) => topic.is_active)
  const filteredRepos = activeFilterList.length
    ? repos.filter(
        (repo) =>
          repo.topics?.some((topic) =>
            activeFilterList.some((filter) => filter.label === topic),
          ),
      )
    : repos

  return (
    <>
      <Filter filterList={filterList} handleFilter={handleFilter} />
      <ul className="grid grid-cols-1 gap-12 text-center">
        {filteredRepos.map((repo) => (
          <li
            key={repo.id}
            className="border-solid border-2 border-secondary-500"
          >
            <Card repo={repo} />
          </li>
        ))}
      </ul>
    </>
  )
}

function Filter({
  filterList,
  handleFilter,
}: {
  filterList: FilterTopic[]
  handleFilter: (index: number) => void
}) {
  return (
    <div className="my-8 flex flex-row justify-center items-center gap-6">
      <p className="font-black">Filters:</p>
      <ul className="flex flex-row gap-4 justify-center items-center">
        {filterList.map((topic, index) => (
          <li
            key={index}
            className={`token cursor-pointer ${
              topic.is_active ? 'text-secondary-100' : 'text-secondary-500'
            } `}
            onClick={() => handleFilter(index)}
          >
            {topic.label}
          </li>
        ))}
      </ul>
    </div>
  )
}

function Card({repo}: {repo: Repo}) {
  return (
    <a href={repo.html_url} target="_blank" className="p-8 flex flex-col gap-4">
      <h2 className="wrap-break-word">{repo.full_name}</h2>
      <p className="text-secondary-500">{repo.description}</p>
      {repo.topics?.length && <TopicList topics={repo.topics} />}
    </a>
  )
}

function TopicList({topics}: {topics: string[]}) {
  return (
    <div className="border-t-solid border-t-2 border-t-secondary-500 mt-4 p-2 flex flex-col">
      <h4>Topics</h4>
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
