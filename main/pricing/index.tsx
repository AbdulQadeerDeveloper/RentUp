import React from 'react'
import Footer from "../../components/Footer"
import Header from '@/components/Navbar'
import RentUPPricing from '@/components/RentUPPricing'
import PakagePage from '@/components/pages/pakage'
import DoYouHaveQuestions from '@/components/shared/doYouHaveQuestions'



const Package = () => {
  return (
    <>
    <Header/>
    <PakagePage/>
    <RentUPPricing/>
    <DoYouHaveQuestions/>
    <Footer/>
  
    </>
  )
}

export default Package