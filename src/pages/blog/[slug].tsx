import React, {FC} from 'react'
import styled from 'styled-components'
import {readDataFile, listDataFiles} from '../../lib'
import {Layout} from './layout'
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
        {post.chapters.map((chapter, index) => (
          <div key={index}>
            {chapter.title && (<h3>{chapter.title}</h3>)}
            <p>{chapter.content}</p>
          </div>
        ))}
        <div>
        correct my grammar
        </div>
      </article>
    </Layout>
  )
}

export const getStaticProps = async ({params}) => {
  const post = readDataFile(params.slug)

  return {
    props: {
      post,
    },
  }
}

export const getStaticPaths = async () => {
  return {
    paths: listDataFiles().map((path) => ({
      params: {
        slug: path,
      },
    })),
    fallback: false,
  }
}

export default BlogPost
