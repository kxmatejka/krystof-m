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

const HeaderBackground = styled.div`
  height: 500px;
  position: absolute;
  width: 100%;
  z-index: -1;
  top: 0;
  background: linear-gradient(0deg, #111c2a, #101a27, #101924, #0f1722, #0e151f, #0d131c, #0b111a, #090f17);
`

const App = ({Component, pageProps}) => {
  return (
    <>
      <GlobalStyle/>
      <Head>
        <title>Kryštof Matějka</title>
      </Head>
      <HeaderBackground/>
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
