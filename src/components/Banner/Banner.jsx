import React from 'react'
import banner from '../../assets/banner.png'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const Banner = () => {
  return (
    <div className='flex items-center justify-between mx-auto container max-w-6xl'>
      <div>
        <h1 className='text-[#BDBDBD] text-6xl font-light mt-14'>PROJECT</h1>
        <h3 className='text-6xl font-bold text-[#333333]'>Lorum</h3>

        <div className='flex gap-10 mt-24'>
          <button className='w-14 h-14 border border-[#F2F2F2] flex items-center justify-center'><ArrowLeft /></button>
          <button className='w-14 h-14 bg-[#F9F9F9] flex items-center justify-center'><ArrowRight /></button>
        </div>
      </div>
      <div>
        <img src={banner} alt="" />
      </div>
    </div>
  )
}

export default Banner