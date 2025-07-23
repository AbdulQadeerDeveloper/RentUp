import React from "react";
import Footer from "../../components/Footer";
import Header from "@/components/Navbar";
import ContactPage from "@/components/contact";
import DoYouHaveQuestions from "@/components/shared/doYouHaveQuestions";


const Contact = () => {
  return (
    <>
      <Header />
      <ContactPage />
      <DoYouHaveQuestions/>
      <Footer />
    </>
  );
};

export default Contact;
