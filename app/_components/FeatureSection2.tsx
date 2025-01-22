import React from "react";
import Image from "next/image";
import img1 from "@/public/div.relative1.png";
import img2 from "@/public/div.relative2.png";
import img3 from "@/public/div.relative3.png";
import { useTranslations } from "next-intl";
import { TripleHeadings } from "./TripleHeadings";



const FeaturesSection2: React.FC = () => {
  const t = useTranslations("aboutus");
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-2 sm:px-8">
        {/* Heading Section */}
        <TripleHeadings
          title={t("special_features")}
          description={t("title")}
        />

        {/* Feature Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14 ">

          {/* Feature Image */}
          <div className="flex justify-center items-center bg-slate-100 rounded-2xl  order-2 lg:order-1">
            <div className="relative w-full max-w-2xl">
              <Image
                src={img1}
                alt="System View"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Feature Content */}
          <div className="flex flex-col justify-center items-center lg:items-start p-2 md:p-6 order-1 lg:order-2 ">
            <div className="text-primary-green text-4xl font-bold mb-4">01</div>
            <h3 className="text-center text-2xl lg:text-3xl lg:text-start font-semibold text-gray-900 mb-4">
              {t("des_title1")}
            </h3>
            <p className="text-[#202020] text-sm lg:text-base font-medium mb-6 text-center lg:text-start">
              {t("des_subtitle1")}
            </p>
            <p className="text-[#202020] text-sm lg:text-base font-medium  mb-6 text-center lg:text-start ">
              {t("des_subtitle2")}
            </p>

            {/* <button className="bg-primary-green text-white rounded-full px-6 py-3 font-bold text-base hover:bg-primary-green transition duration-300">
              {t("get_trial")}
            </button> */}
          </div>

        </div>

        {/* Additional Sections (Feature 2 and 3) */}


        {/* Feature 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-2 pt-10">
          {/* Feature Image */}


          {/* Feature Content */}
          <div className="flex flex-col justify-center items-center lg:items-start p-2 md:p-8 md:order-1 ">
            <div className="text-primary-green text-4xl font-bold mb-4">02</div>
            <h3 className="text-center text-2xl lg:text-3xl lg:text-start font-semibold text-gray-900 mb-4">
              {t("des_title2")}
            </h3>
            <p className="text-[#202020] text-sm lg:text-base font-medium mb-6 text-center lg:text-start">
              {t("des_subtitle3")}
            </p>
            <p className="text-[#202020] text-sm lg:text-base font-medium  mb-6 text-center lg:text-start ">
              {t("des_subtitle4")}
            </p>
            {/* <button className="bg-primary-green text-white rounded-full px-6 py-3 font-bold text-base hover:bg-primary-green transition duration-300">
              {t("get_trial")}
            </button> */}
          </div>


          <div className="flex justify-center items-center bg-slate-100 rounded-2xl md:order-2">
            <div className="relative w-full max-w-2xl ">
              <Image
                src={img2}
                alt="System View"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14 pt-10">

          {/* Feature Image */}
          <div className="flex justify-center items-center bg-slate-100 rounded-2xl order-2 lg:order-1 ">
            <div className="relative w-full max-w-2xl">
              <Image
                src={img3}
                alt="System View"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Feature Content */}
          <div className="flex flex-col justify-center items-center lg:items-start p-2  order-1 lg:order-2">
            <div className="text-primary-green text-4xl font-bold mb-4">03</div>
            <h3 className="text-end text-2xl lg:text-3xl lg:text-end font-semibold text-gray-900 mb-4">
              {t("des_title3")}
            </h3>
            <p className="text-[#202020] text-sm lg:text-base font-medium  mb-6 text-center lg:text-end ">
              {t("des_subtitle5")}
            </p>
            <p className="text-[#202020] text-sm lg:text-base font-medium  mb-6 text-center lg:text-end ">
              {t("des_subtitle6")}
            </p>
            <p className="text-[#202020] text-sm lg:text-base font-medium  mb-6 text-center lg:text-end ">
              {t("des_subtitle7")}
            </p>
            <p className="text-[#202020] text-sm lg:text-base font-medium  mb-6 text-center lg:text-end  ">
              {t("des_subtitle8")}
            </p>
            {/* <button className="bg-primary-green text-white rounded-full px-6 py-3 font-bold text-base hover:bg-primary-green transition duration-300">
              {t("get_trial")}
            </button> */}
          </div>


        </div>
        
      </div>
    </section>
  );
};

export default FeaturesSection2;
