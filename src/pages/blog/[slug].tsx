import React, {FC} from 'react'
import {readDataFile, listDataFiles} from '../../lib'
import type {Post} from '../../types'

const BlogPost: FC<{ post: Post }> = ({ post }) => {
  return (
    <>
      <h2>{post.title}</h2>
      <img src={post.image} alt={post.title}/>
      {post.chapters.map((chapter, index) => (
        <div key={index}>
          {chapter.title && (<h3>{chapter.title}</h3>)}
          <p>{chapter.content}</p>
        </div>
      ))}
      <div>
        correct my grammar
      </div>
    </>
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
