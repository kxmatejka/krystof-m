import React from 'react'
import Head from 'next/head'
import {GlobalStyle} from '../components/global-style'

const App = ({Component, pageProps}) => {
  return (
    <>
      <GlobalStyle/>
      <Head>
        <title>Kryštof Matějka</title>
      </Head>
      <Component {...pageProps}/>
    </>
  )
}

export default App
