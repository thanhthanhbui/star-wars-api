import React from 'react'
import People from './People'
import { Image } from 'semantic-ui-react'
import VideoBackground from './VideoBackground'

const Home = () => {
  return (
    <>
      <div style={{ zIndex: -1, textAlign: 'center' }}>
        <Image src='http://imageshack.com/a/img922/3783/oyvsRd.png' />
        <People />
      </div>
      <VideoBackground />
    </>
  )
}

export default Home