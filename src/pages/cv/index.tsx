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
          <p>Momentálně vyvíjím software pro distribuci a konzumaci video obsahu pod značkou <strong>Tivio</strong> v rámci firmy <strong>nangu.TV</strong>.</p>
          <p>To v praxi obnáší tvorbu firebase cloud funkcí pro scraping a transformaci dat a tvorbu UI widgetů pro React, React Native a Flutter.</p>
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
          <p>Do roku 2020 jsem pracoval jako team-leader v prestižním mediálním domu <strong>Economia a.s.</strong></p>
          <p>Organizoval jsem sprinty, mentoroval tým a odpovídal za technickou realizaci produktového zadání.</p>
          <p>Navrhoval jsem přepis služby <strong>vareni.cz</strong> z php do js. Nová aplikace byla napsána v Typescriptu s použitím Reactu na FE a node.js na BE. Infrastruktura byla postavena v AWS.</p>
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
          <p>Do roku 2018 jsem pracoval jako programátor v <strong>Economia a.s.</strong></p>
          <p>První projekt na kterém jsem pracoval bylo interní api v php pro správu zákaznických účtů a předplatného.</p>
          <p>Dále jsem se účastnil přepisu homepage portálu <strong>centrum.cz</strong> z php do js. Kde byl použit React pro FE a node.js pro BE. Infrastruktura byla postavena v AWS.</p>
          <p>V mezičase jsem pracoval také na rozšíření do prohlížeče a integraci video enkodéru třetí strany do in-house CMS pomocí serverless architektury.</p>
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
          <p>Ve své první práci pro firmu <strong>WS trends s.r.o</strong> jsem programoval embedované zařízení v jazyku python pro automatický odečet spotřeby elektrické energie.</p>
          <p>Pro ukládání naměřených dat jsem vytvořil server v node.js, který přeukládal data do databáze InterSystems Caché.</p>
          <p>Pro konfiguraci a monitoring zařízení jsem napsal aplikaci v php.</p>
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
          <p>V roce 2014 jsem maturoval na střední škole zaměřené na počítačové sítě, databáze a programování. V rámci praktické zkoušky jsem naprogramoval CMS s vlatní MVC implementací v jazyce php.</p>
          <p>Během studia jsem si přividělával kódováním šablon pro redakční systém php&#8209;funsion.</p>
        </TimeMarkDescription>
      </TimeMarkContainer>
    </Container>
  )
}

export default Cv
