import { useTranslations } from 'next-intl';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import Image from 'next/image';
// import Image from 'next/image';

import 'swiper/css/effect-creative';

// Import Swiper styles
// import './styles.css';


import snb from '../../public/agreement/snb.png'
import mycash_snb from '../../public/agreement/mycash_snb.png'

import paymob from '../../public/agreement/Paymob.png'
import mycash_paymob from '../../public/agreement/mycash_paymob.png'





const Agreements = () => {
    const t = useTranslations("agreements");
    const swiperData = [{
        id: 1,
        rightimg: paymob,
        leftimg: mycash_paymob,
        title: t("title1"),
    }, {
        id: 2,
        rightimg: snb,
        leftimg: mycash_snb,
        title: t("title2"),

    }]
    return (

        <section className=' text-center mt-6'>
            <h1 className="text-lg font-bold md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl py-4 px-2 lg:py-8 text-primary-blue">
                {t("heading")}
            </h1>
            <Swiper navigation={false} centeredSlides={true} modules={[Navigation, Autoplay, EffectFade]}
                className="mySwiper"
                effect={"fade"} 
                speed={2000}
                // eslint-disable-next-line react/jsx-no-duplicate-props
                autoplay={{
                    delay: 5,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,

                }}>
                {swiperData.map((item) => (
                    <SwiperSlide key={item.id} className="bg-white">
                        <section className='m-auto container flex flex-col-reverse md:flex-row justify-center items-center bg-white  xs:py-4'>
                            <div className='right flex flex-col w-full justify-around items-center ' >
                                <Image src={item.rightimg} alt={item.title} width={100} height={100} className='w-[70%]  ' />
                                <p className={`px-4 text-base font-semibold leading-6 md:text-base lg:text-2xl md:!leading-[2] ${item.id === 2 ? "leading-10 py-4" : ""}`}>{item.title}</p>
                            </div>
                            <div className='left w-full flex justify-center items-center'>
                                <Image src={item.leftimg} alt={item.title} width={100} height={100} className='w-[80%] rounded-3xl bg-cover ' />
                            </div>

                        </section>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Agreements