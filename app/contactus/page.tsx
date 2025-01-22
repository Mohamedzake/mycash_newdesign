"use client";
import Header from "../_components/Header"

import ContactUs from "../_components/ContactUs"
import Footer from "../_components/Footer"
const page = () => {
    return (
        <section>
          <div className=" bg-solutions_bg bg-cover bg-no-repeat bg-center w-full aspect-square h-[40vh] md:h-[60vh]">
              <Header />

              <div className=" flex flex-col justify-center items-center gap-6 w-full h-full text-center ">

                  <div className='text-2xl text-white flex flex-col gap-y-4'>
                      <h1 className="text-2xl font-bold md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                          حلول المبيعات   
                      </h1>
                      <h2 className="text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">
                          تُمكّنك من تحسين تجربة البيع، مع أدوات ذكية لتحليل سلوك العملاء، وإدارة المخزون، وتوفير تقارير دقيقة لحظية.
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
              
            <div className="form-content">
              <div></div>
            </div>
          <ContactUs />
          <Footer />
        </section>
    )
}

export default page