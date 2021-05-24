import React, {FC} from 'react'
import styled from 'styled-components'
import {Footer, LinkBlog} from '../../components'
import {Header} from '../../components/header'

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 20px;
  background: var(--dark);
  min-height: 100%;
`

const Container = styled.div`
  max-width: 860px;
  margin: 0;
  padding: 0;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`

export const Layout: FC = ({children}) => {
  return (
    <PageContainer>
      <Container>
        <LinkBlog>
          <Header text='self-taught programmer from Eastern Europe explains things in poor English'/>
        </LinkBlog>
        {children}
        <Footer/>
      </Container>
    </PageContainer>
  )
}

export default () => null
