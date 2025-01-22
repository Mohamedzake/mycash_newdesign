
import React from "react";
import { useTranslations } from "next-intl";

import { TripleHeadings } from "./TripleHeadings";

import img1 from "@/public/Slider/img1.png"
import img2 from "@/public/Slider/img2.png"
import img3 from "@/public/Slider/img3.png"
import img4 from "@/public/Slider/img4.png"
import img5 from "@/public/Slider/img5.png"
import img6 from "@/public/Slider/img6.png"
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
const Carousel: React.FC = () => {
  const t = useTranslations("carousel");

  const carouselData = [
    {
      id:1,
      img: img1,
      title: t("title1"),
      point1: t("pont1_1"),
      point2: t("pont1_2"),
    },
    {
      id:2,
      img: img2,
      title: t("title2"),
      point1: t("pont2_1"),
      point2: t("pont2_2"),
      point3: t("pont2_3"),
    },
    {
      id:3,
      img: img3,
      title: t("title3"),
      point1: t("pont3_1"),
      point2: t("pont3_2"),
      point3: t("pont3_3"),
    },
    {
      id:4,
      img: img4,
      title: t("title4"),
      point1: t("pont4_1"),
      // point2: t("pont4_2"),

    },
    {
      id:5,
      img: img5,
      title: t("title5"),
      point1: t("pont5_1"),
      point2: t("pont5_2"),
      // point3: t("pont5_3"),

    },
    {      
      id:6,
      img: img6,
      title: t("title6"),
      point1: t("pont6_1"),
      point2: t("pont6_2"),
      // point3: t("pont6_3"),

    },

  ];


  return (
    <section>
      <TripleHeadings
        title={t("special_features")}
        description={t("desc1")}
        subheading={t("subtitle")}
      />

      <Swiper navigation={false} 
      
      centeredSlides={true} 
        modules={[Navigation,Autoplay,EffectFade]}  
        className="mySwiper" 
        effect={"fade"} 
        slidesPerView={'auto'}
        speed={3000}
        spaceBetween={20}
        autoplay={{
          delay: 2,
          disableOnInteraction: false, 
          pauseOnMouseEnter: false,
        }}      >
      {carouselData.map((item, index) => (
        <SwiperSlide key={index} className="bg-white ">
          {/* <section className="flex flex-col lg:flex-row justify-center items-center   bg-white mx-8"> */}
          <section className="grid grid-cols-1 lg:grid-cols-4  mx-8 bg-white">

            <div className="text-content flex flex-col pl-10 m-auto col-span-2 ">
              <h2 className="text-xl sm:text-lg md:text-2xl lg:text-3xl font-bold text-primary-blue ">{item.title}</h2>
              <div className={`*:!leading-[2.5] w-full text-start pl-8 ${item.id === 3 ? "*:!leading-[1.5]" : ""}`}>
                <p className={`text-base  lg:text-xl ${item.id === 4 ? "lg:w-[60%]" : ""}`}>{item.point1}</p>
                <p className="text-base lg:text-xl ">{item.point2}</p>
                <p className="text-base lg:text-xl">{item.point3}</p>
              </div>
            </div>

            <div className=" m-auto col-span-2">
                <Image src={item.img} width={500} height={600} alt="image" className="object-cover rounded-3xl"/>
            </div>

          </section>
        </SwiperSlide>
      ))}
    </Swiper>

    </section>

  );
};

export default Carousel;
