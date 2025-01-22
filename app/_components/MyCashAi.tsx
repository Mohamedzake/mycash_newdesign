import Image from "next/image";
import React from "react";
import ai_group from "../../public/ai_group.png";
import { useTranslations } from "next-intl";
const MyCashAi = () => {
  const t = useTranslations("mycashai");
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 lg:py-0 bg-primary-blue ">

      <div className=" bg-white pb-12 lg:p-0 lg:pr-4 text-center lg:text-end rounded-[25%_25%_51%_49%_/_0%_0%_6%_7%] order-1 lg:order-2 lg:rounded-l-full lg:rounded-br-none lg:flex lg:flex-col lg:py-6 ">
        
        <div className="flex flex-col items-center px-2 lg:items-end">
          <h2 className="text-3xl font-bold py-4 md:text-3xl lg:text-6xl">{t("title")}</h2>
          <p className="text-sm font-medium lg:pl-20 md:text-1x lg:text-xl">{t("description_title_l1")}</p>

        </div>

        <div className="grid grid-cols-1 lg:h-[30%] m-auto md:m-0 px-3 space-y-20 py-4 gap-y-4 lg:py-5 lg:gap-y-0 ">

          <div className="grid grid-cols-12 text-sm items-center font-medium text-end md:text-base sm:flex sm:justify-end">
            <p className="col-span-10 pr-6 md:text-xl">{t("point1")}</p>
            <div className="inline-block col-span-2 ">
              <div className="w-5 h-5 rounded-full bg-primary-green"></div>
            </div>
          </div>

          <div className="grid grid-cols-12 text-sm items-center font-medium text-end md:text-base sm:flex sm:justify-end ">
            <p className="col-span-10 pr-6 md:text-2xl">{t("point2")}</p>
            <div className="inline-block col-span-2">
              <div className="w-5 h-5 rounded-full bg-primary-green "></div>
            </div>
          </div>

          <div className="grid grid-cols-12 text-sm items-center font-medium text-end md:text-base sm:flex sm:justify-end ">
            <p className="col-span-10 pr-6 md:text-2xl">{t("point3")}</p>
            <div className="inline-block col-span-2">
              <div className="w-5 h-5 rounded-full bg-primary-green "></div>
            </div>
          </div>

          <div className="flex flex-row justify-around w-full px-2 gap-2  lg:justify-end">
          <a
            href="#"
            className="py-2 w-96 bg-primary-green text-xs sm:text-lg sm:text-center sm:w-4/12  md:w-60 lg:w-40 lg:text-base text-nowrap rounded-full font-bold text-white"
          >
            {t("get_trial")}
          </a>
          <a
            href="#"
            className="py-2 w-48 sm:w-4/12 md:w-60 text-primary-green bg-white text-xs sm:text-lg sm:text-center lg:w-40 lg:text-base text-nowrap rounded-full font-bold border-2 border-primary-green "
          >
            {t("learn_more")}
          </a>
        </div>
        </div>

        {/* <div className="py-6 lg:py-6 flex flex-row justify-center items-center bg-red-600  m-auto gap-y-2 lg:flex lg:flex-column gap-x-12 grid-cols-2 lg:w-2/3 lg:me-2"> */}

      </div>

      <div className="w-full h-full order-1 md:order-1 lg:order-1 ">
        <Image src={ai_group} alt="ai_group" className=" " />
      </div>
    </section>
  );
};

export default MyCashAi;

// rounded-[0_45%_45%_0]
