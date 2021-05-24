import React from 'react'
import Head from 'next/head'
import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import {GlobalStyle} from '../components/global-style'

const getDefaultLang = () => {
  return (globalThis.navigator&& navigator.language === 'cs') ? 'cs' : 'en'
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          cv: {
            timelineTitles: {
              experience: 'Experience',
              courses: 'Courses',
              highSchool: 'High School',
            },
            titles: {
              programmer: 'Programmer',
              teamLeader: 'Team Leader',
            },
            '2021': {
              p1: 'Development of serverless backend in google firebase',
              p2: 'Development of apps for the flutter platform',
            },
            '2020': {
              p1: 'Design of rewrite of vareni.cz from PHP to JS and migrate from on-premise to AWS',
              p2: 'Sprint planning, mentoring the team, responsibility for the technical implementation of product requirements',
            },
            '2018': {
              p1: 'Rewrite of centrum.cz homepage from PHP to JS and migrate from on-premise to AWS',
              p2: 'Development of internal API for user account management',
            },
            '2016': {
              p1: 'Development of an embedded device for automatic measurement of electricity consumption',
            },
            highSchool: {
              p1: 'Graduated from computer networks, databases and programming',
              p2: 'Practical exam was a CMS in PHP with its own implementation of MVC',
            },
          },
        },
      },
      cs: {
        translation: {
          cv: {
            timelineTitles: {
              experience: 'Zkušenosti',
              courses: 'Kurzy',
              highSchool: 'Střední škola',
            },
            titles: {
              programmer: 'Programátor',
              teamLeader: 'Team Leader',
            },
            '2021': {
              p1: 'Vývoj serverless backendu v google firebase',
              p2: 'Vývoj aplikací pro platformu flutter',
            },
            '2020': {
              p1: 'Návrh přepisu služby vareni.cz z PHP do JS a migrace z on-premise do AWS.',
              p2: 'Organizace sprintů, mentoring týmu, odpovědnost za technickou realizaci produktových požadavků',
            },
            '2018': {
              p1: 'Přepis centrum.cz homepage z PHP do JS a migrace z on-premise do AWS',
              p2: 'Vývoj interního API pro správu uživatelských účtů',
            },
            '2016': {
              p1: 'Vývoj embedovatelného zařízení pro automatický odečet elektrické energie',
            },
            highSchool: {
              p1: 'Odmaturoval jsem z počítačových sítí, databází a programování',
              p2: 'Pro praktickou zkoušku jsem vytvořil CMS v PHP s vlastní MVC implementací',
            },
          },
        },
      },
    },
    lng: getDefaultLang(),
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
