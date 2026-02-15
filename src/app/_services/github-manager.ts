/**
 * @description GitHub manager
 * @author      C. M. de Picciotto <d3p1@d3p1.dev> (https://d3p1.dev/)
 */
import 'server-only'
import {Octokit} from 'octokit'
import {
  LABORATORY_TOPIC,
  PROJECT_TOPIC,
  SEARCH_PAGE_SIZE,
  SEARCH_STARS_SORT,
  SEARCH_STARS_SORT_ORDER,
} from '@/app/_etc/github'
import type {Repo} from '@/app/_types'

export class GitHubManager {
  /**
   * @type {Octokit}
   */
  #octokit: Octokit

  /**
   * Constructor
   *
   * @param {string|null} token
   */
  constructor(token: string | null = null) {
    this.#octokit = new Octokit({
      auth: token ?? process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
    })
  }

  /**
   * Get laboratories
   *
   * @returns {Promise<Repo[]>}
   */
  getLaboratories(): Promise<Repo[]> {
    return this.getRepositoryByTopic(LABORATORY_TOPIC)
  }

  /**
   * Get projects
   *
   * @returns {Promise<Repo[]>}
   */
  getProjects(): Promise<Repo[]> {
    return this.getRepositoryByTopic(PROJECT_TOPIC)
  }

  /**
   * Get repository by topic
   *
   * @param   {string} topic
   * @returns {Promise<Repo[]>}
   */
  async getRepositoryByTopic(topic: string): Promise<Repo[]> {
    const iterator = this.#octokit.paginate.iterator(
      this.#octokit.rest.search.repos,
      {
        q: `user:${process.env.GITHUB_USERNAME} topic:${topic}`,
        sort: SEARCH_STARS_SORT,
        order: SEARCH_STARS_SORT_ORDER,
        per_page: SEARCH_PAGE_SIZE,
      },
    )

    let repos: Repo[] = []
    for await (const {data} of iterator) {
      for (const {id, full_name, html_url, description, topics} of data) {
        repos = [...repos, {id, full_name, html_url, description, topics}]
      }
    }
    return repos
  }
}
