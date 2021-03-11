import React, {FC} from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {SvgBase64Img, TYPESCRIPT_ICON, REACT_ICON, NODEJS_ICON, AWS_ICON} from '../components'

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

const HeaderContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`

interface GapProps {
  width?: string
  height?: string
}

const Gap = styled.div<GapProps>`
  width: ${p => p.width ? p.width : '100%'};
  height: ${p => p.height ? p.height : '0'};
`

const Heading = styled(motion.h1)`
  font-size: 3rem;
  margin: 0;
  text-align: center;
  color: var(--dark);
`

const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  
  & > :not(:last-child) {
    margin-right: 20px;
  }
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

const StyledCircle = styled(motion.div)`
  width: 75px;
  height: 75px;
  border-radius: 50%;
  background: var(--dark);
  color: var(--light);
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: initial;
  align-items: center;
`

const Circle: FC = ({children}) => {
  return (
    <StyledCircle
      initial={{
        opacity: 0,
      }}
      variants={{
        open: {
          opacity: 1,
        },
      }}
    >
      {children}
    </StyledCircle>
  )
}

const CirclesVariants = {
  open: {
    transition: {
      staggerChildren: 0.35,
    },
  },
}

const CvContainer = styled(motion.div)`
  height: 200px;
`

const StyledLinkCv = styled(motion.div)`
  opacity: 1;
  color: var(--dark);
  font-weight: bold;
  
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Arrow = styled.div`
  width: 10px;
  height: 10px;
  border-top: 3px solid var(--dark);
  border-right: 3px solid var(--dark);
  border-bottom: 0;
  border-left: 0;

  transform: rotate(135deg);
`

const BottomArrow = styled(Arrow)`
  margin-top: -5px;
`

const LinkCv = () => {
  return (
    <CvContainer
      initial={{
        opacity: 0,
      }}
      variants={{
        open: {
          opacity: 1,
        },
      }}
    >
      <StyledLinkCv
        variants={{
          open: {
            opacity: [1, 1],
            y: [0, 25, 0],
          },
        }}
        transition={{
          duration: 2,
          loop: Infinity,
        }}
      >
        <label>Full CV</label>
        <Arrow/>
        <BottomArrow/>
      </StyledLinkCv>
    </CvContainer>
  )
}

const Home: FC = () => {
  return (
    <Container
      animate='open'
      variants={CirclesVariants}
    >
      <HeaderContainer>
        <Heading
          initial={{
            opacity: 0,
          }}
          variants={{
            open: {
              opacity: 1,
            },
          }}
        >Kryštof Matějka</Heading>
        <Gap height='20px'/>
        <IconsContainer>
          <Circle>
            <label>I love</label>
            <ReactIcon/>
          </Circle>
          <Circle>
            <label>I like</label>
            <TypescriptIcon/>
          </Circle>
          <Circle>
            <label>I do</label>
            <NodeJsIcon/>
          </Circle>
          <Circle>
            <label>&</label>
            <AwsIcon/>
          </Circle>
        </IconsContainer>
      </HeaderContainer>
      <LinkCv/>
    </Container>
  )
}

export default Home
