import React, {FC} from 'react'
import styled from 'styled-components'
import {LinkBlog, SvgBase64Img, TYPESCRIPT_ICON, REACT_ICON, NODEJS_ICON, AWS_ICON} from '../components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const Background = styled.div`
  width: 420px;
  height: 420px;
  background: var(--dark);
  border-radius: 50%;
  box-shadow: 0 0 100px 0 rgba(0,0,0,0.5);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: 859px)  {
    border-radius: 0;
    width: 100%;
    height: 100%;
  }
`

const Heading = styled.h1`
  font-size: 2.6rem;
  margin: 0;
  text-align: center;
`

const Description = styled.p`
  display: flex;
  justify-content: center;
  margin: 20px 0 10px 0;
`

const TypescriptIcon = () => {
  return (
    <SvgBase64Img src={TYPESCRIPT_ICON} alt='typescript' title='typescript' height='24'/>
  )
}

const ReactIcon = () => {
  return (
    <SvgBase64Img src={REACT_ICON} alt='react' title='react' height='22'/>
  )
}

const NodeJsIcon = () => {
  return (
    <SvgBase64Img src={NODEJS_ICON} alt='nodejs' title='nodejs' height='22'/>
  )
}

const AwsIcon = () => {
  return (
    <SvgBase64Img src={AWS_ICON} alt='aws' title='aws' height='28'/>
  )
}

const Links = styled.p`
  text-align: center;
  margin: 0;
`

const Home: FC = () => {
  return (
    <Container>
      <Background>
        <Heading>Kryštof Matějka</Heading>
        <Description>
          I like&nbsp;<TypescriptIcon/>, love&nbsp;<ReactIcon/>, do&nbsp;<NodeJsIcon/>&nbsp;and also&nbsp;<AwsIcon/>
        </Description>
        <Links>
          CV | <LinkBlog>Blog</LinkBlog>
        </Links>
      </Background>
    </Container>
  )
}

export default Home
