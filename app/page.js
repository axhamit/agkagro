'use client'
import React, { useState } from 'react'
import Header from './components/header/Header'
import Feature from './components/feature/Feature'
import Intro from './components/intro/Intro'
import Videosec from './components/videosec/Videosec'
import Services from './components/services/Services'
import Benefits from './components/benefits/Benefits'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'
import Queries from './components/queries/Queries'


const Page = () => {

    const [playState, setPlayState] = useState(false);

  return (
    <>
      <Header/>
      <Feature/>
      <Intro/>
      <Services/>
      <Videosec setPlayState={setPlayState}/>
      <Benefits/>
      <Queries/>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </>
  )
}

export default Page
