// import Image from "next/image";

// const Brands: React.FC = () => {
//   const logos = [
//     { src: "/brands/urpay.png", alt: "Urpay", width: 200, height: 200 },
//     { src: "/brands/mada.png", alt: "Mada", width: 120, height: 120 },
//     { src: "/brands/geidea.png", alt: "Geidea", width: 120, height: 120 },
//     { src: "/brands/alrajhi.png", alt: "Alrajhi", width: 120, height: 120 },
//     { src: "/brands/stcpay.png", alt: "STC Pay", width: 120, height: 120 },
//     { src: "/brands/zatca.png", alt: "Zatka", width: 220, height: 180 },
//   ];

//   return (
//     <div className="relative wrapper lg:w-[80%]  ">
//       <div className="marquee">
//         <div className="marquee__group ">
//           {[...logos].map((logo, index) => (
//             <div key={index} className="marquee__item">
//               <Image
//                 src={logo.src}
//                 alt={logo.alt}
//                 width={logo.width}
//                 height={logo.width}
//               />
//             </div>
//           ))}
//         </div>
//         <div className="marquee__group">
//           {[...logos].map((logo, index) => (
//             <div key={index} className="marquee__item">
//               <Image
//                 src={logo.src}
//                 alt={logo.alt}
//                 width={logo.width}
//                 height={logo.width}
//               />
//             </div>
//           ))}
//         </div>
//         <div className="marquee__group">
//           {[...logos].map((logo, index) => (
//             <div key={index} className="marquee__item">
//               <Image
//                 src={logo.src}
//                 alt={logo.alt}
//                 width={logo.width}
//                 height={logo.width}
//               />
//             </div>
//           ))}
//         </div>{" "}
//         <div className="marquee__group">
//           {[...logos].map((logo, index) => (
//             <div key={index} className="marquee__item">
//               <Image
//                 src={logo.src}
//                 alt={logo.alt}
//                 width={logo.width}
//                 height={logo.width}
//               />
//             </div>
//           ))}
//         </div>{" "}
//         <div className="marquee__group">
//           {[...logos].map((logo, index) => (
//             <div key={index} className="marquee__item">
//               <Image
//                 src={logo.src}
//                 alt={logo.alt}
//                 width={logo.width}
//                 height={logo.width}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Brands;
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useLocale } from "../layout";
const SwipeableSlider: React.FC = () => {
  const { currentLocale } = useLocale();

  const slides = [
    { src: "/brands/urpay.png", alt: "Urpay" },
    { src: "/brands/mada.png", alt: "Mada" },
    { src: "/brands/geidea.png", alt: "Geidea" },
    { src: "/brands/alrajhi.png", alt: "Alrajhi" },
    { src: "/brands/stcpay.png", alt: "STC Pay" },
    { src: "/brands/zatca.png", alt: "Zatka" },
  ];

  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(2);
      } else if (window.innerWidth < 770) {
        setVisibleCount(3);
      } else {
        setVisibleCount(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const slideWidth = 100 / visibleCount;
  const repeatCount = 20;

  return (
    <div
      className="relative w-[80%] overflow-hidden bg-primary-10 shadow-[rgba(0,0,0,0.2)_0px_4px_12px]"
      style={{
        maskImage:
          "linear-gradient(var(--mask-direction, to right), hsl(0 0% 0% / 0), hsl(0 0% 0% / 1) 20%, hsl(0 0% 0% / 1) 80%, hsl(0 0% 0% / 0))",
        WebkitMaskImage:
          "linear-gradient(var(--mask-direction, to right), hsl(0 0% 0% / 0), hsl(0 0% 0% / 1) 20%, hsl(0 0% 0% / 1) 80%, hsl(0 0% 0% / 0))",
      }}
    >
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(${currentLocale === "ar" ? "300%" : "0"});
          }
          100% {
            transform: translateX(${currentLocale === "ar" ? "0" : "-300%"});
          }
        }

        .slider-track {
          display: flex;
          width: calc(50%);
          animation: slide 17s linear infinite;
          gap: 8px;
        }

        .slide {
          width: calc(${slideWidth}% - 8px);
          flex-shrink: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 4px;
        }

        img {
          object-fit: contain;
        }
      `}</style>

      <div className="slider-track py-2">
        {[...Array(repeatCount)].map((_, i) => (
          <div key={`original-${i}`} className="slide">
            <Image
              src={slides[i % slides.length].src}
              alt={slides[i % slides.length].alt}
              width={150}
              height={150}
              className="object-contain bg-primary-10 p-2"
              priority={i < visibleCount}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SwipeableSlider;
