import React, {FC} from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {ReactIcon, TypescriptIcon, NodeJsIcon, AwsIcon, PhpIcon, PythonIcon, FirebaseIcon, FlutterIcon} from '../../components'
import {useTranslation} from 'react-i18next'

const TIMELINE_WIDTH = 120

const Container = styled.div`
  padding: 50px;
  max-width: 700px;
`

const Heading = styled.h2`
  color: #555555;
  font-size: 1.2rem;

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
  }

  & > img:not(:last-child) {
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

const TransParek = () => {
  const {t, i18n} = useTranslation()

  return (
    <div>
      <button onClick={() => i18n.changeLanguage('en')}>en</button>
      <button onClick={() => i18n.changeLanguage('cs')}>cs</button>
    </div>
  )
}

const T: FC<{code: string, noEscape?: boolean}> = ({code, noEscape}) => {
  const {t} = useTranslation()

  return (noEscape)
    ? <span dangerouslySetInnerHTML={{__html: t(code)}}/>
    : t(code)
}

const Cv = () => {
  return (
    <Container>
      <TransParek/>
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
          <p><strong>Tivio</strong></p>
          <p><T code='cv.2021.p1'/></p>
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
          <p><strong>Economia a.s. - Team leader</strong></p>
          <p><T code='cv.2020.p1'/></p>
          <p><T code='cv.2020.p2'/></p>
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
          <p><strong>Economia a.s. - <T code='cv.2018.title'/></strong></p>
          <p><T code='cv.2018.p1'/></p>
          <p><T code='cv.2018.p2'/></p>
          <p><T code='cv.2018.p3'/></p>
          <p><T code='cv.2018.p4'/></p>
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
          <p><strong>WS trends s.r.o.</strong></p>
          <p><T code='cv.2016.p1'/></p>
          <p><T code='cv.2016.p2'/></p>
          <p><T code='cv.2016.p3'/></p>
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
          <p><strong>Střední průmyslová škola Varnsdorf</strong></p>
          <p><T code='cv.highSchool.p1'/></p>
          <p><T code='cv.highSchool.p2'/></p>
          <p><T code='cv.highSchool.p3'/></p>
        </TimeMarkDescription>
      </TimeMarkContainer>
    </Container>
  )
}

export default Cv
