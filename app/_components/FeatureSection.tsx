import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";

import feat1 from "@/public/feat1.png";
import Link from "next/link";
import { TripleHeadings } from "./TripleHeadings";
// import feat2 from "@/public/feat2.png";
// import feat3 from "@/public/feat3.png";
const FeatureSection = () => {
  const t = useTranslations("aboutus");
  return (
    <section className="px-6 py-6">
      <TripleHeadings
        title={t("special_features")}
        description={t("title")}
        subheading={t("subtitle")}
      />
      {/*  */}
      <div className="grid grid-cols-1 m-auto lg:grid-cols-2">
        <div className="grid grid-cols-1 text-center gap-6 pb-4">
          <div className="text-2xl font-semibold text-primary-green">01</div>
          <h3 className="text-2xl font-semibold">{t("des_title1")}</h3>
          <p className="text-[#202020]">{t("des_subtitle1")}</p>
            <Link
              href="/"
              className="block bg-primary-green w-80 py-4 text-white rounded-full font-bold m-auto"
            >
              {t("get_trial")}
            </Link>
        </div>

        <div>
          <Image src={feat1} alt="Feature One" className="block m-auto " />
        </div>
      </div>
      {/*  */}

      {/*  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 py-10">

        <div className="grid grid-cols-1 text-center gap-6 pb-4 order-1 lg:order-2 ">
          <div className="text-2xl font-semibold text-primary-green">02</div>
          <h3 className="text-2xl font-semibold">{t("des_title1")}</h3>
          <p className="text-[#202020]">{t("des_subtitle1")}</p>
            <Link
              href="/"
              className="block bg-primary-green w-80 py-4 text-white rounded-full font-bold m-auto"
            >
              {t("get_trial")}
            </Link>
        </div>

        <div className="order-1 px-6">
          <Image src={feat1} alt="Feature One" className="block m-auto"/>
        </div>
      </div>
      {/*  */}
      {/*  */}
      <div className="grid grid-cols-1 lg:grid-cols-2  py-10">
        <div className="grid grid-cols-1 text-center gap-6 pb-4">
          <div className="text-2xl font-semibold text-primary-green">03</div>
          <h3 className="text-2xl font-semibold">{t("des_title1")}</h3>
          <p className="text-[#202020]">{t("des_subtitle1")}</p>
            <Link
              href="/"
              className="block bg-primary-green w-80 py-4 text-white rounded-full font-bold m-auto"
            >
              {t("get_trial")}
            </Link>
        </div>

        <div>
          <Image src={feat1} alt="Feature One" className="block m-auto"/>
        </div>
      </div>
      {/*  */}
    </section>
  );
};

export default FeatureSection;
