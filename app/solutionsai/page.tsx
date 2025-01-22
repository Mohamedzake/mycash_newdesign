"use client";
import Image from "next/image"
import Header from "../_components/Header"
import { TripleHeadings } from "../_components/TripleHeadings"

import solutions_img from "../../public/solutions_img.png"
import MyCashAdvantages from "../_components/MyCashAdvantages"
import ContactUs from "../_components/ContactUs"
import Footer from "../_components/Footer"
const Solutions = () => {
    return (
        <section>
            <div className="bg-solutions_bg bg-cover bg-no-repeat bg-center w-full aspect-square h-[40vh] md:h-[60vh]">
                <Header />

                <div className="flex flex-col justify-center items-center gap-6 w-full h-full text-center ">

                    <div className='text-2xl text-white flex flex-col gap-y-4'>
                        <h1 className="text-2xl font-bold md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                            حلول الذكاء الإصطناعي   
                        </h1>
                        <h2 className="text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
                                نقدم تقنيات مبتكرة تهدف إلى تحسين الكفاءة وتعزيز التجربة في مختلف المجالات، بدءًا من تحليل البيانات وصولاً إلى الأتمتة والتفاعل الذكي مع العملاء  
                        </h2>
                    </div>

                    <div className="flex flex-row justify-center gap-x-2 px-1">
                        <a
                            href="#"
                            className="block text-white py-3 px-4 text-xs xs:px-12 col-span-5 lg:text-lg bg-primary-green hover:bg-white hover:text-primary-green transition rounded-full font-bold">
                            تواصل معنا
                        </a>
                    </div>

                </div>


            </div>
            <div className="bg-[#FBFBFB]">
                <TripleHeadings title="عن" description="نظام ماي كاش AI" subheading="هو نظام متطور مصمم لتمكين تجار التجزئة من الحصول على الرؤى اللازمة للتفوق من خلال الاستفادة من الذكاء الاصطناعي وشبكة استراتيجية من الكاميرات، يحول البيانات الخام إلى رؤى قابلة للتنفيذ، مما يعزز الكفاءة، ويحسن تجربة العملاء، ويزي  من الربحي " />
            </div>
                
                <div className="text-center py-8 flex flex-col gap-y-4 bg-white">
                    <h3 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">مزايا ماي كاش AI الرئيسية</h3>
                    <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl">مميزات ماي كاش AI مُصممة لتسهيل إدارة عمليات المتاجر وتعزيز كفائتها</h4>
                </div>

                <div className="px-4  bg-white text-start grid sm:grid grid-cols-1 md:grid-cols-12 mx-auto">
                    
                    <div className="none md:col-span-1"></div>
                    
                    <div className="one col-span-3 md:flex md:flex-col md:justify-evenly md:items-stretch text-center md:text-start">
                        <div className="py-4 ">
                            <div className="text-primary-green font-bold sm:text-xl md:text-2xl lg:text-3xl ">01</div>
                            <h3 className="text-lg sm:text-xl  font-medium">التعرف على المنتجات تلقائياً والتكامل مع قاعدة البيانات</h3>
                        </div>

                        <div className="py-4 ">
                            <div className="text-primary-green font-bold sm:text-xl md:text-2xl lg:text-3xl ">02</div>
                            <h3 className="text-lg sm:text-xl  font-medium">التحليل الديموغرافي للعملاء</h3>
                        </div>

                        <div className="py-4">
                            <div className="text-primary-green font-bold sm:text-xl md:text-2xl lg:text-3xl ">03</div>
                            <h3 className="text-lg sm:text-xl  font-medium">مراقبة حركة العملاء وتحليلها لحظيًا </h3>
                        </div>
                    </div>

                    <div className="two col-span-3 md:order-2 md:flex md:flex-col md:justify-evenly md:items-stretch md:pr-12 text-center md:text-start">
                        <div className="py-4">
                            <div className="text-primary-green font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">04</div>
                            <h3 className="text-lg sm:text-xl  font-medium">لوحة أداء الممرات</h3>
                        </div>

                        <div className="py-4">
                            <div className="text-primary-green font-bold sm:text-xl md:text-2xl lg:text-3xl ">05</div>
                            <h3 className="text-lg sm:text-xl   font-medium">إنشاء الفواتير</h3>
                        </div>

                        <div className="py-4">
                            <div className="text-primary-green font-bold sm:text-xl md:text-2xl lg:text-3xl ">06</div>
                            <h3 className="text-lg sm:text-xl  font-medium">لوحات تحكم الأداء</h3>
                        </div>

                    </div>

                    <div className="three  md:col-span-5">
                        <Image className="block m-auto  w-9/12" src={solutions_img} alt="solutions img" />
                    </div>

                </div>

                <MyCashAdvantages />
                
                <ContactUs />
                <Footer />

        </section>
    )
}

export default Solutions