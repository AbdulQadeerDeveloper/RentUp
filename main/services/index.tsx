import React from 'react'
import Footer from "../../components/Footer"
import Header from '@/components/Navbar'
import ServicesPage from '@/components/services'
import FeaturedPropertyTypes from '@/components/shared/featureData'
import DoYouHaveQuestions from '@/components/shared/doYouHaveQuestions'


const Services = () => {
  return (
    <>
    <Header/>
    <ServicesPage/>
    <FeaturedPropertyTypes/>
    <DoYouHaveQuestions/>
    <Footer/>
  
    </>
  )
}

export default Services