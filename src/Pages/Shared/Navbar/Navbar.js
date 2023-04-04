import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="bg-white shadow-lg ">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto pt-3 pb-1">
                    <a className="flex items-center">
                        <img className='h-[60px] w-[60px]' src="https://i.ibb.co/gP64xPy/Screenshot-2023-04-03-at-2-15-55-AM.png" /> 
                    </a>
                    <div className="flex md:order-2">
                        <button type="button" className="text-white bg-[#002550]   rounded-lg text-sm px-4 py-2 text-center mr-3 ">Register Now</button>
                        <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
                            <li>
                                <a href="#" className="block py-2 px-3  text-black rounded border-b-4 border-[#1A1A1A] " aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2  text-black rounded  ">Our Offerings</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2  text-black rounded ">Our Team</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2  text-black rounded  ">Contact Us</a>
                            </li>
                            <li>
                                <a href="#" className="block py-2  text-black rounded  ">Blogs</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar