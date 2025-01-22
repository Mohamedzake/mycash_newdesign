"use client";

import Header from "./Header"

const OurVisionIntro = () => {
    return (
        <section className="">
            <div className="bg-herobg bg-cover bg-no-repeat bg-center w-full aspect-[1.3/1] xl:h-[488px]">
                <Header />
                <div className="flex flex-col justify-center items-center gap-6 w-full h-full text-center">

                    <div className='text-2xl text-white flex flex-col gap-y-4 xl:-mt-30 '>
                        <h2 className="text-2xl font-bold md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl ">
                            عن ماي كاش
                        </h2>
                        <p className="w-[95%] lg:w-[50%] m-auto text-xs xs:text-base sm:text-lg leading-6 lg:text-xl sm:leading-10 lg:leading-10">أُسِّستْ ماي كاش لـ تلبي الاحتياج الذي تطلبه النمو المتسارع في قطاع الأعمال في المملكة. حيث طورنا نظامًا لتحسين طرق إدارة المدفوعات وإصدار فواتير المبيعات بسلاسة.
                        تستخدم ماي كاش أحدث تقنيات الحوسبة السحابية لتقديم حلول فعالة ومرنة، مما يجعلها الخيار المثالي للأعمال الراغبة في تعزيز كفاءتها التشغيلية.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurVisionIntro