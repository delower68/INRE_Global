import React from 'react';
import Blogs_data from '../../../../Fake_Data/Blogs';
import { BsArrowRightShort } from 'react-icons/bs';
import { RiCalendar2Fill } from 'react-icons/ri';


const Blogs = () => {
  return (
    <div className='mt-16 mb-20'>
      <div className='container text-center my-9 ' >
        <h1 className='text-3xl font-extrabold text-black pb-2 border-b-4 border-[#1A1A1A] mx-96'>Blogs</h1>
      </div>
      <div className='grid gap-3 xl:grid-cols-3  h-[600px] rounded-lg my-9  '>
        {
          Blogs_data?.Blogs_data?.map(data =>
            <div className='shadow-2xl mb-5'>
              <div className='p-5 h-[660px] rounded-lg'>
                <img className='w-[410px] h-[300px] mb-7' src={data?.Profile_photo} />
                <p className='text-base mb-4'>{data?.Location}</p>
                <div className='flex justify-between'>
                  <div className='flex justify-center items-center mb-4'>
                    <p className='mr-2'><RiCalendar2Fill/></p>
                    <p className='text-base font-semibold '>{data?.Date}</p>
                  </div>
                  <p className='text-base font-semibold mb-4'>{data?.Poster}</p>
                </div>
                <p className='text-xl font-semibold mb-4'>{data?.Title}</p>
                <p className='text-justify h-[100px] opacity-50'>{data?.Details}</p>
                <div className='flex items-center border border-black rounded p-3 w-[140px] '>
                  <button className=''>View More</button>
                  <p className='pt-1'><BsArrowRightShort /></p>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Blogs