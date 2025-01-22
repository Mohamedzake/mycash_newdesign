import Image from "next/image";
import React from "react";
import { useTranslations } from "use-intl";

import google_app from "@/public/google_app.png";
import logo_white from "@/public/logo_white.png";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import Copyright from "./Copyright";

const Footer = () => {
  const t = useTranslations("footer");
  return (
    <>
    
    <section className="bg-primary-blue">
      <div className="m-auto container flex flex-col gap-y-6 lg:flex lg:flex-row text-base lg:justify-around  py-10 text-white text-center lg:text-start">


      <div className="lg:w-4/12  flex flex-col items-center lg:items-start justify-between">
        <Image src={logo_white} alt="White MyCash Logo" className=" pb-6 " />

        <p className="text-1xl w-[80%] lg:me-auto pb-4 ">{t("footer_title")}</p>

        <div className="flex justify-center lg:justify-end gap-4 ">
          <div className="border-2 border-white p-1.5 rounded-md">
            <FaFacebook />
          </div>
          <div className="border-2 border-white p-1.5 rounded-md">
            <FaLinkedin />
          </div>
          <div className="border-2 border-white p-1.5 rounded-md">
            <FaXTwitter />
          </div>
          <div className="border-2 border-white p-1.5 rounded-md">
            <BsInstagram />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-2 ">
        <h2 className="text-primary-green font-bold pb-2">{t("mycash")}</h2>
        <h3>{t("about_us")}</h3>
        <h3>{t("our_vision_mission")}</h3>
        <h3>{t("our_partners")}</h3>
        <h3>{t("packages")}</h3>
        <h3>{t("contact_us")}</h3>
      </div>

      <div className="flex flex-col gap-y-2 ">
        <h2 className="text-primary-green font-bold pb-2">{t("solutions")}</h2>
        <h3>{t("pos_solutions")}</h3>
        <h3>{t("payments_solutions")}</h3>
        <h3>{t("mycash_ai")}</h3>
      </div>





      <div className="flex flex-col gap-y-4 ">
        <p className=" lg:text-start">{t("download_app")}</p>
        <Image src={google_app} alt="google icon" className="m-auto lg:m-0 lg:me-auto"/>
      </div>
      </div>



    </section>
      <Copyright />
    </>
  );
};

export default Footer;
