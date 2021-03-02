import React, {FC} from 'react'
import {ArticlePreview} from '../../components/article-preview'
import {getAllPostsMeta} from '../../lib'
import {Layout} from './layout'
import type {Post} from '../../types'

const Blog: FC<{posts: Post[]}> = ({posts}) => {
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
    </Layout>
  )
}

export const getStaticProps = async () => {
  const posts = await getAllPostsMeta()

  return {
    props: {
      posts,
    },
  }
}

export default Blog
