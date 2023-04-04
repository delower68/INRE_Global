import React from 'react';
import OurOffersData from "../../../../Fake_Data/OurOffers_data";
import { BsArrowRightShort } from 'react-icons/bs';
import './OurOffers.css'


const Ouroffers = () => {
  return (
    <div className='mb-5'>
      {/* our offers heading  */}
      <div className='container text-center mt-9 ' >
        <h1 className='text-3xl font-extrabold text-black pb-2 border-b-4 border-[#1A1A1A] mx-96'>Our Offerings</h1>
        <p className='text-base #1A1A1A my-4'>
          This whole purchase journey can be divided into three stages. For more details, <span className='text-[#002550] font-extrabold'>Click Here</span>
        </p>
      </div>
      {/* tab section  */}
      <div className="flex justify-center items-center mb-9">
        <p className="  h-[100px] w-1/3 text-center py-9 bg-[#F2F4F6]"><span className='bg-white p-3.5 rounded-full mr-2'>1</span> Pre-Booking </p>
        <p className="  h-[100px] w-1/3 py-9 text-center bg-[#CCD3DC] border-b-4 border-[#1A1A1A] ">
          <span className='bg-white p-3.5 rounded-full mr-2'>2</span>     Post-Booking & Pre-Registration
        </p>
        <p className="  h-[100px] w-1/3 py-9 text-center bg-[#F2F4F6]">
          <span className='bg-white p-3.5 rounded-full mr-2'>3</span>  Post-Registration
        </p>
      </div>

      {/* offers cards  */}
      <div className='grid gap-3 xl:grid-cols-3  h-[560px] rounded-lg ' >
        {
          OurOffersData?.OurOffersData.map(data =>
            <div className='shadow-2xl	'>
            <div className='p-5  h-[560px]   rounded-lg'>
              <img className='w-[380px] h-[280px] mb-7' src={data?.Product_img} />
              <p className='text-2xl font-semibold mb-4'>{data?.Title}</p>
              <p className='text-justify h-[100px]'>{data?.Details}</p>
              <div className='flex justify-between items-center mt-5  '>
              <div className='flex items-center border border-black rounded p-3 w-[140px] '>
                <button className=''>Contact Now</button>
                <p className='pt-1'><BsArrowRightShort /></p>
              </div>
              <div className=''>
              {
                data?.project_price &&
                <p className=''>{data?.project_price}</p>
              }
              </div>
              
              </div>
            </div>
            </div>

          )
        }
      </div>
    </div>
  )
}

export default Ouroffers