import Image from "next/image";
import React from "react";
// import cashaicams from "../../public/cashaicams.png";
import bg from "../../public/cashai.png";
import bg1 from "../../public/mycashaismall.png";
import { useTranslations } from "next-intl";
const MyCashAi = () => {
  const t = useTranslations("mycashai");
  return (
    <section className="relative  h-auto">
      <div className="absolute hidden lg:block bg-primary-30 inset-0 ">
        <Image
          src={bg}
          alt="ai_group"
          layout="fill"
          className="object-cover bg-primary-blue "
        />
      </div>
      <div className=" absolute top-[57%] block lg:hidden bg-primary-30 inset-0">
        <Image
          src={bg1}
          alt="ai_group"
          className="object-cover bg-primary-blue "
        />
      </div>

      <div className="relative mx-auto flex flex-col-reverse lg:flex-row items-center justify-between lg:h-[60vh]">
        <div
          className="w-full h-full lg:w-1/2 text-center lg:text-right z-40 text-black flex flex-col justify-center gap-7 lg:py-24 py-10 px-2 sm:px-10 order-2 lg:order-2">
          <div className="flex flex-col items-center lg:items-end ">
            <div className="text-3xl font-bold  md:text-3xl lg:text-6xl pb-2 ">
              {t("title")}
            </div>
            
            <p className="text-end text-wrap w-[90%] lg:w-[63%] text-sm font-medium lg:pl-20 md:text-1x lg:text-xl ">
              <div className="pb-2 hidden lg:block">{t("description_title_l1")}</div>
              <div className="pb-2 hidden lg:block">{t("description_title_l2")}</div>
              <div className="pb-2 hidden lg:block">{t("description_title_l3")} </div>
              <div className="pb-2 hidden lg:block">{t("description_title_l4")} </div>

              <div className="text-center  flex flex-row leading-6 lg:hidden">{t("description_title_l1")} {t("description_title_l2")} {t("description_title_l3")} {t("description_title_l4")}</div>


            </p>
          </div>

          <div className="relative mx-auto flex flex-col lg:flex-col items-end justify-end">
            
          <div className="grid grid-cols-12 text-sm items-center font-medium text-end md:text-base sm:flex sm:justify-end mr-1 py-4">
              <p className="col-span-10 pr-6 md:text-2xl pt-4">{t("point1")}</p>
              <div className="inline-block col-span-2 ">
                <div className="w-5 h-5 rounded-full bg-primary-green"></div>
              </div>
            </div>

            <div className="grid grid-cols-12 text-sm items-center font-medium text-end md:text-base sm:flex sm:justify-end mr-1 py-4">
              <p className="col-span-10 pr-6 md:text-2xl pt-4">{t("point2")}</p>
              <div className="inline-block col-span-2">
                <div className="w-5 h-5 rounded-full bg-primary-green"></div>
              </div>
            </div>
            

            <div className="grid grid-cols-12 text-sm items-center font-medium text-end md:text-base sm:flex sm:justify-end mr-1 py-4">
              <p className="col-span-10 pr-6 md:text-2xl pt-4">{t("point3")}</p>
              <div className="inline-block col-span-2">
                <div className="w-5 h-5 rounded-full bg-primary-green"></div>
              </div>
            </div>

            <div className="flex flex-row justify-center md:justify-end w-full px-2 gap-2 lg:justify-end">
              <a
                href="#"
                className="py-2 w-90 sm:w-4/12 md:w-60 text-primary-green bg-white text-xs sm:text-lg sm:text-center lg:w-40 lg:text-base text-nowrap rounded-full font-bold border-2 border-primary-green "
              >
                {t("learn_more")}
              </a>
              <a
                href="#"
                className="py-2 px-4 bg-primary-green text-xs sm:text-lg sm:text-center sm:w-4/12  md:w-60 lg:w-96 lg:text-base text-nowrap rounded-full font-bold text-white"
              >
                {t("get_trial")}
              </a>
            </div>
          </div>
          
        </div>
        <div></div>

        <div className="w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-full relative order-1 lg:order-1">
          {/* <Image src={cashaicams} alt="ai_group" className="" /> */}
        </div>
      </div>
    </section>
  );
};

export default MyCashAi;

// rounded-[0_45%_45%_0]

{
  /* <div className="w-full h-full order-1 md:order-1 lg:order-1 ">
<Image src={ai_group} alt="ai_group" className=" " />
</div> */
}

//   <div className=" bg-white pb-12 lg:p-0 lg:pr-4 text-center lg:text-end rounded-[25%_25%_51%_49%_/_0%_0%_6%_7%] order-1 lg:order-2 lg:rounded-l-full lg:rounded-br-none lg:flex lg:flex-col lg:py-6 ">

//         <div className="flex flex-col items-center px-2 lg:items-end">
//           <h2 className="text-3xl font-bold py-4 md:text-3xl lg:text-6xl">{t("title")}</h2>
//           <p className="text-sm font-medium lg:pl-20 md:text-1x lg:text-xl">{t("description_title_l1")}</p>

//         </div>

//         <div className="grid grid-cols-1 lg:h-[30%] m-auto md:m-0 px-3 space-y-20 py-4 gap-y-4 lg:py-5 lg:gap-y-0 ">

//           <div className="grid grid-cols-12 text-sm items-center font-medium text-end md:text-base sm:flex sm:justify-end">
//             <p className="col-span-10 pr-6 md:text-xl">{t("point1")}</p>
//             <div className="inline-block col-span-2 ">
//               <div className="w-5 h-5 rounded-full bg-primary-green"></div>
//             </div>
//           </div>

//           <div className="grid grid-cols-12 text-sm items-center font-medium text-end md:text-base sm:flex sm:justify-end ">
//             <p className="col-span-10 pr-6 md:text-2xl">{t("point2")}</p>
//             <div className="inline-block col-span-2">
//               <div className="w-5 h-5 rounded-full bg-primary-green "></div>
//             </div>
//           </div>

//           <div className="grid grid-cols-12 text-sm items-center font-medium text-end md:text-base sm:flex sm:justify-end ">
//             <p className="col-span-10 pr-6 md:text-2xl">{t("point3")}</p>
//             <div className="inline-block col-span-2">
//               <div className="w-5 h-5 rounded-full bg-primary-green "></div>
//             </div>
//           </div>

//           <div className="flex flex-row justify-around w-full px-2 gap-2  lg:justify-end">
//           <a
//             href="#"
//             className="py-2 w-96 bg-primary-green text-xs sm:text-lg sm:text-center sm:w-4/12  md:w-60 lg:w-40 lg:text-base text-nowrap rounded-full font-bold text-white"
//           >
//             {t("get_trial")}
//           </a>
//           <a
//             href="#"
//             className="py-2 w-48 sm:w-4/12 md:w-60 text-primary-green bg-white text-xs sm:text-lg sm:text-center lg:w-40 lg:text-base text-nowrap rounded-full font-bold border-2 border-primary-green "
//           >
//             {t("learn_more")}
//           </a>
//         </div>
//         </div>

// </div>
