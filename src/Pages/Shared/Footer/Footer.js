import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';
import { FiPhoneCall } from 'react-icons/fi';
import { TbBrandTwitter } from 'react-icons/tb';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineLinkedin } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className='px-8 bg-[#002550] h-[380px] '>
            {/* footer top part  */}
            <div className='flex justify-between pt-9 '>
                {/* Project logo  */}
                <div>
                    <img className='h-[60px] w-[60px] mt-5' src='https://i.ibb.co/KNWCL9C/Screenshot-2023-04-03-at-3-30-04-PM.png' />
                </div>
                {/* service part 1 */}
                <div>
                    <div className="items-center justify-between" id="navbar-cta">
                        <ul className="flex flex-col p-2 rounded-lg text-white ">
                            <li>
                                <a href="#" className="block rounded font-bold text-2xl" aria-current="page">Company</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 rounded text-lg "> Home</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 rounded text-lg ">Our Offerings</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 rounded text-lg">Our Team</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 rounded text-lg ">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* service part 2  */}
                <div>
                    <div className="items-center justify-between " id="navbar-cta">
                        <ul className="flex flex-col p-2 rounded-lg text-white ">
                            <li>
                                <a href="#" className="block rounded font-bold text-2xl" aria-current="page">Useful Link</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 rounded text-lg "> Blogs</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2 rounded text-lg ">FAQ’s</a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* service part 3  */}
                <div>
                    <div className='flex justify-center items-center text-white pb-4'>
                        <p className='text-4xl text-white mr-5'><HiOutlineMail /></p>
                        <div>
                            <p className='font-extrabold  text-xl '>Email:</p>
                            <p className='text-xl font-normal'>support@inreglobal.com</p>
                        </div>
                    </div>
                    <div className='flex text-white'>
                        <p className='text-4xl text-white mr-5' ><FiPhoneCall /></p>
                        <div>
                            <p className='font-extrabold text-xl'>Phone:</p>
                            <p className=' font-normal leading-5'>+91 | 7019305889</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer bottom part   */}
            <div className='flex justify-between items-center mt-16'>
                <div className='text-white '>
                    <p className='font-semibold text-lg'>Copyright 2023. Designed by INRE Global</p>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                    <ul className='flex'>
                        <li className='flex justify-center items-center pr-7'>
                            <p className="block py-2  rounded text-white font-semibold pr-3.5 text-xl" ><AiOutlineLinkedin /></p>
                            <a href="#" className="block py-2  rounded text-white font-semibold" aria-current="page">LinkedIn</a>
                        </li>
                        <li className='flex justify-center items-center pr-7'>
                            <p className="block py-2  rounded text-white font-semibold pr-3.5 text-xl " ><AiOutlineFacebook /></p>
                            <a href="#" className="block py-2  rounded  font-semibold text-white">Facebook</a>
                        </li>
                        <li className='flex justify-center items-center pr-7'>
                            <p className="block py-2  rounded text-white font-semibold pr-3.5 text-xl" ><TbBrandTwitter /></p>
                            <a href="#" className="block py-2  rounded font-semibold text-white">Twitter</a>
                        </li>
                        <li className='flex justify-center items-center pr-7'>
                            <p className="block py-2  rounded text-white font-semibold pr-3.5 text-xl" ><AiOutlineInstagram /></p>
                            <a href="#" className="block py-2  rounded font-semibold text-white ">Instagram</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer