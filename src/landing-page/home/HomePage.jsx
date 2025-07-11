import React from 'react'
import Navbar from '../Navbar'
import Hero from './Hero'
import Awards from './Awards'
import Stats from './Stats'
import Education from './Education'
import Openaccount from '../Openaccount'
// import Footer from '../Footer'

const HomePage = () => {
  return (
     <>
      <Navbar />
      <Hero />
      <Awards />
      <Stats />
      <Education />
      <Openaccount/>
      {/* <Footer /> */}
    </>
  )
}

export default HomePage