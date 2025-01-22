import Image from 'next/image'
import React from 'react'
import vision from "@/public/vision.png"
import mission from "@/public/mission.png"
import { PiLightbulbFilamentLight } from "react-icons/pi";

import { TripleHeadings } from './TripleHeadings'
const OurVisionBody = () => {
    return (
        <div className='w-[90%] m-auto pb-20'>
            <TripleHeadings description="رؤيتنا ومهمتنا" />
            {/* Feature Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14 lg:gap-y-8 ">
                {/* Feature Image */}


                {/* Feature Content */}
                <div className="flex flex-col justify-center items-center lg:items-start p-2 sm:p-8 md:order-1 -mt-9">
                    <div className="bg-primary-green px-2 py-2 lg:px-2 lg:py-2 rounded-full text-white text-3xl md:text-4xl font-bold mb-4">
                        <PiLightbulbFilamentLight />
                    </div>

                    <h3 className="text-center  text-2xl sm:text-3xl lg:text-3xl lg:text-start font-semibold mb-4 flex flex-col md:flex-row md:items-center gap-x-4 text-primary-green ">رؤيتنا</h3>


                    <p className="text-[#202020] text-sm sm:text-base md:text-lg lg:text-base xl:text-lg font-medium  text-center lg:text-start">
                        تحقيق الريادة في تمكين الشركات من خلال التكنولوجيا، وإحداث تأثير إيجابي ومستدام في السوق المحلي
                    </p>
                </div>


                <div className="flex justify-center items-center  rounded-2xl md:order-2 mb-20 lg:mb-0">
                    <div className="relative w-full max-w-2xl ">
                        <Image
                            src={mission}
                            alt="System View"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14">

                {/* Feature Image */}
                <div className="flex justify-center items-center rounded-2xl order-2 lg:order-1">
                    <div className="relative w-full max-w-2xl">
                        <Image
                            src={vision}
                            alt="System View"
                            className="w-full h-auto"
                        />
                    </div>
                </div>

                {/* Feature Content */}
                <div className="flex flex-col justify-center items-center lg:items-start p-2 sm:p-8 md:order-1 lg:order-1">
                    <div className="bg-primary-green px-2 py-2 lg:px-2 lg:py-2 rounded-full text-white text-3xl md:text-4xl font-bold mb-4">
                        <PiLightbulbFilamentLight />
                    </div>
                    <h3 className="text-center  text-2xl sm:text-3xl lg:text-3xl lg:text-start font-semibold mb-4 flex flex-col md:flex-row md:items-center gap-x-4 text-primary-green ">مهمتنا</h3>
                    <p className="text-[#202020] text-sm sm:text-base md:text-lg lg:text-base xl:text-lg font-medium mb-6 text-center lg:text-start">
                        تقديم حلول تكنولوجية مبتكرة تُبسّط إدارة نقاط البيع، وتسهّل معالجة المدفوعات الرقمية، وتنظم العمليات المالية بشكل متكامل
                    </p>
                </div>

            </div>



            {/* Feature 2 */}



        </div>
    )
}

export default OurVisionBody