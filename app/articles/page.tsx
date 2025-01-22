import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <section className=' h-screen w-screen grid grid-row-12 place-items-center gap-6 '>
            {/* <div className='bg-red-500 rows-span-2'>
              <Image src='/mycash_logo.png' width={100} height={100} alt='logo' />
            </div> */}
            
            <div className='relative rows-span-2 border-2 bg-red-700 '>
              <Image src='/mycash_machine_lines.png' width={1000} height={500} alt='logo' className='block' />
              <div className='bg-sky-600 absolute bottom-[150px]  '>التحليل الديموغرافي للعملاء</div>
              <div className='bg-sky-600 absolute top-0 '>التحليل الديموغرافي للعملاء</div>
              <div className='bg-sky-600 absolute left-0 top-[70%]'>التحليل الديموغرافي للعملاء</div>
            </div>
          
      </section>
  )
    }
    



export default page