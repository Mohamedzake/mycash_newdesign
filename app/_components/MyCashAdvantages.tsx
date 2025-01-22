import cams from "../../public/cams.png"
import screen from "../../public/screen.png"
import pay from "../../public/pay.png"
import Image from "next/image"

import { TbDeviceCctv } from "react-icons/tb";
import { GiChart } from "react-icons/gi";
import { MdOutlineInsertChartOutlined } from "react-icons/md";

const MyCashAdvantages = () => {
  return (
    <section className="bg-white py-16 ">
      <h3 className='text-center py-12 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold'>مزايا ماي كاش AI تبني على عناصر أساسية</h3>

      <div className="container mx-auto px-2 sm:px-8 flex flex-col gap-y-8">

        {/* Feature Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14 ">

          {/* Feature Image */}
          <div className="flex justify-center items-center bg-slate-100 rounded-2xl order-2 lg:order-1">
            <div className="relative w-full max-w-2xl ">
              <Image
                src={cams}
                alt="System View"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Feature Content */}
          <div className="flex flex-col justify-center items-center lg:items-start p-2 sm:p-8 md:order-1 lg:order-2">
            <div className="bg-primary-green text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-4 px-4 py-4 rounded-full">
              <TbDeviceCctv />
            </div>

            <h3 className="text-center text-2xl lg:text-3xl lg:text-start font-semibold text-gray-900 mb-4 ">
              شبكة كاميرات متطورة
            </h3>
            <p className="text-[#202020] text-sm lg:text-base/[27px]  font-medium mb-6 text-center lg:text-start leading-tight">
              يعتمد النظام على مجموعة متنوعة من الكاميرات المتخصصة، بما في ذلك كاميرات الخروج والممرات، وكاميرا التحليل الديموغرافي، وكاميرا المدخل لالتقاط معلومات المنتجات، ومراقبة الفئات السكانية للعملاء، وتحليل حركة المرور.
            </p>
            <button className="bg-primary-green text-white rounded-full px-6 py-3 font-bold text-base hover:bg-white hover:text-primary-green border-2 border-primary-green transition duration-300">
              تواصل معنا
            </button>


          </div>

        </div>

        {/* Additional Sections (Feature 2 and 3) */}


        {/* Feature 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14 gap-y-8 ">
          {/* Feature Image */}


          {/* Feature Content */}
          <div className="flex flex-col justify-center items-center lg:items-start p-2 sm:p-8 md:order-1">
            <div className="bg-primary-green text-white text-2xl md:text-3xl lg:text-4xl  font-bold mb-4 px-4 py-4 rounded-full">
              <GiChart />
            </div>
            <h3 className="text-center text-2xl lg:text-3xl lg:text-start font-semibold text-gray-900 mb-4">
              المعالجة المعززة بالذكاء الإصطناعي
            </h3>
            <p className="text-[#202020] text-sm lg:text-base/[27px] font-medium mb-6 text-center lg:text-start">
              نماذج الذكاء الاصطناعي المتقدمة تقوم بمعالجة بيانات الكاميرات، وتحويل المرئيات إلى رؤى قابلة للتنفيذ
            </p>
            <button className="bg-primary-green text-white rounded-full px-6 py-3 font-bold text-base hover:bg-white hover:text-primary-green border-2 border-primary-green transition duration-300">
              تواصل معنا
            </button>

          </div>


          <div className="flex justify-center items-center bg-slate-100 rounded-2xl md:order-2">
            <div className="relative w-full max-w-2xl ">
              <Image
                src={screen}
                alt="System View"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-14">

          {/* Feature Image */}
          <div className="flex justify-center items-center bg-slate-100 rounded-2xl order-2 lg:order-1">
            <div className="relative w-full max-w-2xl">
              <Image
                src={pay}
                alt="System View"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Feature Content */}
          <div className="flex flex-col justify-center items-center lg:items-start p-2 sm:p-8 md:order-1 lg:order-2">
            <div className="bg-primary-green text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-4 px-4 py-4 rounded-full">
              <MdOutlineInsertChartOutlined />
            </div>
            <h3 className="text-end text-2xl lg:text-3xl lg:text-end font-semibold text-gray-900 mb-4">
              قاعدة بيانات مركزية
            </h3>
            <p className="text-[#202020] text-sm lg:text-base/[27px] font-medium  mb-6 text-start lg:text-start">
              تُدمج جميع البيانات في قاعدة بيانات مركزية، مما يضمن رؤية موحدة وشاملة لعمليات المتجر.
            </p>

            <button className="bg-primary-green text-white rounded-full px-6 py-3 font-bold text-base hover:bg-white hover:text-primary-green border-2 border-primary-green transition duration-300">
              تواصل معنا
            </button>
          </div>


        </div>

      </div>

    </section>
  )
}

export default MyCashAdvantages