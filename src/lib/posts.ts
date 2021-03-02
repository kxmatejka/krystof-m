import {readDataFileContent, readDataFileMeta, listDataDir} from './data-files'
import type {Post} from '../types'

const parsePost = (meta: string) => JSON.parse(meta) as Post

const addMetaToPost = (post: Post, content: string) => {
  post.content = content
  return post
}

export const getPostBySlug = async (slug: string) => {
  const [meta, content] = await Promise.all([
    readDataFileMeta(slug),
    readDataFileContent(slug),
  ])

  return addMetaToPost(parsePost(meta), content)
}

export const getAllPostsMeta = async () => {
  const posts = await Promise.all(listDataDir().map((post) => readDataFileMeta(post)))

  return posts.map((post) => parsePost(post))
}

export const getAllPostsSlugs = () => listDataDir()
