
"use client";
import React from "react";
import Header from "../_components/Header";

import OurPartners from "../_components/OurPartners";
import OurPartners1 from "../_components/OurPartners1";
import OurPartners2 from "../_components/OurPartners2";
import WhyMyCash from "../_components/WhyMyCash";
import LandingForm from "../_components/LandingForm";
import WhyChooseMyCash from "../_components/WhyChooseMyCash";

const LandingPage = () => {
  return (
    <section className=" ">
        <Header />
        <LandingForm />
        <WhyMyCash />
        <WhyChooseMyCash />
        <OurPartners />
        <OurPartners1 /> 
        <OurPartners2 />
    </section>
  );
};

export default LandingPage;
