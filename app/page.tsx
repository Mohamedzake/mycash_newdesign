"use client";
import React from "react";

// import Brands from "./_components/Brands";
import Hero from "./_components/Hero";
import Solutions from "./_components/Solutions";
import Carousel1 from "./_components/Carousel1";
import AboutSection2 from "./_components/AboutSection2";
import Agreements from "./_components/Agreements";
import Promotion2 from "./_components/Promotion2";
import ContactUs from "./_components/ContactUs";
import Footer from "./_components/Footer";
// import AdvancedSolutions from "./_components/AdvancedSolutions";
// import Carousel from "./_components/Carousel1";
// import FeaturesSection2 from "./_components/FeatureSection2";
export default function Home() {
  return (
    <>
      <main className="">
        <Hero />
        {/* <Brands /> */}
        <Solutions />
        <Carousel1 />
        {/* <Slider /> */}
        {/* <FeaturesSection2 /> */}
        <AboutSection2 />
        <Agreements />
        <Promotion2 />
        <ContactUs />
        <Footer />
      </main>
    </>
  );
}
