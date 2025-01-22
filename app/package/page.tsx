"use client"
import React from 'react'
import Header from '../_components/Header'
// import Image from 'next/image'
// import bg from "@/public/bg.png";
import { useTranslations } from "next-intl";
// import Link from 'next/link';
import ContactUs from '../_components/ContactUs';
import Footer from '../_components/Footer';
// import { Packages } from '../_components/Packages';
import { Pricing } from '../_components/Pricing';
const Package = () => {
  const t = useTranslations("package");
  return (
        <section className="">
        <div className="bg-herobg bg-cover bg-no-repeat bg-center w-full aspect-[1.2/1] xl:h-[688px]">

            <Header />
            <div className="flex flex-col justify-center items-center gap-6 w-full h-full text-center">

                <div className='text-2xl text-white flex flex-col gap-y-4 xl:-mt-60 '>
                    <h1 className="text-2xl font-bold md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl ">
                        {t("title")}
                    </h1>
                    <h2 className="text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
                        {t("subtitle")}
                    </h2>
                </div>

                <div className="flex flex-row justify-center gap-x-2 w-full">
                    <a
                        href="#"
                        className="text-nowrap text-center px-8  block text-white py-3 text-xs xs:px-12 col-span-5 lg:text-lg bg-primary-green hover:bg-white hover:text-primary-green transition rounded-full font-bold">
                        {t("start_now")}
                    </a>
                </div>
            </div>
        </div>
            <Pricing />
            <ContactUs />
            <Footer />
        </section>
  )
}

export default Package