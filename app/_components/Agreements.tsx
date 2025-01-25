import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css/effect-creative";
import snb from "../../public/agreement/snb.png";
import mycash_snb from "../../public/agreement/mycash_snb.png";

import paymob from "../../public/agreement/Paymob.png";
import mycash_paymob from "../../public/agreement/mycash_paymob.png";
const Agreements = () => {
  const t = useTranslations("agreements");
  const swiperData = [
    {
      id: 1,
      rightimg: paymob,
      leftimg: mycash_paymob,
      title: t("title1"),
    },
    {
      id: 2,
      rightimg: snb,
      leftimg: mycash_snb,
      title: t("title2"),
    },
  ];
  return (
    <section className=" text-center mt-6">
      <h1 className="text-lg font-bold md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl py-4 px-2 lg:py-8 text-primary-blue">
        {t("heading")}
      </h1>
      <Swiper
        navigation={false}
        centeredSlides={true}
        modules={[Navigation, Autoplay, EffectFade]}
        className="mySwiper"
        effect={"fade"}
        speed={2000}
        // eslint-disable-next-line react/jsx-no-duplicate-props
        autoplay={{
          delay: 5,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
      >
        {swiperData.map((item) => (
          <SwiperSlide key={item.id} className="bg-white">
            <section className="m-auto container flex flex-col-reverse md:flex-row justify-center items-center bg-white  xs:py-4">
              <div className="right flex flex-col w-full justify-around items-center ">
                <Image
                  src={item.rightimg}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="w-[70%]  "
                />
                <p
                  className={`px-4 text-base font-semibold leading-6 md:text-base lg:text-2xl md:!leading-[2] ${
                    item.id === 2 ? "leading-10 py-4" : ""
                  }`}
                >
                  {item.title}
                </p>
              </div>
              <div className="left w-full flex justify-center items-center">
                <Image
                  src={item.leftimg}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="w-[80%] rounded-3xl bg-cover "
                />
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Agreements;
//----------------------
//-------------
//
// import { useTranslations } from "next-intl";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import Image from "next/image";
// import gsap from "gsap";
// import { useEffect, useRef } from "react";
// import "swiper/css";

// import snb from "../../public/agreement/snb.png";
// import mycash_snb from "../../public/agreement/mycash_snb.png";
// import paymob from "../../public/agreement/Paymob.png";
// import mycash_paymob from "../../public/agreement/mycash_paymob.png";

// const Agreements = () => {
//   const t = useTranslations("agreements");

//   const swiperRef = useRef(null);

//   const swiperData = [
//     {
//       id: 1,
//       rightImg: paymob,
//       leftImg: mycash_paymob,
//       title: t("title1"),
//     },
//     {
//       id: 2,
//       rightImg: snb,
//       leftImg: mycash_snb,
//       title: t("title2"),
//     },
//   ];

//   useEffect(() => {
//     const swiperEl = swiperRef.current?.el;

//     if (swiperEl) {
//       // Animation for each slide change
//       const onSlideChange = () => {
//         const activeSlide = swiperEl.querySelector(".swiper-slide-active");
//         const rightImg = activeSlide.querySelector(".right img");
//         const leftImg = activeSlide.querySelector(".left img");
//         const text = activeSlide.querySelector("p");

//         // Reset the position of elements before animation
//         gsap.set([rightImg, leftImg, text], { x: 100, autoAlpha: 0 });

//         // Animate elements into view
//         gsap.to(rightImg, {
//           x: 0,
//           autoAlpha: 1,
//           duration: 0.8,
//           ease: "power2.out",
//         });
//         gsap.to(leftImg, {
//           x: 0,
//           autoAlpha: 1,
//           duration: 0.8,
//           ease: "power2.out",
//           delay: 0.2,
//         });
//         gsap.to(text, {
//           x: 0,
//           autoAlpha: 1,
//           duration: 0.8,
//           ease: "power2.out",
//           delay: 0.4,
//         });
//       };

//       // Attach Swiper event listener
//       const swiperInstance = swiperRef.current.swiper;
//       swiperInstance.on("slideChangeTransitionStart", onSlideChange);

//       // Initial animation on load
//       onSlideChange();
//     }
//   }, []);

//   return (
//     <section className="text-center mt-6">
//       {/* Heading */}
//       <h1 className="text-lg font-bold md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl py-4 px-2 lg:py-8 text-primary-blue">
//         {t("heading")}
//       </h1>

//       {/* Swiper Component */}
//       <Swiper
//         ref={swiperRef}
//         modules={[Autoplay]}
//         loop={true}
//         centeredSlides={true}
//         autoplay={{
//           delay: 4000,
//           disableOnInteraction: false,
//         }}
//         speed={1200}
//         className="mySwiper"
//       >
//         {swiperData.map((item) => (
//           <SwiperSlide key={item.id} className="bg-white">
//             {/* <section className=" flex flex-col-reverse md:flex-row items-center py-8"> */}
//             <section className="grid grid-cols-1 lg:grid-cols-2 mx-8 bg-white">
//               {" "}
//               {/* Right Section */}
//               <div className="flex flex-col">
//                 <div className="right flex flex-col w-full justify-around items-center md:pr-8">
//                   <Image
//                     src={item.rightImg}
//                     alt={item.title}
//                     width={200}
//                     height={200}
//                     className="w-3/4 md:w-1/2 lg:w-1/3"
//                   />
//                 </div>

//                 {/* Text */}
//                 <p className="text-base md:text-lg lg:text-xl font-semibold text-primary mt-4 text-center">
//                   {item.title}
//                 </p>
//               </div>
//               {/* Left Section */}
//               <div className=" w-full flex justify-center items-center">
//                 <Image
//                   src={item.leftImg}
//                   alt={item.title}
//                   width={300}
//                   height={300}
//                   className="rounded-3xl shadow-lg"
//                 />
//               </div>
//             </section>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default Agreements;
///-----------------
///-------------------
//----------------
// import React, { useEffect } from "react";
// import { useTranslations } from "next-intl";
// import { TripleHeadings } from "./TripleHeadings";
// import Image from "next/image";
// import gsap from "gsap";
// import { Autoplay, Navigation } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { useLocale } from "../layout";
// import img1 from "@/public/Slider/img1.png";
// import img2 from "@/public/Slider/img2.png";
// import img3 from "@/public/Slider/img3.png";
// import img4 from "@/public/Slider/img4.png";
// import img5 from "@/public/Slider/img5.png";
// import img6 from "@/public/Slider/img6.png";
// import snb from "../../public/agreement/snb.png";
// import mycash_snb from "../../public/agreement/mycash_snb.png";

// import paymob from "../../public/agreement/Paymob.png";
// import mycash_paymob from "../../public/agreement/mycash_paymob.png";
// const Carousel: React.FC = () => {
//   const t = useTranslations("carousel");
//   const { currentLocale } = useLocale();
//   const swiperData = [
//     {
//       id: 1,
//       rightimg: paymob,
//       leftimg: mycash_paymob,
//       title: t("title1"),
//     },
//     {
//       id: 2,
//       rightimg: snb,
//       leftimg: mycash_snb,
//       title: t("title2"),
//     },
//   ];
//   const carouselData = [
//     {
//       id: 1,
//       img: img1,
//       title: t("title1"),
//       points: [t("pont1_1"), t("pont1_2")],
//     },
//     {
//       id: 2,
//       img: img2,
//       title: t("title2"),
//       points: [t("pont2_1"), t("pont2_2"), t("pont2_3")],
//     },
//     {
//       id: 3,
//       img: img3,
//       title: t("title3"),
//       points: [t("pont3_1"), t("pont3_2"), t("pont3_3")],
//     },
//     {
//       id: 4,
//       img: img4,
//       title: t("title4"),
//       points: [t("pont4_1")],
//     },
//     {
//       id: 5,
//       img: img5,
//       title: t("title5"),
//       points: [t("pont5_1"), t("pont5_2")],
//     },
//     {
//       id: 6,
//       img: img6,
//       title: t("title6"),
//       points: [t("pont6_1"), t("pont6_2")],
//     },
//   ];

//   useEffect(() => {
//     const slides = document.querySelectorAll(".swiper-slide");

//     slides.forEach((slide) => {
//       const img = slide.querySelector("img");
//       const textContent = slide.querySelector(".text-content");

//       gsap.set(img, { autoAlpha: 0, x: -50 });
//       gsap.set(textContent, { autoAlpha: 0, x: -50 });

//       gsap.to(img, { autoAlpha: 1, x: 0, duration: 0.5 });
//       gsap.to(textContent, { autoAlpha: 1, x: 0, duration: 0.5, delay: 0.2 });
//     });
//   }, [currentLocale]);

//   return (
//     <section dir="ltr">
//       <TripleHeadings
//         title={t("special_features")}
//         description={t("desc1")}
//         subheading={t("subtitle")}
//       />

//       <Swiper
//         navigation={false}
//         loop={true}
//         centeredSlides={true}
//         modules={[Autoplay, Navigation]}
//         className="mySwiper"
//         slidesPerView={"auto"}
//         speed={2000}
//         spaceBetween={20}
//         autoplay={{
//           delay: 4000,
//           disableOnInteraction: false,
//         }}
//       >
//         {carouselData.map((item) => (
//           <SwiperSlide key={item.id} className="bg-white">
//             <section className="grid grid-cols-1 lg:grid-cols-4 mx-8 bg-white">
//               <div className="text-content flex flex-col pl-10 pb-10 m-auto col-span-2">
//                 <h2 className="text-xl sm:text-lg md:text-2xl lg:text-3xl font-bold text-primary-blue">
//                   {item.title}
//                 </h2>
//                 <div
//                   className={`w-full text-start pl-8 ${
//                     item.id === 3 ? "leading-[1.5]" : "leading-[2.5]"
//                   }`}
//                 >
//                   {item.points.map((point, index) => (
//                     <p key={index} className="text-base lg:text-xl">
//                       {point}
//                     </p>
//                   ))}
//                 </div>
//               </div>
//               <div className="m-auto col-span-2">
//                 <Image
//                   src={item.img}
//                   width={500}
//                   height={600}
//                   alt="image"
//                   className="object-cover rounded-3xl transition-transform duration-500 ease-in-out"
//                 />
//               </div>
//             </section>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default Carousel;
