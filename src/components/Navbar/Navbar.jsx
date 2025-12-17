import React from 'react'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='flex container mx-auto items-center justify-between h-28 max-w-6xl'>
      <div className="">
        <img src={logo} alt="" />
      </div>
      <ul className='flex items-center justify-between w-[60%]'>
        <li className='uppercase text-xs'>Main</li>
        <li className='uppercase text-xs'>GALLERY</li>
        <li className='uppercase text-xs'>PROJECTS</li>
        <li className='uppercase text-xs'>CERTIFICATIONS</li>
        <li className='uppercase text-xs'>COntacts</li>
      </ul>
    </div>
  )
}

export default Navbar