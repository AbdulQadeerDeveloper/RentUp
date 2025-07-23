import React from 'react'
import Footer from "../../components/Footer"
import Header from '@/components/Navbar'
import BlogPage from '@/components/BlogPage'
import PropertyListed from '@/components/pages/blogListing'
import DoYouHaveQuestions from '@/components/shared/doYouHaveQuestions'



const Blog = () => {
  return (
    <>
    <Header/>
   <BlogPage/>
   <PropertyListed/>
   <DoYouHaveQuestions/>
    <Footer/>
  
    </>
  )
}

export default Blog