// import React from "react";
// import { useTranslations } from "next-intl";
// import img from "@/public/mobiles.png";
// import Image from "next/image";
// import im from "@/public/Frame.png";
// import svg from "@/public/svg2-removebg-preview.png";
// import svg1 from "@/public/left_clouds.png";
// import Link from "next/link";
// const  PromoSection: React.FC = () => {
//   const t = useTranslations("promosection");

//   return (
//     <section className="relative flex justify-center items-center px-4 sm:px-8 lg:px-20 bg-slate-50 mt-20 ">
//       <div className="absolute z-0 bottom-0 right-0">
//         <Image
//           src={svg}
//           placeholder="blur"
//           quality={80}
//           width={200} 
//           height={200}
//           className="h-80 lg:h-auto "
//           alt="Mountains and forests with two cabins"
//         />
//       </div>

//       <div className="absolute lg:bottom-0 left-0">
//         <Image
//           src={svg1}
//           width={200} 
//           height={200}

//           quality={80}
//           className="h-80 lg:h-auto "
//           alt="Mountains and forests with two cabins "
//         />
//       </div>
//       {/* Content Container */}
//       <div className="container mx-auto w-9/12 flex flex-col lg:flex-row items-center gap-20 lg:gap-8 justify-between ">


//         {/* Image Section (Appears First on Small Screens) */}
//         <div className="lg:w-1/2 flex justify-center lg:justify-start order-1 lg:order-1 ">
//           <div className="relative ">
//             {/* Single Image for the two phones */}
//             <Image src={img} alt="App Preview" className=" h-auto "          
//              width={500}
//              height={600}
// />
//           </div>
//         </div>


//         {/* Text Section */}
//         <div className="lg:w-1/2 text-center z-40 lg:text-start px-4  order-2 mb-20 lg:order-2">
//           <h2 className="text-2xl md:text-4xl font-bold text-primary-30 mb-4 text-primary-blue ">
//             {t("promoHeading")}
//           </h2>
//           <p className="text-lg md:text-2xl text-primary-30 text-primary-blue ">{t("promo_description")}</p>

//           {/* Call-to-action Button */}
//           <Link href="https://play.google.com/store/apps/details?id=com.codeIn.myCash" className="inline-block">
//             <Image
//               src={im}
//               alt="ctaText"
//               height={200}
//               width={180}
//               className="mt-10"
//             />
//           </Link>
//         </div>



//       </div>
//     </section>
//   );
// };

// export default PromoSection;



import React from "react";
import { useTranslations } from "next-intl";
// import img from "@/public/Frame.png";
import Image from "next/image";
import mobiles from "@/public/mobiles.png";
import im from "@/public/Frame.png";
// import im1 from "@/public/frame.jpeg";
import svg from "@/public/svg2-removebg-preview.png";
import svg1 from "@/public/left_clouds.png";
import Link from "next/link";
const PromoSection: React.FC = () => {
  const t = useTranslations("promosection");

  return (
    <section className="relative flex justify-center items-center px-4 sm:px-8 lg:px-20 bg-slate-50 mt-20">
      <div className="absolute z-0 bottom-0 right-0">
        <Image
          src={svg}
          // layout="fill"
          width={180}
          placeholder="blur"
          quality={80}
          className="h-80 lg:h-auto"
          alt="Mountains and forests with two cabins"
        />

      </div>
      <div className="absolute lg:bottom-0 left-0 hidden md:block">
        <Image
          src={svg1}
          // layout="fill"
          width={200}
          placeholder="blur"
          quality={80}
          className="h-80 lg:h-auto hidden lg:inline"
          alt="Mountains and forests with two cabins"
        />
      </div>
      {/* Content Container */}
      <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center gap-20 lg:gap-8 justify-between ">
        {/* Text Section */}
        <div className="lg:w-6/12 z-40 lg:text-end px-4  order-2 lg:order-1 ">
          <div className="text-center *:!leading-10">

            <h2 className="text-2xl md:text-3xl font-bold text-primary-30 mb-4 text-primary-blue ">
              {t("promoHeading")}
            </h2>
            <p className="text-lg md:text-xl text-primary-30 text-primary-blue ">{t("promo_description")}</p>

          </div>
          {/* Call-to-action Button */}
          <div className="flex justify-between sm:justify-center gap-4 my-4">
            <Link href="https://play.google.com/store/apps/details?id=com.codeIn.myCash" className="">
              <Image
                src={im}
                alt="ctaText"
                height={200}
                width={150}
                className=""
              />
            </Link>

            <Link href="https://mycashweb.mycashtest.com/" className="">
            <span className="bg-primary-green text-white font-semibold px-10 py-2 text-nowrap rounded-xl block border-primary-green border-2 hover:text-primary-green hover:bg-white transition">
                سجل الآن
            </span>
            </Link>

          </div>
        </div>

        {/* Image Section (Appears First on Small Screens) */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2">
          <div className="relative">
            {/* Single Image for the two phones */}
            <Image src={mobiles} alt="App Preview" className="max-w-full h-auto" />
          </div>
          <div className="absolute lg:bottom-0 left-0 md:hidden">
            <Image
              src={svg1}
              // layout="fill"
              width={140}
              placeholder="blur"
              quality={80}
              className="h-80 lg:h-auto hidden"
              alt="Mountains and forests with two cabins "
            />
          </div>

        </div>
      </div>
    </section>
  );
};
export default PromoSection;
