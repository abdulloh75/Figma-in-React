import React from 'react'
import contact from '../../assets/contact.png'

const Contact = () => {
  return (
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl md:text-6xl font-light text-gray-300 mb-16">
          Contact Us
        </h2>

        <div className='flex mb-20 gap-10'>
          <div className='max-w-[410px] flex flex-col gap-4'>
            <input type="text" className='w-96 h-12 bg-[#F3F3F3] pl-6' placeholder='Name'/>
            <input type="phone" className='w-96 h-12 bg-[#F3F3F3] pl-6' placeholder='Phone Number'/>
            <input type="email" className='w-96 h-12 bg-[#F3F3F3] pl-6' placeholder='E-mail'/>
            <textarea className='w-96 h-36 bg-[#F3F3F3] pl-6 pt-2' placeholder='Message'>

            </textarea>
          </div>
          <img src={contact} alt="" />
        </div>

        <div className="flex justify-start">
          <button className="flex items-center gap-3 bg-gray-800 text-white text-sm tracking-widest px-8 py-4 hover:bg-gray-700 transition">
            Send Email <span>→</span>
          </button>
        </div>

      </div>
    </section>
  )
}

export default Contact