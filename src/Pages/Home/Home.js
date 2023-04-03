import React from 'react'
import Blogs from './Components/Blogs/Blogs'
import ContactUs from './Components/ContactUs/ContactUs'
import Indentity from './Components/Indentity/Indentity'
import Ouroffers from './Components/OurOffers/Ouroffers'
import OurTeamMember from './Components/OurTeamMember/OurTeamMember'
import RealEstate from './Components/RealEstate/RealEstate'

const Home = () => {
  return (
    <div className='mx-48'>
        <RealEstate/>
        <Indentity/>
        <Ouroffers/>
        <OurTeamMember/>
        <Blogs/>
        <ContactUs/>
    </div>
  )
}

export default Home