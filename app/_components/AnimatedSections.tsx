
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useTranslations } from "next-intl";
import { TripleHeadings } from "./TripleHeadings";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AnimatedSections = () => {
  const t = useTranslations("animatedsection");
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pointsRef = useRef<(HTMLDivElement | null)[]>([]);
  const indicatorsRef = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !containerRef.current) return;

    const points = pointsRef.current.filter(
      (ref): ref is HTMLDivElement => ref !== null
    );
    const indicators = indicatorsRef.current.filter(
      (ref): ref is HTMLDivElement => ref !== null
    );
    const height = 50 * points.length;

    points.forEach((elem) => {
      const img = elem.querySelector("img");
      const article = elem.querySelector("article");

      if (img && article) {
        gsap.set(img, { autoAlpha: 1 });
        gsap.set(article, { autoAlpha: 1, y: 0 });
      }
    });

    gsap.set(".indicators", { display: "flex" });

    points.forEach((elem) => {
      gsap.set(elem, { position: "absolute", top: 0 });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${height}%`,
        scrub: true,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        id: "points",
      },
    });

    points.forEach((elem, i) => {
      const img = elem.querySelector("img");
      const article = elem.querySelector("article");

      if (img && article) {
        if (i === 0) {
          gsap.set(img, { autoAlpha: 1 });
          gsap.set(article, { autoAlpha: 1, y: 0 });
        } else {
          gsap.set(img, { autoAlpha: 0 });
          gsap.set(article, { autoAlpha: 0, y: 100 });
        }

        if (i !== 0) {
          tl.to(
            indicators[i],
            { backgroundColor: "#EA580C", duration: 0.25 },
            i
          );
          tl.to(img, { autoAlpha: 1, duration: 0.5 }, i);
          tl.to(article, { autoAlpha: 1, y: 0, duration: 0.5 }, i);
        }

        if (i !== points.length - 1) {
          tl.to(
            indicators[i],
            { backgroundColor: "#adadad", duration: 0.25 },
            i + 0.75
          );
          tl.to(article, { autoAlpha: 0, y: -100, duration: 0.5 }, i + 0.75);
          tl.to(img, { autoAlpha: 0, duration: 0.5 }, i + 0.75);
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const sections = [
    { title: "Title 1", image: "/ai/age_gender.png",heading:t("attend_leave_title"),desc:t("attend_leave_description") },
    { title: "Title 2", image: "/ai/attend_leave.png",heading:t("sell_over_cams_title"),desc:t("sell_over_cams_description") },
    { title: "Title 3", image: "/ai/nums_of_visits.png",heading:t("number_of_clients_title"),desc:t("number_of_clients_description") },
    { title: "Title 3", image: "/ai/selling_over_cams.png",heading:t("ages_gender_title"),desc:t("ages_gender_description") },
  ];

  // const translatedText = [{
  //   heading:t("attend_leave_title"),
  //   desc:t("attend_leave_description")
  // },{
  //   heading:t("sell_over_cams_title"),
  //   desc:t("sell_over_cams_description")
  // },{
  //   heading:t("number_of_clients_title"),
  //   desc:t("number_of_clients_description")
  // },{
  //   heading:t("ages_gender_title"),
  //   desc:t("ages_gender_description")
  // }]
  return (
    <section
      ref={containerRef}
      className="relative h-screen overflow-hidden  "
    >
            <TripleHeadings
              title={t("title")}
              description={t("subtitle")}
              subheading={t("description")}
            />
      
      <div className="absolute  left-8 top-1/2  -translate-y-1/2 h-[60vh] w-[3px] hidden flex-col justify-between indicators z-50">
        {sections.map((_, index) => (
          <div
            key={`indicator-${index}`}
            ref={(el) => {
              indicatorsRef.current[index] = el;
            }}
            className={`w-full flex-grow my-0.5  ${
              index === 0 ? "bg-[#EA580C]" : "bg-neutral-400"
            }`}
          />
        ))}
      </div>
      
      <div ref={wrapperRef} className="wrapper ">
        {sections.map((section, index) => (
          <div
            key={`point-${index}`}
            ref={(el) => {
              pointsRef.current[index] = el;
            }}
            className="point h-screen w-full  flex-col mt-[10rem] lg:mt-[20rem] items-center justify-center p-12 outline outline-1 outline-red-500"
          >
            <article className="flex-[0_0_60%] opacity-100 translate-y-0 text-center flex flex-col gap-2">
                      <h3 className="text-primary-blue text-3xl font-semibold pb-8 ">{section.heading}</h3>
                      <p className="text-xl pl-16 pb-[6rem]">{section.desc}</p>
            </article>
            
            <Image
              src={section.image}
              alt={section.title}
              className="flex-[0_0_25%] opacity-100 object-cover rounded-3xl m-auto"
              width={400}
              height={320}
            />
          </div>
        ))}
      </div>



    </section>
  );
};

export default AnimatedSections;