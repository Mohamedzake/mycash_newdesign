"use client";
import React from "react";
import Header from "../_components/Header";

import OurPartners from "../_components/OurPartners";
import OurPartners1 from "../_components/OurPartners1";
import OurPartners2 from "../_components/OurPartners2";
import WhyMyCash from "../_components/WhyMyCash";
import LandingForm from "../_components/LandingForm";
import WhyChooseMyCash from "../_components/WhyChooseMyCash";
import CompanyLogos from "../_components/CompanyLogos";
import CompanyLogos2 from "../_components/CompanyLogos2";
import CompanyLogos3 from "../_components/CompanyLogos3";

const LandingPage = () => {
  return (
    <section className=" ">
      <Header />
      <LandingForm />
      <WhyMyCash />
      <WhyChooseMyCash />{" "}
      <div className=" flex justify-center items-center flex-col ">
        <CompanyLogos />
        <CompanyLogos2 />
        <CompanyLogos3 />
      </div>
      {/* <OurPartners />
      <OurPartners1 />
      <OurPartners2 /> */}
    </section>
  );
};

export default LandingPage;
