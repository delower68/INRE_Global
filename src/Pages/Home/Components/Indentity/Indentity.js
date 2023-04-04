import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';

const Indentity = () => {
  return (
    <div className='flex justify-center items-center mt-9 p-3 bg-[#dce0e3]'>
      <div className='w-1/2'>
        <img className='h-[400px] w-[2500px]' src='https://i.ibb.co/bb1YLwp/image-27-8.png'/>
      </div>
      <div className='text-black opacity-75 ml-8 w-1/2'>
        <h1 className='font-[Open Sans] font-semibold text-4xl mb-6'>Who We Are</h1>
        <p className='text-justify'>The Indian real estate sector is resilient despite global headwinds. Returns are impressive and the sector is expected to reach US$ 1 trillion in market size by 2030 (Niti Aayog report, 2021). However, the whole real estate purchase journey is very tedious and takes more than 2 years on average. Further, as the ticket size of this investment is large, security and trust become quite critical. Problems compound when you are currently away from your purchase destination. If you are experiencing difficulties in the real estate purchase journey, we are here to make it fast and transparent.</p>
        <div className='flex items-center border border-black rounded p-3 w-[140px] mt-5 '>
        <button className=''>Contact Now</button>
        <p className='pt-1'><BsArrowRightShort/></p>
        </div>
      </div>
    </div>
  )
}

export default Indentity