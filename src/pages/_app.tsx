import React from 'react'
import {createGlobalStyle} from 'styled-components'
import {GlobalStyle} from '../components/global-style'

const SpringApp = ({Component, pageProps}) => {
  return (
    <> 
      <GlobalStyle/>
      <Component {...pageProps} />
    </>
  )
}

export default SpringApp
