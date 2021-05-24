import React, {FC} from 'react'
import styled from 'styled-components'
import {
  ReactIcon,
  TypescriptIcon,
  NodeJsIcon,
  AwsIcon,
  PhpIcon,
  PythonIcon,
  FirebaseIcon,
  FlutterIcon,
} from '../../components'
import {useTranslation} from 'react-i18next'

const TIMELINE_WIDTH = 130

const Container = styled.div`
  padding: 50px;
  max-width: 700px;

  @media only screen and (max-width: 600px) {
    padding: 30px;
  }

  @media only screen and (max-width: 500px) {
    padding: 20px;
  }

  @media only screen and (max-width: 400px) {
    padding: 15px;
  }
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

const TimeMark: FC<{ year: number | string }> = ({year, children}) => {
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

const StyledTimeline = styled.div<{ height?: string }>`
  width: 2px;
  height: ${p => p.height ? p.height : 'auto'};
  background: #d5d5d5;
`

const Timeline: FC<{ height?: string }> = ({height}) => {
  return (
    <TimelineContainer>
      <StyledTimeline height={height}/>
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

const TransContainer = styled.div`
  position: fixed;
  right: 0;
`

const ImgButton = styled.img<{ inactive?: boolean }>`
  padding: 5px;
  cursor: pointer;
  opacity: ${({inactive}) => (inactive) ? 0.35 : 1};

  &:hover {
    opacity: 1;
  }
`

const TransParek = () => {
  const {i18n} = useTranslation()

  return (
    <TransContainer>
      <ImgButton
        src='/icons/uk.svg' alt='en' title='english'
        onClick={() => i18n.changeLanguage('en')}
        width={35}
        inactive={(i18n.language != 'en')}
      />
      <ImgButton
        src='/icons/cs.svg' alt='cs' title='czech'
        onClick={() => i18n.changeLanguage('cs')}
        width={27}
        inactive={(i18n.language != 'cs')}
      />
    </TransContainer>
  )
}

const CompanyLink = styled.a`
  font-size: 1.1rem;
  color: #3673d1;
  font-weight: bold;

  &:hover {
    color: #0b439a;
  }
`

const T: FC<{ code: string, noEscape?: boolean }> = ({code, noEscape}) => {
  const {t} = useTranslation()

  return (noEscape)
    ? <span dangerouslySetInnerHTML={{__html: t(code)}}/>
    : t(code)
}

const Cv = () => {
  return (
    <>
      <TransParek/>
      <Container>
        <Heading><T code='cv.timelineTitles.experience'/></Heading>
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
            <p>
              <CompanyLink
                href='https://www.nangu.tv/'
                target='_blank'
              >Nangu.TV - <T code='cv.titles.programmer'/></CompanyLink>
            </p>
            <p><T code='cv.2021.p1'/></p>
            <p><T code='cv.2021.p2'/></p>
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
            <p>
              <CompanyLink
                href='https://www.economia.cz/'
                target='_blank'
              >Economia a.s. - <T code='cv.titles.teamLeader'/></CompanyLink>
            </p>
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
            <p>
              <CompanyLink
                href='https://www.economia.cz/'
                target='_blank'
              >Economia a.s. - <T code='cv.titles.programmer'/></CompanyLink>
            </p>
            <p><T code='cv.2018.p1'/></p>
            <p><T code='cv.2018.p2'/></p>
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
            <p><CompanyLink href='http://www.wstrends.cz' target='_blank'>WS trends s.r.o. - <T
              code='cv.titles.programmer'/></CompanyLink></p>
            <p><T code='cv.2016.p1'/></p>
          </TimeMarkDescription>
        </TimeMarkContainer>
        <Heading><T code='cv.timelineTitles.courses'/></Heading>
        <Timeline height='30px'/>
        <TimeMarkContainer>
          <TimeMarkLeftContainer>
            <TimeMark year='2021'>
              <ReactIcon/>
            </TimeMark>
            <Timeline/>
          </TimeMarkLeftContainer>
          <TimeMarkDescription>
            <p><CompanyLink href='https://epicreact.dev/' target='_blank'>Epic React</CompanyLink></p>
            <p>Epic React by Kent C. Dodds</p>
          </TimeMarkDescription>
        </TimeMarkContainer>
        <TimeMarkContainer>
          <TimeMarkLeftContainer>
            <TimeMark year='2018'>
              <AwsIcon/>
            </TimeMark>
            <Timeline/>
          </TimeMarkLeftContainer>
          <TimeMarkDescription>
            <p><CompanyLink
              href='https://linuxacademy.com/'
              target='_blank'>Linux academy</CompanyLink></p>
            <p>AWS DevOps Engineer</p>
          </TimeMarkDescription>
        </TimeMarkContainer>
        <Heading><T code='cv.timelineTitles.highSchool'/></Heading>
        <Timeline height='30px'/>
        <TimeMarkContainer>
          <TimeMarkLeftContainer>
            <TimeMark year='2014'>
              <PhpIcon/>
            </TimeMark>
            <Timeline/>
          </TimeMarkLeftContainer>
          <TimeMarkDescription>
            <p>
              <CompanyLink
                href='https://www.skolavdf.cz/'
                target='_blank'>Střední průmyslová škola Varnsdorf</CompanyLink>
            </p>
            <p><T code='cv.highSchool.p1'/></p>
            <p><T code='cv.highSchool.p2'/></p>
          </TimeMarkDescription>
        </TimeMarkContainer>
      </Container>
    </>
  )
}

export default Cv
