import React, {FC} from 'react'
import styled from 'styled-components'
import {getPostBySlug, getAllPostsSlugs} from '../../lib'
import {Layout} from './layout'
import {GitHubButton, TwitterButton} from '../../components'
import type {Post} from '../../types'

const StyledImage = styled.img`
  width: 100%;
`

const BlogPost: FC<{ post: Post }> = ({ post }) => {
  return (
    <Layout>
      <article>
        <h2>{post.title}</h2>
        <StyledImage src={post.image} alt={post.title}/>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        <div>
          <TwitterButton/>
          <GitHubButton/>
        </div>
      </article>
    </Layout>
  )
}

export const getStaticProps = async ({params}) => {
  const post = await getPostBySlug(params.slug)

  return {
    props: {
      post,
    },
  }
}

export const getStaticPaths = async () => {
  return {
    paths: getAllPostsSlugs().map((slug) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  }
}

export default BlogPost
