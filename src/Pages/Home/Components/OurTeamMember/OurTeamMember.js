import React from 'react';
import Team_member_data from "../../../../Fake_Data/Team_member_data"

const OurTeamMember = () => {
  return (
    <div>
      {/* our offers heading  */}
      <div className='container text-center mt-9 ' >
        <h1 className='text-3xl font-extrabold text-black pb-2 border-b-4 border-[#1A1A1A] mx-80'>Our Team Members</h1>
      </div>
      <div className='grid gap-3 xl:grid-cols-3  h-[600px] rounded-lg my-7 '>
        {
          Team_member_data?.Team_member_data?.map(data =>
            <div className='shadow-2xl	'>
              <div className='p-5 h-[560px] rounded-lg'>
                <img className='w-[410px] h-[300px] mb-7' src={data?.Profile_photo} />
                <p className='text-2xl font-semibold mb-4'>{data?.Name}</p>
                <p className='text-justify h-[100px] opacity-50'>{data?.Details}</p>
                <p className='text-right my-16  text-[#002550] text-base'>View More</p>
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default OurTeamMember