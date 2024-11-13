import React from 'react'
import logo from '../assets/logo.png'

export default function Header() {
  return (
    <div className='flex flex-col justify-center items-center gap-2 py-2'>
        <div>
            <img className='w-[300px]' src={logo} alt="" />
        </div>
        <h2 className='text-gray-400'>Journalism Without Fear or Favour</h2>


    </div>
  )
}
