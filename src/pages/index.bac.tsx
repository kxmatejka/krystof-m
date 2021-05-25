import React, {FC, useEffect, useState} from 'react'
import styled from 'styled-components'
import {motion, useAnimation, AnimationControls} from 'framer-motion'
import {SvgBase64Img, TYPESCRIPT_ICON, REACT_ICON, NODEJS_ICON, AWS_ICON} from '../components'

const useWindowDimensions = () => {
  const width = window.innerWidth
  const height = window.innerHeight

  // td add resize event

  return {
    width,
    height,
  }
}

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
  overflow: hidden;
`

const HeaderContainer = styled(motion.div)`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  z-index: 1;
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
  color: var(--light);
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
  color: var(--light);
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: initial;
  align-items: center;
`

const Circle: FC<{animate: AnimationControls}> = ({children, animate}) => {
  return (
    <StyledCircle
      initial={{
        opacity: 0,
      }}
      animate={animate}
    >
      {children}
    </StyledCircle>
  )
}

const StyledLinkCv = styled(motion.div)`
  opacity: 1;
  color: var(--dark);
  font-weight: bold;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  background: var(--light);
  clip-path: circle(0px at 960px 1028px);
  width: 100vw;
  height: 100vh;

  position: absolute;
  z-index: 2;
  
  & > label {
    margin-bottom: 20px;
  }
`

const Arrow = styled(motion.div)`
  width: 10px;
  height: 10px;
  border-top: 3px solid var(--dark);
  border-right: 3px solid var(--dark);
  border-bottom: 0;
  border-left: 0;

  transform: rotate(-45deg);
`

const InnerLinkCvContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
`

const LinkCv: FC<{animate: AnimationControls, animateLabel: AnimationControls, animateArrow: AnimationControls, onClick: () => void}> = ({animate, animateLabel, animateArrow, onClick}) => {
  return (
    <StyledLinkCv
      animate={animate}
      onTap={onClick}
    >
      <InnerLinkCvContainer>
        <motion.div
          animate={animateArrow}
        >
          <Arrow/>
        </motion.div>
        <Gap height='10px'/>
        <motion.label
          animate={animateLabel}
        >Full CV</motion.label>
      </InnerLinkCvContainer>
    </StyledLinkCv>
  )
}

const CircleBackground = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
  width: 100vw;
  height: 100vh;
  background: var(--dark);
  clip-path: circle(0px at 0px 0px);
`

const opacityAnimationConfig = {
  opacity: 1,
}

const opacityAnimationOverride = {
  duration: 0.35,
}

const Home: FC = () => {
  //const {width, height} = useWindowDimensions()
  const backgroundAnimation = useAnimation()
  const headerAnimation = useAnimation()
  const iconReactAnimation = useAnimation()
  const iconTsAnimation = useAnimation()
  const iconNodejsAnimation = useAnimation()
  const iconAwsAnimation = useAnimation()
  const cvLinkAnimation = useAnimation()
  const clickCvLinkLabelAnimation = useAnimation()
  const cvLinkArrowAnimation = useAnimation()

  const runInitialAnimation = async () => {
    await backgroundAnimation.start({
      background: 'var(--dark)',
      clipPath: 'circle(2500px at 0px 0px)',
    }, {
      duration: 1,
    })

    await headerAnimation.start(opacityAnimationConfig, opacityAnimationOverride)
    await iconReactAnimation.start(opacityAnimationConfig, opacityAnimationOverride)
    await iconTsAnimation.start(opacityAnimationConfig, opacityAnimationOverride)
    await iconNodejsAnimation.start(opacityAnimationConfig, opacityAnimationOverride)
    await iconAwsAnimation.start(opacityAnimationConfig, opacityAnimationOverride)

    await cvLinkAnimation.start({
      clipPath: 'circle(100px at 960px 1006px)',
    })

    // eslint-disable-next-line no-constant-condition
    while (1) {
      await cvLinkArrowAnimation.start({
        y: -10,
      }, {
        duration: 1,
      })
      await cvLinkArrowAnimation.start({
        y: 0,
      }, {
        duration: 1,
      })
    }
  }

  const onClickCv = async () => {
    await Promise.all([
      clickCvLinkLabelAnimation.start({
        opacity: 0,
      }, {
        duration: 0.3,
      }),
      cvLinkArrowAnimation.start({
        opacity: 0,
      }, {
        duration: 0.3,
      }),
      cvLinkAnimation.start({
        clipPath: 'circle(2000px at 960px 1006px)',
      }, {
        duration: 1,
      }),
    ])
  }

  useEffect(() => {
    runInitialAnimation()
  }, [])

  return (
    <Container>
      <CircleBackground
        animate={backgroundAnimation}
      />
      <HeaderContainer>
        <Heading
          initial={{
            opacity: 0,
          }}
          animate={headerAnimation}
        >Kryštof Matějka</Heading>
        <Gap height='20px'/>
        <IconsContainer>
          <Circle animate={iconReactAnimation}>
            <label>I love</label>
            <Gap height='5px'/>
            <ReactIcon/>
          </Circle>
          <Circle animate={iconTsAnimation}>
            <label>I like</label>
            <Gap height='5px'/>
            <TypescriptIcon/>
          </Circle>
          <Circle animate={iconNodejsAnimation}>
            <label>I do</label>
            <Gap height='5px'/>
            <NodeJsIcon/>
          </Circle>
          <Circle animate={iconAwsAnimation}>
            <label>and also</label>
            <Gap height='5px'/>
            <AwsIcon/>
          </Circle>
        </IconsContainer>
      </HeaderContainer>
      <LinkCv
        animate={cvLinkAnimation}
        animateLabel={clickCvLinkLabelAnimation}
        animateArrow={cvLinkArrowAnimation}
        onClick={() => onClickCv()}
      />
    </Container>
  )
}

export default Home
