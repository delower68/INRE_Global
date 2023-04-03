import React from 'react';
import './ContactUs.css'

const ContactUs = () => {
  return (
    <div className='p-9 bg-red-200'>
      <div>
        <h1 className='text-xl font-semibold text-black font-[Open Sans]'>Get In Touch With Us To Connect</h1>
        <p>Contact Us</p>
      </div>
      <div className='mt-6 flex'>
        {/* for user full name */}
        <form className='mr-6'>
          <div className='input-container'>
            <input type="text" id="name" autocomplete="off" placeholder="Enter Your name" required className='text-input'/>
            <label for="name" className='label'>
              Full Name
            </label>
          </div>
        </form>
        {/* for user email  */}
        <form>
          <div className='input-container'>
            <input type="text" id="name" autocomplete="off" placeholder="lorem@gmail.com" required className='text-input'/>
            <label for="name" className='label'>
              Email Address
            </label>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactUs