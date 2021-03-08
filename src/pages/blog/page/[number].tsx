import React, {FC} from 'react'
import {getAllPagesNumbers, getPosts} from '../../../model'
import {PostsList} from '../posts-list'
import type {Post} from '../../../types'

const BlogPage: FC<{posts: Post[], pageNumber: number, hasNextPage: boolean}> = ({posts, pageNumber, hasNextPage}) => {
  return (
    <PostsList posts={posts} pageNumber={pageNumber} hasNextPage={hasNextPage}/>
  )
}

export const getStaticProps = async ({params}) => {
  const pageNumber =  Number(params.number)
  const result = await getPosts({pagination: {page: pageNumber}})

  return {
    props: {
      posts: result.posts,
      hasNextPage: result.hasNextPage,
      pageNumber,
    },
  }
}

export const getStaticPaths = () => {
  return {
    paths: getAllPagesNumbers().map((number) => ({
      params: {
        number: number.toString(),
      },
    })),
    fallback: false,
  }
}

export default BlogPage
