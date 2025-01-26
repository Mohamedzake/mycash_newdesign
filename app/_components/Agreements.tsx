// import { useTranslations } from "next-intl";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Autoplay, EffectFade, Navigation } from "swiper/modules";
// import Image from "next/image";
// import "swiper/css/effect-creative";
// import snb from "../../public/agreement/snb.png";
// import mycash_snb from "../../public/agreement/mycash_snb.png";

// import paymob from "../../public/agreement/Paymob.png";
// import mycash_paymob from "../../public/agreement/mycash_paymob.png";
// const Agreements = () => {
//   const t = useTranslations("agreements");
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
//   return (
//     <section className=" text-center mt-6">
//       <h1 className="text-lg font-bold md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl py-4 px-2 lg:py-8 text-primary-blue">
//         {t("heading")}
//       </h1>
//       <Swiper
//         navigation={false}
//         centeredSlides={true}
//         modules={[Navigation, Autoplay, EffectFade]}
//         className="mySwiper"
//         effect={"fade"}
//         speed={2000}
//         // eslint-disable-next-line react/jsx-no-duplicate-props
//         autoplay={{
//           delay: 5,
//           disableOnInteraction: false,
//           pauseOnMouseEnter: true,
//         }}
//       >
//         {swiperData.map((item) => (
//           <SwiperSlide key={item.id} className="bg-white">
//             <section className="m-auto container flex flex-col-reverse md:flex-row justify-center items-center bg-white  xs:py-4">
//               <div className="right flex flex-col w-full justify-around items-center ">
//                 <Image
//                   src={item.rightimg}
//                   alt={item.title}
//                   width={100}
//                   height={100}
//                   className="w-[70%]  "
//                 />
//                 <p
//                   className={`px-4 text-base font-semibold leading-6 md:text-base lg:text-2xl md:!leading-[2] ${
//                     item.id === 2 ? "leading-10 py-4" : ""
//                   }`}
//                 >
//                   {item.title}
//                 </p>
//               </div>
//               <div className="left w-full flex justify-center items-center">
//                 <Image
//                   src={item.leftimg}
//                   alt={item.title}
//                   width={100}
//                   height={100}
//                   className="w-[80%] rounded-3xl bg-cover "
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
import React, { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image, { StaticImageData } from "next/image";
import gsap from "gsap";
import "swiper/css";

import snb from "@/public/agreement/snb.png";
import mycash_snb from "@/public/agreement/mycash_snb.png";
import paymob from "@/public/agreement/Paymob.png";
import mycash_paymob from "@/public/agreement/mycash_paymob.png";
import { useLocale } from "../layout";
interface SwiperItem {
  id: number;
  rightImg: StaticImageData;
  leftImg: StaticImageData;
  title: string;
}

const Agreements: React.FC = () => {
  const t = useTranslations("agreements");
  const { currentLocale } = useLocale();
  const locale = currentLocale;
  const swiperData: SwiperItem[] = [
    {
      id: 1,
      rightImg: paymob,
      leftImg: mycash_paymob,
      title: t("title1"),
    },
    {
      id: 2,
      rightImg: snb,
      leftImg: mycash_snb,
      title: t("title2"),
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
      <h1 className="text-lg font-bold md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl mb-10 py-4 px-2 lg:py-8 text-primary-blue">
        {t("heading")}
      </h1>

      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper.el as HTMLDivElement;
        }}
        key={locale}
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
            <div className="grid grid-cols-1 lg:grid-cols-2 mx-8 bg-white">
              <div className="flex flex-col">
                <div className="right flex flex-col w-full justify-around items-center md:pr-8">
                  <Image
                    src={item.rightImg}
                    alt={item.title}
                    width={200}
                    height={200}
                    className="w-3/4 md:w-1/2 lg:w-1/3"
                  />
                </div>

                <p className="text-base md:text-lg lg:text-xl font-semibold text-primary mt-4 text-center">
                  {item.title}
                </p>
              </div>

              <div className="left w-full flex justify-center items-center">
                <Image
                  src={item.leftImg}
                  alt={item.title}
                  width={500}
                  height={500}
                  className="rounded-3xl shadow-lg"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Agreements;
