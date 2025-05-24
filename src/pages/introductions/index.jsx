import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Intro from "@/components/Pages/Introductions/Intro";
import IntroPage from "@/components/Pages/Introductions/IntroPage";
import React from "react";

const Introductions = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <IntroPage />
      <Footer />
    </>
  );
};

export default Introductions;
