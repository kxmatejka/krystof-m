import React, {FC} from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {ReactIcon, TypescriptIcon, NodeJsIcon, AwsIcon, PhpIcon, PythonIcon, FirebaseIcon, FlutterIcon} from '../../components'

const TIMELINE_WIDTH = 120

const Container = styled.div`
  padding: 50px;
  max-width: 700px;
`

const Heading = styled.h2`
  color: #555555;
  font-size: 1.0rem;

  width: ${TIMELINE_WIDTH}px;
  text-align: center;
`

const StyledTimeMark = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  
  width: ${TIMELINE_WIDTH}px;

  margin-top: 10px;
  padding: 10px 0 10px 0;
  border-radius: 5px;

  font-size: 1.2rem;
  text-align: center;
  font-weight: bold;
  color: #555555;
  border: 2px #d5d5d5 solid;
  //box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
`

const StyledTimeMarkChildern = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  width: ${TIMELINE_WIDTH}px;

  & > img {
    height: 18px;
    margin-right: 5px;
  }
`

const TimeMark: FC<{year: number|string}> = ({year, children }) => {
  return (
    <div>
      <StyledTimeMark>
        {year}
      </StyledTimeMark>
      <StyledTimeMarkChildern>
        {children}
      </StyledTimeMarkChildern>
    </div>
  )
}

const Description = () => {
  return (
    <div>

    </div>
  )
}

const TimelineContainer = styled.div`
  width: ${TIMELINE_WIDTH}px;
  display: flex;
  justify-content: center;
  
  flex-grow: 1;
`

const StyledTimeline = styled.div<{height?: string}>`
  width: 2px;
  height: ${p => p.height ? p.height : 'auto'};
  background: #d5d5d5;
`

const Timeline: FC<{height?: string}> = ({height}) => {
  return (
    <TimelineContainer>
      <StyledTimeline height={height} />
    </TimelineContainer>
  )
}

const TimeMarkContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const TimeMarkDescription = styled.div`
  margin-left: 20px;
  margin-top: 25px;
  margin-bottom: 50px;
  
  & > p {
    margin: 0 0 15px 0;
  }
`

const TimeMarkLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const Cv = () => {
  return (
    <Container>
      <Heading>Experience</Heading>
      <Timeline height='30px'/>
      <TimeMarkContainer>
        <TimeMarkLeftContainer>
          <TimeMark year='2021'>
            <ReactIcon/>
            <TypescriptIcon/>
            <FlutterIcon/>
            <FirebaseIcon/>
          </TimeMark>
          <Timeline/>
        </TimeMarkLeftContainer>
        <TimeMarkDescription>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </TimeMarkDescription>
      </TimeMarkContainer>
      <TimeMarkContainer>
        <TimeMarkLeftContainer>
          <TimeMark year='2020'>
            <ReactIcon/>
            <TypescriptIcon/>
            <NodeJsIcon/>
            <AwsIcon/>
          </TimeMark>
          <Timeline/>
        </TimeMarkLeftContainer>
        <TimeMarkDescription>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </TimeMarkDescription>
      </TimeMarkContainer>
      <TimeMarkContainer>
        <TimeMarkLeftContainer>
          <TimeMark year='2018'>
            <ReactIcon/>
            <NodeJsIcon/>
            <AwsIcon/>
          </TimeMark>
          <Timeline/>
        </TimeMarkLeftContainer>
        <TimeMarkDescription>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </TimeMarkDescription>
      </TimeMarkContainer>
      <TimeMarkContainer>
        <TimeMarkLeftContainer>
          <TimeMark year='2016'>
            <PhpIcon/>
            <PythonIcon/>
            <NodeJsIcon/>
          </TimeMark>
          <Timeline/>
        </TimeMarkLeftContainer>
        <TimeMarkDescription>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </TimeMarkDescription>
      </TimeMarkContainer>
      <Heading>High School</Heading>
      <Timeline height='30px'/>
      <TimeMarkContainer>
        <TimeMarkLeftContainer>
          <TimeMark year='2014'>
            <PhpIcon/>
          </TimeMark>
          <Timeline/>
        </TimeMarkLeftContainer>
        <TimeMarkDescription>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </TimeMarkDescription>
      </TimeMarkContainer>
    </Container>
  )
}

export default Cv
