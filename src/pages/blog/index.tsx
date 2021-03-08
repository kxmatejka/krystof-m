import React, {FC} from 'react'
import {getPosts} from '../../model'
import {PostsList} from './posts-list'
import type {Post} from '../../types'

const Blog: FC<{posts: Post[], pageNumber: number, hasNextPage: boolean}> = ({posts, pageNumber, hasNextPage}) => {
  return (
    <PostsList posts={posts} pageNumber={pageNumber} hasNextPage={hasNextPage}/>
  )
}

export const getStaticProps = async () => {
  const result = await getPosts()

  return {
    props: {
      posts: result.posts,
      hasNextPage: result.hasNextPage,
      pageNumber: 0,
    },
  }
}

export default Blog
