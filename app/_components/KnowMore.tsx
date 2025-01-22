import Link from 'next/link'
import React from 'react'

const KnowMore = () => {
  return (
    <div>
        <Link href="/"
         className="block text-primary-green text-sm py-3 font-bold w-2/6 rounded-full border-2 border-primary-green xs:text-base md:text-md md:w-2/6 md:text-xs lg:py-3 lg:text-[12.52px] lg:text-sm xl:text-base hover:bg-primary-green hover:text-white transition"
        >Hello</Link>
    </div>
  )
}

export default KnowMore;