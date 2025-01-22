import React from "react";
// import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { LuPackageCheck } from "react-icons/lu";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

import carousel from "@/public/carousel.png";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { TripleHeadings } from "./TripleHeadings";
import Link from "next/link";
const Carousel = () => {
  const t = useTranslations("carousel");
  return (
    <section className="m-auto flex flex-col px-3 lg:px-40">
      <TripleHeadings
        title={t("special_features")}
        description={t("title")}
        subheading={t("subtitle")}
      />
      <div className="bg-primary-grey-carousel py-6 grid grid-cols-1 justify-center xl:px-40 px-3 rounded-3xl ">
        <div className="xl:flex xl:items-center ">
          <div className="hover:bg-slate-600 hover:text-white hover:font-bold transition  py-4 rounded-full hidden xl:block "><SlArrowLeft /></div>
          <div className="bg-white grid grid-cols-1 rounded-2xl">
            
            <div className="flex flex-row gap-4 md:grid-cols-2">

              <div className="flex flex-col justify-center items-center gap-4 lg:items-end lg:pr-10">

                <div className="bg-primary-green text-white px-3 py-3 rounded-full text-3xl self-center lg:self-end  ">
                  <LuPackageCheck />
                </div>

                <h3 className="text-base font-bold text-center ">
                  {t("slide_title")}
                </h3>

                <div className="text-sm text-center px-2 lg:px-0 lg:text-right">
                  <h3>{t("first_point")}</h3>
                </div>

                <Link
                  href="#"
                  className="block py-4 w-10/12 bg-primary-green text-xs rounded-full font-bold text-center text-white xs:text-sm sm:text-base sm:w-7/12 md:text-lg md:w-8/12 lg:text-base  "
                >
                  {t("get_trial")}
                </Link>

              </div>
              <Image src={carousel} alt="carousel Image" className="block m-auto object-cover" />
            </div>
          </div>

          <div className="w-full items flex justify-around xl:hidden">
            <div className="hover:bg-slate-600 hover:text-white hover:font-bold transition px-4 py-4 rounded-full "><SlArrowLeft /></div>
            <div className="hover:bg-slate-600 hover:text-white hover:font-bold transition px px-4 py-4 rounded-full "><SlArrowRight /></div>
          </div>

          <div className="hover:bg-slate-600 hover:text-white hover:font-bold transition px-4 py-4 rounded-full hidden xl:block"><SlArrowRight /></div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
