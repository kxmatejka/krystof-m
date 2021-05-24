import React, {FC} from 'react'
import styled from 'styled-components'
import {Post} from '../../types'
import {Layout} from './layout'
import {ArticlePreview} from '../../components/article-preview'
import {LinkBlogPage} from '../../components'

const PaginationContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const PaginationItem = styled.div`
  display: flex;
`

const PaginationLeft: FC<{show: boolean, pageNumber: number}> = ({show, pageNumber}) => {
  return (
    <PaginationItem>
      {show && <LinkBlogPage pageNumber={pageNumber - 1}>&larr;&nbsp;Newer posts</LinkBlogPage>}
    </PaginationItem>
  )
}

const PaginationRight: FC<{show: boolean, pageNumber: number}> = ({show, pageNumber}) => {
  return (
    <PaginationItem>
      {show && <LinkBlogPage pageNumber={pageNumber + 1}>Older posts&nbsp;&rarr;</LinkBlogPage>}
    </PaginationItem>
  )
}

const Pagination: FC<{ pageNumber?: number, hasNextPage?: boolean }> = ({pageNumber, hasNextPage}) => {
  return (
    <PaginationContainer>
      <PaginationLeft show={pageNumber > 0} pageNumber={pageNumber}/>
      <PaginationRight show={hasNextPage} pageNumber={pageNumber}/>
    </PaginationContainer>
  )
}

export const PostsList: FC<{ posts: Post[], pageNumber: number, hasNextPage: boolean }> = ({posts, pageNumber, hasNextPage}) => {
  return (
    <Layout>
      {posts.map((post) => (
        <ArticlePreview
          key={post.slug}
          slug={post.slug}
          title={post.title}
          image={post.image}
          preview={post.preview}
          tags={post.tags.map((tag) => tag.title)}
          date={post.created}
        />
      ))}
      <Pagination pageNumber={pageNumber} hasNextPage={hasNextPage}/>
    </Layout>
  )
}

export default () => null
