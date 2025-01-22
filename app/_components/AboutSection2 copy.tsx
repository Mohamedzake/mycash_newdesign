

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import mycashaismall from "@/public/img-about.png";

import { useLocale } from "../layout";
import Link from "next/link";
// import { FaCircle } from "react-icons/fa6";

function AboutSection2() {
  const { currentLocale } = useLocale();
  console.log(currentLocale);
  const t = useTranslations("mycashai");

  return (
    <section className="relative overflow-hidden pt-1">
      <div className="relative bg-primary-30 flex justify-between gap-10  items-center bg-primary-blue overflow-hidden p-0 flex-col-reverse lg:flex-row ">
      <div className="relative lg:w-[50%] xl:w-[38%] sm:h-full  sm:aspect-square flex flex-col justify-center px-5 items-center z-10">
          <div className="absolute  bg-white aspect-square lg:hidden block h-[200%] rounded-full lg:-right-[40%] lg:top-[50%] top-0 -translate-y-1/2 z-0"></div>

          <div className="z-10 text-center ">
            <div className="flex flex-col justify-center lg:gap-y-12 lg:justify-end items-center lg:items-start text-center lg:text-end">
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4">
                {t("title")}
              </h2>
              <p
                className={`text-lg sm:text-xl lg:text-lg lg:text-center text-center w-full ${currentLocale === "ar" ? "pl-14 text-center" : "lg:text-end"
                  }  pb-6 leading-relaxed `}
              >
                {t("description_title_l1")}
                {/* {t("description_title_l2")}
                {t("description_title_l3")}
                {t("description_title_l4")} */}
              </p>
            </div>
            <div className="flex flex-col mx-10 md:mx-16 lg:mx-0 gap-4 mb-8 ">
              <div className="flex items-center justify-start  gap-4 text-start sm:text-start">
                <div className=" w-4 h-4 rounded-full bg-primary-green"></div>
              <p className="text-lg sm:text-xl lg:text-lg leading-relaxed">
                  {t("point1")}
                </p>

                {/* <FaCircle size={20} style={{
                    color: "#6EC531"
                  }}/> */}

              </div>
              <div className="flex items-center justify-start gap-4 text-start sm:text-start">
                <div className="w-4 h-4 rounded-full bg-primary-green"></div>
              <p className="text-lg sm:text-xl lg:text-lg leading-relaxed">
                  {t("point2")}
                </p>

                {/* <FaCircle size={20} style={{
                    color: "#6EC531"
                  }}/> */}
              </div>
              <div className="flex items-center justify-start gap-4 text-end sm:text-start ">
                <div className="w-4 h-4 rounded-full bg-primary-green"></div>
                <p className="text-lg sm:text-xl lg:text-lg leading-relaxed">
                  {t("point3")}
                </p>
                  
                  {/* <FaCircle size={20} style={{
                    color: "#6EC531"
                  }}/> */}
              </div>
            </div>

            <div className=" flex flex-row w-full md:flex-col lg:flex-row justify-center items-center lg:justify-start gap-2 sm:gap-4 mb-6">
            <a className="bg-primary-green text-nowrap w-44 cursor-pointer block sm:text-lg text-white px-4 py-2 rounded-full hover:bg-white hover:text-primary-green  hover:border hover:border-primary-green transition sm:w-60 lg:w-auto text-center">
                {t("get_trial")}
              </a>              
              <Link href="/solutionsai" className="border border-primary-green cursor-pointer text-primary-green font-bold sm:text-lg px-2 sm:px-4 py-2 rounded-full hover:bg-primary-green transition hover:text-white w-32 sm:w-40 lg:w-auto text-center">
                {t("learn_more")}
              </Link>

            </div>
          </div>
      </div> 

        <div className="relative max-w-full lg:max-w-[51%] xl:max-w-[58%] aspect-[145/100] w-full">
          <Image
            src={mycashaismall}
            height={1450}
            width={1000}

            className={`aspect-[145/100] min-w-full ${currentLocale === "ar" ? "transform scale-x-[-1]" : ""
              }`}
            alt="mycashai"
          />
        </div>
      
        </div>
      <div className="absolute  bg-white aspect-square lg:h-[200%]  sm:h-[100%] h-[120%]  hidden lg:block   rounded-full lg:-right-[40%] lg:top-[50%] top-0 -translate-y-1/2 z-0"></div>

    </section>
  );
}

export default AboutSection2;
