import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'
import SelectCountry from './Component/selectCountry';
import './ContactUs.css'

const ContactUs = () => {
  const [value, setValue] = useState()
  return (
    <section className='flex items-center'>
      <div className='p-9 '>
        {/* ContactUs heading  */}
        <div>
          <h1 className='text-2xl font-semibold text-black font-[Open Sans]'>Get In Touch With Us To Connect</h1>
          <p className='font-semibold text-lg'>Contact Us</p>
        </div>
        {/* all input  */}
        <div className='mt-6 flex'>
          {/* for user full name */}
          <form className='mr-6 mb-4'>
            <div className='input-container'>
              <input type="text" id="name" autocomplete="off" placeholder="Enter Your name" required className='text-input' />
              <label for="name" className='label'>
                Full Name
              </label>
              <p className='opacity-40'>Not more than 50 characters</p>
            </div>
          </form>
          {/* for user email  */}
          <form className='mr-6'>
            <div className='input-container'>
              <input type="text" id="name" autocomplete="off" placeholder="lorem@gmail.com" required className='text-input' />
              <label for="name" className='label'>
                Email Address
              </label>
              <p className='opacity-40 '>Please enter a valid email address</p>
            </div>
          </form>
        </div>
        {/* phone number input  */}
        <div className='flex '>
          <PhoneInput
            placeholder="Enter phone number"
            value={value}
            className="country-input-container"
            onChange={setValue}/>
          {/* select country  */}
          <div className='ml-6'>
            <SelectCountry />
          </div>
        </div>
        {/* Stages input  */}
        <div className='mt-9'>
          <form className='mr-6 my-4'>
            <div className='input-container'>
              <select className="select select-bordered w-full text-input text-sm">
                <option className=''>I have booked but registration is not done</option>
              </select>
              <label for="name" className='label'>
                Stages
              </label>
            </div>
          </form>
        </div>
        <button className='text-lg font-semibold text-white bg-[#01244A] px-24 rounded py-4 mt-5'>Submit</button>
      </div>
      <div>
        <img className='w-[420px] h-[370px]' src='https://i.ibb.co/Ph3N74M/Happy-announcement-pana.png'/>
      </div>
    </section>
  )
}

export default ContactUs