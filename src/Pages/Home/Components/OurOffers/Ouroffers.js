import React from 'react'

const Ouroffers = () => {
  return (
    <div>
      {/* our offers heading  */}
      <div className='container text-center mt-9 ' >
        <h1 className='text-3xl font-extrabold text-black pb-2 border-b-4 border-[#1A1A1A] mx-96'>Our Offerings</h1>
        <p className='text-base #1A1A1A my-4'>
          This whole purchase journey can be divided into three stages. For more details, <span className='text-[#002550] font-extrabold'>Click Here</span>
        </p>
      </div>

      <div className=' '>
        <div className="flex justify-center items-center">
          <p className="  h-[100px] w-1/3 text-center py-9 bg-[#F2F4F6]"><span className='bg-white p-3.5 rounded-full mr-2'>1</span> Pre-Booking </p>
          <p className="  h-[100px] w-1/3 py-9 text-center bg-[#CCD3DC] border-b-4 border-[#1A1A1A] ">
            <span className='bg-white p-3.5 rounded-full mr-2'>2</span>     Post-Booking & Pre-Registration 
          </p>
          <p className="  h-[100px] w-1/3 py-9 text-center bg-[#F2F4F6]">
            <span className='bg-white p-3.5 rounded-full mr-2'>3</span>  Post-Registration 
          </p>
        </div>
      </div>
    </div>
  )
}

export default Ouroffers