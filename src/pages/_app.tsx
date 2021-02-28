import React from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import {GlobalStyle} from '../components/global-style'
import {Header} from '../components/header'
import {LinkIndex} from '../components'

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 20px;
`

const Container = styled.div`
  max-width: 860px;
  margin: 0;
  padding: 0;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`

const App = ({Component, pageProps}) => {
  return (
    <>
      <GlobalStyle/>
      <Head>
        <title>xxx</title>
      </Head>
      <PageContainer>
        <Container>
          <LinkIndex>
            <Header text='self-taught programmer from Eastern Europe explains things in poor English'/>
          </LinkIndex>
          <Component {...pageProps} />
        </Container>
      </PageContainer>
    </>
  )
}

export default App
