"use client";
import Image from "next/image"
import Header from "../_components/Header"

import pos_main_img from "../../public/pos_main_img.png"
import Footer from "../_components/Footer"
import ContactUs from "../_components/ContactUs";
const page = () => {
    return (
        <section>
            <div className="bg-solutions_bg bg-cover bg-no-repeat bg-center w-full aspect-square h-[40vh] md:h-[60vh]">
                <Header />

                <div className=" flex flex-col justify-center items-center gap-6 w-full h-full text-center ">

                    <div className='text-2xl text-white flex flex-col gap-y-4'>
                        <h1 className=" text-2xl font-bold md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                                حلول المدفوعات
                        </h1>
                        <h2 className="text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
                            نقدم لك تجربة سهلة وفعّالة لإتمام عمليات البيع بكل سلاسة مع أنظمة مبتكرة تجمع بين الأمان والسرعة لتبسيط إدارة المعاملات التجارية
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

                


                <div className=" px-4  text-start grid py-16 sm:grid grid-cols-1 md:grid-cols-12 mx-auto">
                    
                    <div className="hidden md:block md:col-span-1"></div>
                    
                    <div className="one col-span-2 md:flex md:flex-col md:justify-evenly md:items-stretch text-center md:text-start">
                        <div className="py-4 flex flex-col sm:gap-y-2 md:gap-y-3 gap-y-4">
                            <div className="text-primary-green font-bold sm:text-xl md:text-2xl lg:text-3xl ">01</div>
                            <h3 className="text-lg sm:text-xl font-medium">إدارة المشتريات</h3>
                            <h5 className="text-base sm:text-sm font-medium">تحكم كامل في أوامر الشراء</h5>
                        </div>

                        <div className="py-4 flex flex-col sm:gap-y-2 md:gap-y-3 gap-y-4">
                            <div className="text-primary-green font-bold sm:text-xl md:text-2xl lg:text-3xl ">02</div>
                            <h3 className="text-lg sm:text-xl font-medium">إدارة المخزون</h3>
                            <h5 className="text-base sm:text-sm font-medium">مراقبة دقيقة للكميات و معدلات الطلب</h5>

                        </div>

                        <div className="py-4 flex flex-col sm:gap-y-2 md:gap-y-3 gap-y-4">
                            <div className="text-primary-green font-bold sm:text-xl md:text-2xl lg:text-3xl ">03</div>
                            <h3 className="text-lg sm:text-xl font-medium">إدارة ملفات العملاء </h3>
                            <h5 className="text-base sm:text-sm font-medium">الحصول على تقارير حول عمليات العملاء</h5>

                        </div>
                    </div>

                    <div className="two  col-span-3 lg:col-span-2 md:order-2 md:flex md:flex-col md:justify-evenly md:items-stretch md:pr-12 text-center md:text-start">
                    
                    <div className="py-4 flex flex-col sm:gap-y-2 md:gap-y-3 gap-y-4">
                    <div className="text-primary-green font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">04</div>
                            <h3 className="text-lg sm:text-xl font-medium">نظام نقاط بيع سحابي</h3>
                            <h5 className="text-base sm:text-sm font-medium">إمكانية الربط الرقمي و تخزين كافة العمليات</h5>
                        </div>

                        <div className="py-4 flex flex-col sm:gap-y-2 md:gap-y-3 gap-y-4">
                            <div className="text-primary-green font-bold sm:text-xl md:text-2xl lg:text-3xl ">05</div>
                            <h3 className="text-lg sm:text-xl font-medium">ملفات الموردين</h3>
                            <h5 className="text-base sm:text-sm font-medium">لوحة تحكم مخصصة لعمليات سلسلة التوريد</h5>

                        </div>

                        <div className="py-4 flex flex-col sm:gap-y-2 md:gap-y-3 gap-y-4">
                            <div className="text-primary-green font-bold sm:text-xl md:text-2xl lg:text-3xl ">06</div>
                            <h3 className="text-lg sm:text-xl font-medium">الصلاحيات</h3>
                            <h5 className="text-base sm:text-sm font-medium">تحديد الصلاحيات و المهام الوظيفية للموظفين</h5>

                        </div>

                        <div className="py-4 flex md:hidden flex-col items-center sm:gap-y-2 md:gap-y-3 gap-y-4 pb-12">
                            <div className="text-primary-green font-bold sm:text-xl md:text-2xl lg:text-3xl ">07</div>
                            <h3 className="text-lg sm:text-xl font-medium">الصلاحيات</h3>
                            <h5 className="text-base sm:text-sm font-medium">تحديد الصلاحيات و المهام الوظيفية للموظفين</h5>
                        </div>

                    </div>

                    <div className="three md:col-span-6 pt-20 my-auto">
                        <Image className="block m-auto  w-12/12" src={pos_main_img} alt="solutions img" />
                    </div>


                </div>

                <div className="py-4 hidden md:flex flex-col items-center sm:gap-y-2 md:gap-y-3 gap-y-4 pb-12">
                    <div className="text-primary-green font-bold sm:text-xl md:text-2xl lg:text-3xl ">07</div>
                    <h3 className="text-lg sm:text-xl font-medium">الصلاحيات</h3>
                    <h5 className="text-base sm:text-sm font-medium">تحديد الصلاحيات و المهام الوظيفية للموظفين</h5>
                </div>
            <ContactUs />
            <Footer />

        </section>
    )
}

export default page