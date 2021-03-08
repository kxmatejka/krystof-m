import {readDataFileContent, readDataFileMeta, listDataDir} from '../lib/data-files'
import type {Post} from '../types'

const POSTS_PER_PAGE = 5

interface Limiter {
  pagination?: {
    page?: number
  }
}

interface Result {
  posts: Post[]
  hasNextPage: boolean
}

const parsePost = (meta: string) => {
  const json = JSON.parse(meta)

  return json as Post
}

const addMetaToPost = (post: Post, content: string) => {
  post.content = content
  return post
}

const sortPostsByDate = (posts: Post[]) => {
  return posts.sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime())
}

export const getPostBySlug = async (slug: string) => {
  const [meta, content] = await Promise.all([
    readDataFileMeta(slug),
    readDataFileContent(slug),
  ])

  return addMetaToPost(parsePost(meta), content)
}

export const getAllPostsMeta = async () => {
  const postsData = await Promise.all(listDataDir().map((post) => readDataFileMeta(post)))
  const parsedPosts = postsData.map((post) => parsePost(post))

  return sortPostsByDate(parsedPosts)
}

export const getAllPostsSlugs = () => listDataDir()

export const getPosts = async (limiter: Limiter = {}): Promise<Result> => {
  const allPosts = await getAllPostsMeta()

  const {
    pagination: {
      page: startPage = 0,
    } = {},
  } = limiter
  const startIndex = startPage * POSTS_PER_PAGE
  const endIndex = startIndex + POSTS_PER_PAGE

  return {
    posts: allPosts.slice(startIndex, endIndex),
    hasNextPage: allPosts.length > endIndex,
  }
}

export const getAllPagesNumbers = () => {
  const slugs = getAllPostsSlugs()
  const numberOfPages = Math.floor(slugs.length / POSTS_PER_PAGE)

  return Array.from(Array(numberOfPages + 1).keys()).slice(1)
}
