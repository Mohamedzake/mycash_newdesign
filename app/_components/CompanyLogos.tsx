// import React from "react";
// import Image from "next/image";
// import img from "@/public/zakat_authority.png";
// const CompanyLogos = () => {
//   const logos = [
//     {
//       src: "/stc_payy.png",
//       alt: "STC Pay",
//       width: 100,
//     },
//     {
//       src: "/alrajhi_bank.png",
//       alt: "Al Rajhi Bank",
//       width: 110,
//     },
//     {
//       src: "/geidea.png",
//       alt: "Geidea",
//       width: 100,
//     },
//     {
//       src: "/mada.png",
//       alt: "Mada",
//       width: 100,
//     },
//     {
//       src: "/urpay.png",
//       alt: "UrPay",
//       width: 90,
//     },
//   ];

//   return (
//     <section className="w-full bg-primary-300">
//       <div className=" mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
//           <div className="flex items-center justify-center w-32 md:w-40 lg:w-56 h-32">
//             <div className="relative flex items-center justify-center w-full h-full">
//               <Image
//                 src={img}
//                 alt="Logo"
//                 width={300}
//                 height={500}
//                 objectFit="contain"
//                 className="transition-opacity duration-300 hover:opacity-80"
//               />
//             </div>
//           </div>
//           {logos.map((logo, index) => (
//             <div
//               key={index}
//               className="flex items-center justify-center w-32 md:w-40 lg:w-40 h-32"
//             >
//               <div className="relative flex items-center justify-center w-full h-full">
//                 <Image
//                   src={logo.src}
//                   alt={logo.alt}
//                   width={300}
//                   height={300}
//                   // layout="fill"
//                   objectFit="contain"
//                   className="transition-opacity duration-300 hover:opacity-80"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CompanyLogos;

// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import { DndProvider, useDrag, useDrop } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";

// const ItemType = "LOGO";

// const DraggableLogo = ({ logo, index, moveLogo }: any) => {
//   const [, dragRef] = useDrag({
//     type: ItemType,
//     item: { index },
//   });

//   const [, dropRef] = useDrop({
//     accept: ItemType,
//     hover: (draggedItem: { index: number }) => {
//       if (draggedItem.index !== index) {
//         moveLogo(draggedItem.index, index);
//         draggedItem.index = index;
//       }
//     },
//   });

//   return (
//     <div
//       ref={(node) => dragRef(dropRef(node))}
//       className="flex items-center justify-center w-32 h-32 cursor-move"
//     >
//       <Image
//         src={logo.src}
//         alt={logo.alt}
//         width={100}
//         height={100}
//         objectFit="contain"
//         className="transition-opacity duration-300 hover:opacity-80"
//       />
//     </div>
//   );
// };

// const CompanyLogos = () => {
//   const [logos, setLogos] = useState([
//     { src: "/stc_payy.png", alt: "STC Pay", width: 100 },
//     { src: "/alrajhi_bank.png", alt: "Al Rajhi Bank", width: 110 },
//     { src: "/geidea.png", alt: "Geidea", width: 100 },
//     { src: "/mada.png", alt: "Mada", width: 100 },
//     { src: "/urpay.png", alt: "UrPay", width: 90 },
//     { src: "/stc_payy.png", alt: "STC Pay", width: 100 },
//   ]);

//   const moveLogo = (fromIndex: number, toIndex: number) => {
//     const updatedLogos = [...logos];
//     const [movedLogo] = updatedLogos.splice(fromIndex, 1);
//     updatedLogos.splice(toIndex, 0, movedLogo);
//     setLogos(updatedLogos);
//   };

//   return (
//     <DndProvider backend={HTML5Backend}>
//       <section className="w-full bg-primary-300 py-6">
//         <div className="mx-auto flex flex-wrap justify-center gap-6">
//           {logos.map((logo, index) => (
//             <DraggableLogo
//               key={index}
//               logo={logo}
//               index={index}
//               moveLogo={moveLogo}
//             />
//           ))}
//         </div>
//       </section>
//     </DndProvider>
//   );
// };

// export default CompanyLogos;

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { useSwipeable } from "react-swipeable";

// const SwipeableSlider: React.FC = () => {
//   const logos = [
//     { src: "/stc_payy.png", alt: "STC Pay" },
//     { src: "/alrajhi_bank.png", alt: "Al Rajhi Bank" },
//     { src: "/geidea.png", alt: "Geidea" },
//     { src: "/mada.png", alt: "Mada" },
//     { src: "/urpay.png", alt: "UrPay" },
//     { src: "/stc_payy.png", alt: "STC Pay" },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [visibleCount, setVisibleCount] = useState(4);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 640) {
//         setVisibleCount(2);
//       } else if (window.innerWidth < 770) {
//         setVisibleCount(3);
//       } else {
//         setVisibleCount(4);
//       }
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const handlers = useSwipeable({
//     onSwipedLeft: () => {
//       if (currentIndex < logos.length - visibleCount) {
//         setCurrentIndex(currentIndex + 1);
//       }
//     },
//     onSwipedRight: () => {
//       if (currentIndex > 0) {
//         setCurrentIndex(currentIndex - 1);
//       }
//     },
//     preventDefaultTouchmoveEvent: true,
//     trackTouch: true,
//     trackMouse: true,
//   });

//   const sliderStyle = {
//     transform: `translateX(-${(currentIndex / visibleCount) * 100}%)`,
//     transition: "transform 0.3s ease-in-out",
//     display: "flex",
//   };

//   return (
//     <div className="relative w-full mx-auto overflow-hidden" {...handlers}>
//       <div style={sliderStyle} className="flex">
//         {logos.map((logo, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 flex justify-center items-center"
//           >
//             <Image
//               src={logo.src}
//               alt={logo.alt}
//               width={150}
//               height={150}
//               className="object-contain"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SwipeableSlider;

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { useSwipeable } from "react-swipeable";

// const SwipeableSlider: React.FC = () => {
//   const logos = [
//     { src: "/stc_payy.png", alt: "STC Pay" },
//     { src: "/alrajhi_bank.png", alt: "Al Rajhi Bank" },
//     { src: "/geidea.png", alt: "Geidea" },
//     { src: "/mada.png", alt: "Mada" },
//     { src: "/urpay.png", alt: "UrPay" },
//     { src: "/stc_payy.png", alt: "STC Pay" },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [visibleCount, setVisibleCount] = useState(4);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 640) {
//         setVisibleCount(2);
//       } else if (window.innerWidth < 770) {
//         setVisibleCount(3);
//       } else {
//         setVisibleCount(4);
//       }
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const handlers = useSwipeable({
//     onSwipedLeft: () => {
//       if (currentIndex < logos.length - visibleCount) {
//         setCurrentIndex(currentIndex + 1);
//       }
//     },
//     onSwipedRight: () => {
//       if (currentIndex > 0) {
//         setCurrentIndex(currentIndex - 1);
//       }
//     },
//     preventDefaultTouchmoveEvent: true,
//     trackTouch: true,
//     trackMouse: true,
//   });

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex < logos.length - visibleCount ? prevIndex + 1 : 0
//       );
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [visibleCount, logos.length]);

//   const sliderStyle = {
//     transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
//     transition: "transform 0.3s ease-in-out",
//     display: "flex",
//   };

//   return (
//     <div className="relative w-full mx-auto overflow-hidden" {...handlers}>
//       <div style={sliderStyle} className="flex">
//         {logos.map((logo, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 flex justify-center items-center"
//           >
//             <Image
//               src={logo.src}
//               alt={logo.alt}
//               width={150}
//               height={150}
//               className="object-contain"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SwipeableSlider;
////////////////////////////////////////////////////////

// import React, { useState, useEffect } from "react";
// import Image from "next/image";

// const SwipeableSlider: React.FC = () => {
//   const logos = [
//     { src: "/stc_payy.png", alt: "STC Pay" },
//     { src: "/alrajhi_bank.png", alt: "Al Rajhi Bank" },
//     { src: "/geidea.png", alt: "Geidea" },
//     { src: "/mada.png", alt: "Mada" },
//     { src: "/urpay.png", alt: "UrPay" },
//   ];

//   const [offset, setOffset] = useState(0);
//   const [transition, setTransition] = useState("transform 0.3s linear");
//   const [visibleCount, setVisibleCount] = useState(4);

//   const logoWidth = 100 / visibleCount;

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 640) {
//         setVisibleCount(2);
//       } else if (window.innerWidth < 770) {
//         setVisibleCount(3);
//       } else {
//         setVisibleCount(4);
//       }
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setOffset((prevOffset) => prevOffset + 1);
//     }, 30);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const totalWidth = logoWidth * logos.length;

//     if (offset >= totalWidth) {
//       setTimeout(() => {
//         setTransition("none");
//         setOffset(0);
//       }, 300);

//       setTimeout(() => {
//         setTransition("transform 0.3s linear");
//       }, 350);
//     }
//   }, [offset, logoWidth, logos.length]);

//   const sliderStyle = {
//     transform: `translateX(-${offset}%)`,
//     transition: transition,
//     display: "flex",
//   };

//   return (
//     <div className="relative w-full mx-auto overflow-hidden">
//       <div style={sliderStyle} className="flex">
//         {[...logos, ...logos].map((logo, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 flex justify-center items-center"
//           >
//             <Image
//               src={logo.src}
//               alt={logo.alt}
//               width={150}
//               height={150}
//               className="object-contain"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SwipeableSlider;
// import React, { useState, useEffect } from "react";
// import Image from "next/image";

// const SwipeableSlider: React.FC = () => {
//   const logos = [
//     { src: "/zakat_authority.png", alt: "STC Pay" },
//     { src: "/stc_payy.png", alt: "STC Pay" },
//     { src: "/alrajhi_bank.png", alt: "Al Rajhi Bank" },
//     { src: "/geidea.png", alt: "Geidea" },

//     { src: "/urpay.png", alt: "UrPay" },
//     { src: "/mada.png", alt: "Mada" },
//   ];

//   const [offset, setOffset] = useState(0);
//   const [transition, setTransition] = useState("transform 0.3s linear");
//   const [visibleCount, setVisibleCount] = useState(4);

//   const logoWidth = 100 / visibleCount;

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 640) {
//         setVisibleCount(2);
//       } else if (window.innerWidth < 770) {
//         setVisibleCount(3);
//       } else {
//         setVisibleCount(4);
//       }
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, [setVisibleCount]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setOffset((prevOffset) => prevOffset + 0.4);
//     }, 50);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const totalWidth = logoWidth * logos.length;

//     if (offset >= totalWidth) {
//       setTimeout(() => {
//         setTransition("none");
//         setOffset(0);
//       }, 300);

//       setTimeout(() => {
//         setTransition("transform 0.3s linear");
//       }, 350);
//     }
//   }, [offset, logoWidth, logos.length]);

//   const sliderStyle = {
//     transform: `translateX(-${offset}%)`,
//     transition: transition,
//     display: "flex",
//   };

//   return (
//     <div className="relative w-full mx-auto overflow-hidden">
//       <div style={sliderStyle} className="flex">
//         {[...logos, ...logos].map((logo, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 flex justify-center items-center"
//           >
//             <Image
//               src={logo.src}
//               alt={logo.alt}
//               width={150}
//               height={150}
//               className="object-contain"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SwipeableSlider;
// import React, { useState, useEffect } from "react";
// import Image from "next/image";

// const SwipeableSlider: React.FC = () => {
//   const logos = [
//     { src: "/zakat_authority.png", alt: "Zakat Authority" },
//     { src: "/stc_payy.png", alt: "STC Pay" },
//     { src: "/alrajhi_bank.png", alt: "Al Rajhi Bank" },
//     { src: "/geidea.png", alt: "Geidea" },
//     { src: "/urpay.png", alt: "UrPay" },
//     { src: "/mada.png", alt: "Mada" },
//   ];

//   const [offset, setOffset] = useState(0);
//   const [transition, setTransition] = useState("transform 0.3s linear");
//   const [visibleCount, setVisibleCount] = useState(4);

//   const logoWidth = 100 / visibleCount;

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 640) {
//         setVisibleCount(2);
//       } else if (window.innerWidth < 770) {
//         setVisibleCount(3);
//       } else {
//         setVisibleCount(4);
//       }
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setOffset((prevOffset) => prevOffset + 0.9);
//     }, 100);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const totalWidth = logoWidth * logos.length;

//     if (offset >= totalWidth) {
//       setTimeout(() => {
//         setTransition("none");
//         setOffset(0);
//       }, 300);

//       setTimeout(() => {
//         setTransition("transform 0.3s linear");
//       }, 350);
//     }
//   }, [offset, logoWidth, logos.length]);

//   const sliderStyle = {
//     transform: `translateX(-${offset}%)`,
//     transition: transition,
//     display: "flex",
//   };

//   return (
//     <div className="relative w-full mx-auto overflow-hidden">
//       <div style={sliderStyle} className="flex">
//         {[...logos, ...logos].map((logo, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0 w-[calc(100%/4)] sm:w-[calc(100%/3)] md:w-[calc(100%/8)] flex justify-center items-center"
//             // className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 flex justify-center items-center"
//           >
//             <Image
//               src={logo.src}
//               alt={logo.alt}
//               width={150}
//               height={150}
//               className="object-contain"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SwipeableSlider;
// import React, { useState, useEffect } from "react";
// import Image from "next/image";

// const SwipeableSlider: React.FC = () => {
//   const logos = [
//     { src: "/zakat_authority.png", alt: "Zakat Authority" },
//     { src: "/stc_payy.png", alt: "STC Pay" },
//     { src: "/alrajhi_bank.png", alt: "Al Rajhi Bank" },
//     { src: "/geidea.png", alt: "Geidea" },
//     { src: "/urpay.png", alt: "UrPay" },
//     { src: "/mada.png", alt: "Mada" },
//   ];

//   const [offset, setOffset] = useState(0);
//   const [transition, setTransition] = useState("transform 0.3s linear");
//   const [visibleCount, setVisibleCount] = useState(4);

//   const logoWidth = 100 / visibleCount;

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 640) {
//         setVisibleCount(2);
//       } else if (window.innerWidth < 770) {
//         setVisibleCount(3);
//       } else {
//         setVisibleCount(4);
//       }
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setOffset((prevOffset) => prevOffset + 1);
//     }, 50); // Smooth scrolling

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const totalWidth = logoWidth * logos.length;

//     // If offset exceeds the total width of all logos, reset the slider
//     if (offset >= totalWidth) {
//       setTimeout(() => {
//         setTransition("none"); // Remove transition for seamless looping
//         setOffset((prevOffset) => prevOffset % totalWidth);
//       }, 300);

//       setTimeout(() => {
//         setTransition("transform 0.3s linear");
//       }, 350);
//     }
//   }, [offset, logoWidth, logos.length]);

//   const sliderStyle = {
//     transform: `translateX(-${offset}%)`,
//     transition: transition,
//     display: "flex",
//   };

//   return (
//     <div className="relative w-full mx-auto overflow-hidden">
//       <div style={sliderStyle}>
//         {/* Loop through logos array twice for smooth infinite scrolling */}
//         {[...logos, ...logos].map((logo, index) => (
//           <div
//             key={index}
//             className={`flex-shrink-0 w-[${logoWidth}%] flex justify-center items-center`}
//           >
//             <Image
//               src={logo.src}
//               alt={logo.alt}
//               width={150}
//               height={150}
//               className="object-contain"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SwipeableSlider;
// import React, { useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";

// const ProgressCarousel: React.FC = () => {
//   // Custom styles for Swiper
//   const customStyles = `
//     .swiper-wrapper {
//       width: 100%;
//       height: max-content !important;
//       padding-bottom: 64px !important;
//       transition-timing-function: linear !important;
//       position: relative;
//     }

//     .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
//       background: #4F46E5 !important;
//     }
//   `;

//   useEffect(() => {
//     // Add custom styles to the document
//     const styleSheet = document.createElement("style");
//     styleSheet.textContent = customStyles;
//     document.head.appendChild(styleSheet);

//     return () => {
//       document.head.removeChild(styleSheet);
//     };
//   }, []);

//   return (
//     <div className="w-full relative">
//       <Swiper
//         modules={[Autoplay, Pagination]}
//         className="progress-slide-carousel relative"
//         loop={true}
//         autoplay={{
//           delay: 1200,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           el: ".swiper-pagination",
//           type: "progressbar",
//         }}
//       >
//         <SwiperSlide>
//           <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
//             <span className="text-3xl font-semibold text-indigo-600">
//               Slide 1
//             </span>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
//             <span className="text-3xl font-semibold text-indigo-600">
//               Slide 2
//             </span>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
//             <span className="text-3xl font-semibold text-indigo-600">
//               Slide 3
//             </span>
//           </div>
//         </SwiperSlide>
//         <div className="swiper-pagination !bottom-2 !top-auto !w-80 right-0 mx-auto bg-gray-100"></div>
//       </Swiper>
//     </div>
//   );
// };

// export default ProgressCarousel;
// import React, { useState, useEffect } from "react";
// import Image from "next/image";

// const SwipeableSlider: React.FC = () => {
//   const slides = [
//     { src: "/zakat_authority.png", alt: "Zakat Authority" },
//     { src: "/stc_payy.png", alt: "STC Pay" },
//     { src: "/alrajhi_bank.png", alt: "Al Rajhi Bank" },
//     { src: "/geidea.png", alt: "Geidea" },
//     { src: "/urpay.png", alt: "UrPay" },
//     { src: "/mada.png", alt: "Mada" },
//   ];

//   const [offset, setOffset] = useState(0);
//   const [transition, setTransition] = useState("transform 0.3s linear");
//   const [visibleCount, setVisibleCount] = useState(4);

//   // Calculate width for each logo based on visible count
//   const slideWidth = 100 / visibleCount;

//   // Handle responsive behavior
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 640) {
//         setVisibleCount(2);
//       } else if (window.innerWidth < 770) {
//         setVisibleCount(3);
//       } else {
//         setVisibleCount(4);
//       }
//     };

//     handleResize(); // Initial call
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   // Automatic scrolling
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setOffset((prevOffset) => prevOffset + 1);
//     }, 50);

//     return () => clearInterval(interval);
//   }, []);

//   // Handle infinite scroll reset
//   useEffect(() => {
//     const totalWidth = slideWidth * slides.length;

//     if (offset >= totalWidth) {
//       setTimeout(() => {
//         setTransition("none"); // Disable transition for reset
//         setOffset((prevOffset) => prevOffset % totalWidth);
//       }, 300);

//       setTimeout(() => {
//         setTransition("transform 0.3s linear"); // Re-enable transition
//       }, 350);
//     }
//   }, [offset, slideWidth, slides.length]);

//   // Slider styles for transform
//   const sliderStyle = {
//     transform: `translateX(-${offset}%)`,
//     transition: transition,
//     display: "flex",
//   };

//   return (
//     <div className="relative w-full mx-auto overflow-hidden">
//       <div style={sliderStyle}>
//         {/* Double the slides array for smooth infinite scrolling */}
//         {[...slides, ...slides].map((slide, index) => (
//           <div
//             key={index}
//             style={{ width: `${slideWidth}%` }}
//             className="flex-shrink-0 flex justify-center items-center"
//           >
//             <Image
//               src={slide.src}
//               alt={slide.alt}
//               width={150}
//               height={150}
//               className="object-contain"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SwipeableSlider;
// import React, { useEffect, useState } from "react";
// import Image from "next/image";

// const SwipeableSlider: React.FC = () => {
//   const slides = [
//     { src: "/zakat_authority.png", alt: "Zakat Authority" },
//     { src: "/stc_payy.png", alt: "STC Pay" },
//     { src: "/alrajhi_bank.png", alt: "Al Rajhi Bank" },
//     { src: "/geidea.png", alt: "Geidea" },
//     { src: "/urpay.png", alt: "UrPay" },
//     { src: "/mada.png", alt: "Mada" },
//   ];

//   const [visibleCount, setVisibleCount] = useState(4);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 640) {
//         setVisibleCount(2);
//       } else if (window.innerWidth < 770) {
//         setVisibleCount(3);
//       } else {
//         setVisibleCount(4);
//       }
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const slideWidth = 100 / visibleCount;

//   return (
//     <div className="relative w-full overflow-hidden">
//       <style jsx>{`
//         @keyframes slide {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }

//         .slider-track {
//           display: flex;
//           width: 200%;
//           animation: slide 15s linear infinite; /* Reduced from 30s to 15s */
//         }

//         .slider-track:hover {
//           animation-play-state: paused;
//         }

//         .slide {
//           width: ${slideWidth}%;
//           flex-shrink: 0;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }
//       `}</style>

//       <div className="slider-track">
//         {/* First set of slides */}
//         {slides.map((slide, index) => (
//           <div key={`original-${index}`} className="slide">
//             <Image
//               src={slide.src}
//               alt={slide.alt}
//               width={150}
//               height={150}
//               className="object-contain"
//               priority={index < visibleCount}
//             />
//           </div>
//         ))}
//         {/* Duplicate set of slides */}
//         {slides.map((slide, index) => (
//           <div key={`duplicate-${index}`} className="slide">
//             <Image
//               src={slide.src}
//               alt={slide.alt}
//               width={150}
//               height={150}
//               className="object-contain"
//               loading="lazy"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SwipeableSlider;
// import React, { useEffect, useState } from "react";
// import Image from "next/image";

// const SwipeableSlider: React.FC = () => {
//   const slides = [
//     { src: "/zakat_authority.png", alt: "Zakat Authority" },
//     { src: "/stc_payy.png", alt: "STC Pay" },
//     { src: "/alrajhi_bank.png", alt: "Al Rajhi Bank" },
//     { src: "/geidea.png", alt: "Geidea" },
//     { src: "/urpay.png", alt: "UrPay" },
//     { src: "/mada.png", alt: "Mada" },
//     { src: "/zakat_authority.png", alt: "Zakat Authority" },
//     { src: "/stc_payy.png", alt: "STC Pay" },
//     { src: "/alrajhi_bank.png", alt: "Al Rajhi Bank" },
//     { src: "/geidea.png", alt: "Geidea" },
//     { src: "/urpay.png", alt: "UrPay" },
//     { src: "/mada.png", alt: "Mada" },
//   ];

//   const [visibleCount, setVisibleCount] = useState(4);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 640) {
//         setVisibleCount(2);
//       } else if (window.innerWidth < 770) {
//         setVisibleCount(3);
//       } else {
//         setVisibleCount(4);
//       }
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const slideWidth = 100 / visibleCount;

//   return (
//     <div className="relative w-full overflow-hidden">
//       <style jsx>{`
//         @keyframes slide {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }

//         .slider-track {
//           display: flex;
//           width: 50%;
//           animation: slide 5s linear infinite;
//           gap: 8px;
//         }

//         .slider-track:hover {
//           animation-play-state: paused;
//         }

//         .slide {
//           width: calc(${slideWidth}% - 8px);
//           flex-shrink: 0;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           padding: 0 4px;
//         }
//       `}</style>

//       <div className="slider-track">
//         {[...slides, ...slides, ...slides].map((slide, index) => (
//           <div key={`original-${index}`} className="slide">
//             <Image
//               src={slide.src}
//               alt={slide.alt}
//               width={150}
//               height={150}
//               className="object-contain"
//               priority={index < visibleCount}
//             />
//           </div>
//         ))}

//         {slides.map((slide, index) => (
//           <div key={`duplicate-${index}`} className="slide">
//             <Image
//               src={slide.src}
//               alt={slide.alt}
//               width={150}
//               height={150}
//               className="object-contain "
//               loading="lazy"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SwipeableSlider;
// import React, { useEffect, useState } from "react";
// import Image from "next/image";

// const SwipeableSlider: React.FC = () => {
//   const slides = [
//     { src: "/zakat_authority.png", alt: "Zakat Authority" },
//     { src: "/stc_payy.png", alt: "STC Pay" },
//     { src: "/alrajhi_bank.png", alt: "Al Rajhi Bank" },
//     { src: "/geidea.png", alt: "Geidea" },
//     { src: "/urpay.png", alt: "UrPay" },
//     { src: "/mada.png", alt: "Mada" },
//     { src: "/zakat_authority.png", alt: "Zakat Authority" },
//     { src: "/stc_payy.png", alt: "STC Pay" },
//     { src: "/alrajhi_bank.png", alt: "Al Rajhi Bank" },
//     { src: "/geidea.png", alt: "Geidea" },
//     { src: "/urpay.png", alt: "UrPay" },
//     { src: "/mada.png", alt: "Mada" },
//   ];

//   const [visibleCount, setVisibleCount] = useState(4);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 640) {
//         setVisibleCount(2);
//       } else if (window.innerWidth < 770) {
//         setVisibleCount(3);
//       } else {
//         setVisibleCount(4);
//       }
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const slideWidth = 100 / visibleCount;

//   return (
//     <div className="relative w-full overflow-hidden">
//       <style jsx>{`
//         @keyframes slide {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-1300%);
//           }
//         }

//         .slider-track {
//           display: flex;
//           width: 50%;
//           animation: slide 30s linear infinite;
//           gap: 8px;
//         }

//         .slide {
//           width: calc(${slideWidth}% - 8px);
//           flex-shrink: 0;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           padding: 0 4px;
//         }
//       `}</style>

//       <div className="slider-track">
//         {[...slides, ...slides, ...slides].map((slide, index) => (
//           <div key={`original-${index}`} className="slide">
//             <Image
//               src={slide.src}
//               alt={slide.alt}
//               width={150}
//               height={150}
//               className="object-contain"
//               priority={index < visibleCount}
//             />
//           </div>
//         ))}
//         {[...slides, ...slides].map((slide, index) => (
//           <div key={`duplicate-${index}`} className="slide">
//             <Image
//               src={slide.src}
//               alt={slide.alt}
//               width={150}
//               height={150}
//               className="object-contain"
//               loading="lazy"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SwipeableSlider;
//___________________
//

// import React, { useEffect, useState } from "react";
// import Image from "next/image";

// const SwipeableSlider: React.FC = () => {
//   const slides = [
//     { src: "/zakat_authority.png", alt: "Zakat Authority" },
//     { src: "/stc_payy.png", alt: "STC Pay" },
//     { src: "/alrajhi_bank.png", alt: "Al Rajhi Bank" },
//     { src: "/geidea.png", alt: "Geidea" },
//     { src: "/urpay.png", alt: "UrPay" },
//     { src: "/mada.png", alt: "Mada" },
//   ];

//   const [visibleCount, setVisibleCount] = useState(4);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 640) {
//         setVisibleCount(2);
//       } else if (window.innerWidth < 770) {
//         setVisibleCount(3);
//       } else {
//         setVisibleCount(4);
//       }
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   const slideWidth = 100 / visibleCount;
//   const repeatCount = 20;

//   return (
//     <div className="relative w-full overflow-hidden bg-primary-10">
//       <style jsx>{`
//         @keyframes slide {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-300%);
//           }
//         }

//         .slider-track {
//           display: flex;
//           width: calc(50%);
//           animation: slide 17s linear infinite;
//           gap: 8px;
//         }

//         .slide {
//           width: calc(${slideWidth}% - 8px);
//           flex-shrink: 0;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           padding: 0 4px;
//         }

//         img {
//           object-fit: contain;
//         }
//       `}</style>

//       <div className="slider-track py-2">
//         {[...Array(repeatCount)].map((_, i) => (
//           <div key={`original-${i}`} className="slide">
//             <Image
//               src={slides[i % slides.length].src}
//               alt={slides[i % slides.length].alt}
//               width={150}
//               height={150}
//               className="object-contain bg-primary-10 "
//               priority={i < visibleCount}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SwipeableSlider;
//
//
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useLocale } from "../layout";
const SwipeableSlider: React.FC = () => {
  const { currentLocale } = useLocale();

  const slides = [
    { src: "/partners/banks/Alrajhi.png", alt: "Urpay" },
    { src: "/partners/banks/commerce.png", alt: "Mada" },
    { src: "/partners/banks/Monsha_at.png", alt: "Geidea" },
    { src: "/partners/banks/SIB.png", alt: "Alrajhi" },
    { src: "/partners/banks/SNB.png", alt: "STC Pay" },
    { src: "/partners/banks/Zakat.png", alt: "Zatka" },
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
