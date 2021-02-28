import React from 'react'
import styled from 'styled-components'
import {ArticlePreview} from './article-preview'

const Container = styled.div`
  padding: 50px;
`

export default {
  title: 'ArticlePreview',
}

export const Default = () => {
  return (
    <Container>
      <ArticlePreview
        title='Very long chicken'
        image='http://localhost:3000/sea.jpg'
        preview="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        tags={['typescript', 'front-end', 'react', 'styled-components']}
        date='3 days ago'
      />
    </Container>
  )
}
