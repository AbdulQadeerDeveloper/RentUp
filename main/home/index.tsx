import React from 'react'

import Banner from "../../components/Banner"
import OurAwards from "../../components/OurAwards"
import ExploreByLocation from "../../components/ExploreByLocation"
import OurFeaturedAgents from "../../components/OurFeaturedAgents"
import RentUPPricing from "../../components/RentUPPricing"
import Footer from "../../components/Footer"
import Header from '@/components/Navbar'
import FeaturedPropertyTypes from '@/components/FeaturedPropertyTypes'
import RecentPropertyListed from '@/components/RecentPropertyListed'
import DoYouHaveQuestions from '@/components/shared/doYouHaveQuestions'


const Home = () => {
  return (
    <>
    <Header/>
    <Banner/>
    <FeaturedPropertyTypes/>
    <RecentPropertyListed/>
    <OurAwards/>
    <ExploreByLocation/>
    <OurFeaturedAgents/>
    <RentUPPricing/>
    <DoYouHaveQuestions/>
    <Footer/>
  
    </>
  )
}

export default Home