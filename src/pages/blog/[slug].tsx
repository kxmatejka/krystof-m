import React from 'react'
import styled from 'styled-components'
import {useRouter} from 'next/router'
import data from '../../../data/blog.json'

interface Chapter {
  title: string
  content: string
}

interface Post {
  id: string
  title: string
  image: string
  preview: string
  chapters: Chapter[]
  tags: string[]
  created: string
  twitterThread?: string
  githubLink?: string
}

const BlogPost = () => {
  const router = useRouter()
  const {slug} = router.query

  // @ts-ignore
  const post = data[slug] as Post

  return (
    <>
      <h2>{post.title}</h2>
      <img src='http://localhost:3000/sea.jpg' alt={'x'}/>
      <h3>fafwaf</h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      <h3>fawfafafw</h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      <div>
        correct my grammar
      </div>
    </>
  )
}

export const getServerSideProps = async ({params}) => {
  const slug = params.slug
  return {
    props: { slug },
  }
}

export default BlogPost
