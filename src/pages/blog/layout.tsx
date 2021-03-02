import React, {FC} from 'react'
import styled from 'styled-components'
import {Footer, LinkBlog} from '../../components'
import {Header} from '../../components/header'

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 20px;
  background: var(--dark);
`

const Container = styled.div`
  max-width: 860px;
  margin: 0;
  padding: 0;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`

const HeaderBackground = styled.div`
  height: 500px;
  position: absolute;
  width: 100%;
  z-index: -1;
  top: 0;
  background: linear-gradient(0deg, #111c2a, #101a27, #101924, #0f1722, #0e151f, #0d131c, #0b111a, #090f17);
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
