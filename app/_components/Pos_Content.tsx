import Image from 'next/image'
import React from 'react'
import solutions_img from "../../public/solutions_img.png";
const Pos = () => {
  return (
    <section>
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
    </section>
  )
}

export default Pos