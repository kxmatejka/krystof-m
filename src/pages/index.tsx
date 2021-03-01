import React, {FC} from 'react'
import {ArticlePreview} from '../components/article-preview'
import {readAllDataFiles} from '../lib'
import type {Post} from '../types'

const Home: FC<{posts: Post[]}> = ({posts}) => {
  return (
    <>
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
    </>
  )
}

export const getStaticProps = async () => {
  const posts = readAllDataFiles()

  return {
    props: {
      posts,
    },
  }
}

export default Home
