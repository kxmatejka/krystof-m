import React from 'react'
import Head from 'next/head'
import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import {GlobalStyle} from '../components/global-style'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          title: 'welcome',
          cv: {
            '2021': {
              p1: 'Programmed firebase cloud functions for data transformation. Widgets for react, react native and flutter for video playback.',
            },
            '2020': {
              p1: 'Designed rewrite of vareni.cz from php to js (typescript, react, node.js) and migrate it from on-premise into AWS.',
              p2: 'Organized sprints, mentor team, was responsible for technical realization of product requirements.',
            },
            '2018': {
              title: 'Programmer',
              p1: 'Rewrite homepage of the centrum.cz from php to js (react, node.js) and migrate it from on-premise into AWS.',
              p2: 'Programmed an internal api in php for management users accounts and their subscriptions',
              p3: 'Serverless integration of external video encoder into in-house CMS.',
              p4: 'Browser extension for aggregation of news articles',
            },
            '2016': {
              p1: 'Programmed an embedded device in python for automatic measurement of electricity consumption.',
              p2: 'Server in node.js for saving measured data into InterSystems Caché database.',
              p3: 'Application in php for monitoring and configuration of the devices.',
            },
            highSchool: {
              p1: 'Graduated from computer networks, databases and programming.',
              p2: 'Practical exam was CMS in php with own MVC implementation.',
              p3: 'During the studies I make money by coding templates for CMS php-fusion.',
            },
          },
        },
      },
      cs: {
        translation: {
          title: 'ahoj lidi',
          cv: {
            '2021': {
              p1: 'Programoval jsem firebase cloud funkce pro transformace a dat. Widgety pro react, react native a flutter pro přehrávání videa.',
            },
            '2020': {
              p1: 'Navrhoval jsem přepis služby vareni.cz z php do js s použitím typescriptu, reactu, node.js a zmigrování z on-premise do AWS.',
              p2: 'Organizoval jsem sprinty, mentoroval tým a odpovídal za technickou realizaci produktového zadání.',
            },
            '2018': {
              title: 'Programátor',
              p1: 'Přepisoval jsem homepage centrum.cz z php do js (react, node.js) a migroval z on-premise do AWS.',
              p2: 'Programoval jsem interní api v php pro správu zákaznických účtů a předplatného.',
              p3: 'Serverless integraci externího video enkodéru s in-house CMS.',
              p4: 'Rozšíření do prohlížeče pro agregaci článků.',
            },
            '2016': {
              p1: 'Programoval jsem embedované zařízení v pythonu pro automatický odečet spotřeby elektrické energie.',
              p2: 'Server v node.js pro ukládání naměřených dat do databáze InterSystems Caché.',
              p3: 'Aplikaci v php pro monitoring a konfiguraci zařízení.',
            },
            highSchool: {
              p1: 'V roce 2014 jsem odmaturoval z počítačových sítí, databází a programování.',
              p2: 'Pro praktickou zkoušku jsem vytvořil CMS v php s vlastní MVC implementací.',
              p3: 'Během studia jsem si přivydělával kódováním šablon pro redakční systém php-funcion.',
            },
          },
        },
      },
    },
    lng: 'cs',
  })

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
