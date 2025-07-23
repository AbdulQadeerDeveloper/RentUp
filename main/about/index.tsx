import React from 'react'
import Footer from "../../components/Footer"
import Header from '@/components/Navbar'
import AboutPage from '@/components/about'
import DoYouHaveQuestions from '@/components/shared/doYouHaveQuestions'


const About = () => {
  return (
    <>
    <Header/>
   <AboutPage/>
   <DoYouHaveQuestions/>
    <Footer/>
  
    </>
  )
}

export default About