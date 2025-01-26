// import React from "react";
// import { useTranslations } from "next-intl";

// import { TripleHeadings } from "./TripleHeadings";

// import img1 from "@/public/Slider/img1.png";
// import img2 from "@/public/Slider/img2.png";
// import img3 from "@/public/Slider/img3.png";
// import img4 from "@/public/Slider/img4.png";
// import img5 from "@/public/Slider/img5.png";
// import img6 from "@/public/Slider/img6.png";
// import Image from "next/image";

// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/navigation";

// import { Autoplay, EffectFade, Navigation } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// const Carousel: React.FC = () => {
//   const t = useTranslations("carousel");

//   const carouselData = [
//     {
//       id: 1,
//       img: img1,
//       title: t("title1"),
//       point1: t("pont1_1"),
//       point2: t("pont1_2"),
//     },
//     {
//       id: 2,
//       img: img2,
//       title: t("title2"),
//       point1: t("pont2_1"),
//       point2: t("pont2_2"),
//       point3: t("pont2_3"),
//     },
//     {
//       id: 3,
//       img: img3,
//       title: t("title3"),
//       point1: t("pont3_1"),
//       point2: t("pont3_2"),
//       point3: t("pont3_3"),
//     },
//     {
//       id: 4,
//       img: img4,
//       title: t("title4"),
//       point1: t("pont4_1"),
//       // point2: t("pont4_2"),
//     },
//     {
//       id: 5,
//       img: img5,
//       title: t("title5"),
//       point1: t("pont5_1"),
//       point2: t("pont5_2"),
//       // point3: t("pont5_3"),
//     },
//     {
//       id: 6,
//       img: img6,
//       title: t("title6"),
//       point1: t("pont6_1"),
//       point2: t("pont6_2"),
//       // point3: t("pont6_3"),
//     },
//   ];

//   return (
//     <section>
//       <TripleHeadings
//         title={t("special_features")}
//         description={t("desc1")}
//         subheading={t("subtitle")}
//       />

//       <Swiper
//         navigation={false}
//         centeredSlides={true}
//         modules={[Navigation, Autoplay, EffectFade]}
//         className="mySwiper"
//         effect={"fade"}
//         slidesPerView={"auto"}
//         speed={3000}
//         spaceBetween={20}
//         autoplay={{
//           delay: 2,
//           disableOnInteraction: false,
//           pauseOnMouseEnter: false,
//         }}
//       >
//         {carouselData.map((item, index) => (
//           <SwiperSlide key={index} className="bg-white ">
//             {/* <section className="flex flex-col lg:flex-row justify-center items-center   bg-white mx-8"> */}
//             <section className="grid grid-cols-1 lg:grid-cols-4  mx-8 bg-white">
//               <div className="text-content flex flex-col pl-10 m-auto col-span-2 ">
//                 <h2 className="text-xl sm:text-lg md:text-2xl lg:text-3xl font-bold text-primary-blue ">
//                   {item.title}
//                 </h2>
//                 <div
//                   className={`*:!leading-[2.5] w-full text-start pl-8 ${
//                     item.id === 3 ? "*:!leading-[1.5]" : ""
//                   }`}
//                 >
//                   <p
//                     className={`text-base  lg:text-xl ${
//                       item.id === 4 ? "lg:w-[60%]" : ""
//                     }`}
//                   >
//                     {item.point1}
//                   </p>
//                   <p className="text-base lg:text-xl ">{item.point2}</p>
//                   <p className="text-base lg:text-xl">{item.point3}</p>
//                 </div>
//               </div>

//               <div className=" m-auto col-span-2">
//                 <Image
//                   src={item.img}
//                   width={500}
//                   height={600}
//                   alt="image"
//                   className="object-cover rounded-3xl"
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

///-----------------
///------------
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

// const Carousel: React.FC = () => {
//   const t = useTranslations("carousel");
//   const { currentLocale } = useLocale();
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
//       gsap.set(img, {
//         autoAlpha: currentLocale === "ar" ? "50" : "0",
//         y: currentLocale === "ar" ? "0" : "50",
//       });
//       gsap.set(textContent, {
//         autoAlpha: currentLocale === "ar" ? "50" : "0",
//         y: currentLocale === "ar" ? "0" : "50",
//       });
//       // gsap.set(img, { autoAlpha: 50, y: 0 });
//       // gsap.set(textContent, { autoAlpha: 50, y: 0 });
//       // gsap.set(img, { autoAlpha: 0, y: 50 });
//       // gsap.set(textContent, { autoAlpha: 0, y: 50 });
//     });
//   }, [currentLocale]);

//   return (
//     <section>
//       <TripleHeadings
//         title={t("special_features")}
//         description={t("desc1")}
//         subheading={t("subtitle")}
//       />

//       <Swiper
//         navigation={false}
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
//         onSlideChange={(swiper) => {
//           const activeSlide = swiper.slides[swiper.activeIndex];
//           const img = activeSlide.querySelector("img");
//           const textContent = activeSlide.querySelector(".text-content");

//           gsap.set(img, { autoAlpha: 0, y: 50 });
//           gsap.set(textContent, { autoAlpha: 0, y: 50 });
//           gsap.to(img, { autoAlpha: 1, y: 0, duration: 0.5 });
//           gsap.to(textContent, { autoAlpha: 1, y: 0, duration: 0.5 });
//         }}
//       >
//         {carouselData.map((item) => (
//           <SwiperSlide key={item.id} className="bg-white">
//             <section className="grid grid-cols-1 lg:grid-cols-4 mx-8 bg-white">
//               <div className="text-content flex flex-col pl-10  pb-10 m-auto col-span-2">
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
// // import "swiper/css";

// const Carousel: React.FC = () => {
//   const t = useTranslations("carousel");
//   const { currentLocale } = useLocale();

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

//       gsap.set(img, { autoAlpha: 0, y: 50 });
//       gsap.set(textContent, { autoAlpha: 0, y: 50 });

//       gsap.to(img, { autoAlpha: 1, y: 0, duration: 0.5 });
//       gsap.to(textContent, { autoAlpha: 1, y: 0, duration: 0.5, delay: 0.2 });
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
//         onSlideChange={(swiper) => {
//           const activeSlide = swiper.slides[swiper.activeIndex];
//           const img = activeSlide.querySelector("img");
//           const textContent = activeSlide.querySelector(".text-content");

//           gsap.set(img, { autoAlpha: 0, y: 50 });
//           gsap.set(textContent, { autoAlpha: 0, y: 50 });

//           gsap.to(img, { autoAlpha: 1, y: 0, duration: 0.5 });
//           gsap.to(textContent, {
//             autoAlpha: 1,
//             y: 0,
//             duration: 0.5,
//             delay: 0.2,
//           });
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

// const Carousel: React.FC = () => {
//   const t = useTranslations("carousel");
//   const { currentLocale } = useLocale();

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
//         // navigation={true}
//         loop={true}
//         slidesPerView={1}
//         autoHeight={true}
//         centeredSlides={true}
//         modules={[Autoplay, Navigation]}
//         className="mySwiper"
//         // slidesPerView={"auto"}
//         speed={2000}
//         spaceBetween={20}
//         autoplay={{
//           delay: 4000,
//           disableOnInteraction: false,
//         }}
//       >
//         {carouselData.map((item) => (
//           <SwiperSlide key={item.id} className="bg-white">
//             <section className="grid grid-cols-1 lg:grid-cols-4 mx-8 bg-white h-[600px] lg:h-[260px]">
//               <div className="m-auto col-span-2 order-2 lg:order-1 ">
//                 <Image
//                   src={item.img}
//                   width={500}
//                   height={600}
//                   alt="image"
//                   className="object-cover rounded-3xl transition-transform duration-500 ease-in-out"
//                 />
//               </div>
//               <div className="text-content flex flex-col pl-10 pb-10 m-auto col-span-2 order-1 lg:order-2 ">
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
//             </section>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default Carousel;
// import React, { useEffect, useRef } from "react";
// import { useTranslations } from "next-intl";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import Image, { StaticImageData } from "next/image";
// import gsap from "gsap";
// import "swiper/css";
// import { TripleHeadings } from "./TripleHeadings";
// import img1 from "@/public/Slider/img1.png";
// import img2 from "@/public/Slider/img2.png";
// import img3 from "@/public/Slider/img3.png";
// import img4 from "@/public/Slider/img4.png";
// import img5 from "@/public/Slider/img5.png";
// import img6 from "@/public/Slider/img6.png";

// type TranslatedPoints = string[];
// interface SwiperItem {
//   id: number;

//   img: StaticImageData;
//   title: string;
//   points: TranslatedPoints;
// }

// const Agreements: React.FC = () => {
//   const t = useTranslations("carousel");

//   const swiperData: SwiperItem[] = [
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

//   const swiperRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (swiperRef.current) {
//       const swiperEl = swiperRef.current.querySelector(".swiper-slide-active");

//       if (swiperEl) {
//         const rightImg = swiperEl.querySelector(".right img");
//         const leftImg = swiperEl.querySelector(".left img");
//         const text = swiperEl.querySelector("p");

//         if (rightImg && leftImg && text) {
//           gsap.fromTo(
//             [rightImg, leftImg, text],
//             { x: 100, autoAlpha: 0 },
//             {
//               x: 0,
//               autoAlpha: 1,
//               duration: 0.8,
//               stagger: 0.2,
//               ease: "power2.out",
//             }
//           );
//         }
//       }
//     }
//   }, [swiperData]);

//   return (
//     <section className="text-center mt-6">
//       <TripleHeadings
//         title={t("special_features")}
//         description={t("desc1")}
//         subheading={t("subtitle")}
//       />
//       <Swiper
//         onSwiper={(swiper) => {
//           swiperRef.current = swiper.el as HTMLDivElement;
//         }}
//         navigation={true}
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
//             <section className="grid grid-cols-1 lg:grid-cols-4 mx-8 bg-white h-[600px] lg:h-[260px]">
//               <div className="m-auto col-span-2 order-2 lg:order-1 ">
//                 <Image
//                   src={item.img}
//                   width={500}
//                   height={600}
//                   alt="image"
//                   className="object-cover rounded-3xl transition-transform duration-500 ease-in-out"
//                 />
//               </div>
//               <div className="text-content flex flex-col pl-10 pb-10 m-auto col-span-2 order-1 lg:order-2 ">
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
//             </section>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </section>
//   );
// };

// export default Agreements;
import React, { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image, { StaticImageData } from "next/image";
import gsap from "gsap";
import "swiper/css";
import { TripleHeadings } from "./TripleHeadings";
import img1 from "@/public/Slider/img1.png";
import img2 from "@/public/Slider/img2.png";
import img3 from "@/public/Slider/img3.png";
import img4 from "@/public/Slider/img4.png";
import img5 from "@/public/Slider/img5.png";
import img6 from "@/public/Slider/img6.png";

import { useLocale } from "../layout";
type TranslatedPoints = string[];
interface SwiperItem {
  id: number;
  img: StaticImageData;
  title: string;
  points: TranslatedPoints;
}

const Agreements: React.FC = () => {
  const t = useTranslations("carousel");

  const { currentLocale } = useLocale();
  const locale = currentLocale;
  const swiperData: SwiperItem[] = [
    {
      id: 1,
      img: img1,
      title: t("title1"),
      points: [t("pont1_1"), t("pont1_2")],
    },
    {
      id: 2,
      img: img2,
      title: t("title2"),
      points: [t("pont2_1"), t("pont2_2"), t("pont2_3")],
    },
    {
      id: 3,
      img: img3,
      title: t("title3"),
      points: [t("pont3_1"), t("pont3_2"), t("pont3_3")],
    },
    {
      id: 4,
      img: img4,
      title: t("title4"),
      points: [t("pont4_1")],
    },
    {
      id: 5,
      img: img5,
      title: t("title5"),
      points: [t("pont5_1"), t("pont5_2")],
    },
    {
      id: 6,
      img: img6,
      title: t("title6"),
      points: [t("pont6_1"), t("pont6_2")],
    },
  ];

  const swiperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (swiperRef.current) {
      const swiperEl = swiperRef.current.querySelector(".swiper-slide-active");

      if (swiperEl) {
        const rightImg = swiperEl.querySelector(".right img");
        const leftImg = swiperEl.querySelector(".left img");
        const text = swiperEl.querySelector("p");

        if (rightImg && leftImg && text) {
          gsap.fromTo(
            [rightImg, leftImg, text],
            { x: 100, autoAlpha: 0 },
            {
              x: 0,
              autoAlpha: 1,
              duration: 0.8,
              stagger: 0.2,
              ease: "power2.out",
            }
          );
        }
      }
    }
  }, [swiperData, locale]);
  return (
    <section className="text-center mt-6">
      <TripleHeadings
        title={t("special_features")}
        description={t("desc1")}
        subheading={t("subtitle")}
      />
      <Swiper
        key={locale}
        onSwiper={(swiper) => {
          swiperRef.current = swiper.el as HTMLDivElement;
        }}
        navigation={true}
        modules={[Autoplay]}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={1200}
        className="mySwiper"
      >
        {swiperData.map((item) => (
          <SwiperSlide key={item.id} className="bg-white">
            <section className="grid grid-cols-1 lg:grid-cols-4 mx-4 md:mx-10 lg:mx-20 gap-0 lg:gap-20 bg-white h-[600px] lg:h-[260px]">
              <div className="flex justify-center items-center col-span-2 order-2 lg:order-1 ">
                <Image
                  src={item.img}
                  width={500}
                  height={600}
                  alt="image"
                  className="object-cover rounded-3xl transition-transform duration-500 ease-in-out"
                />
              </div>
              <div className="text-content flex flex-col  justify-center items-center  col-span-2 order-1 lg:order-2 ">
                <h2 className="text-2xl lg:text-3xl font-bold text-primary-blue flex justify-center items-center">
                  {item.title}
                </h2>
                <div
                  className={`w-full text-start p-2 flex flex-col justify-center items-center ${
                    item.id === 3 ? "leading-[1.5]" : "leading-[2.5]"
                  }`}
                >
                  {item.points.map((point, index) => (
                    <p key={index} className="text-xl lg:text-xl">
                      {point}
                    </p>
                  ))}
                </div>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Agreements;
