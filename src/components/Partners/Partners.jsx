import React from 'react';
import './Partners.css';
// importing icons from react-icons 
import { AiOutlineGoogle, AiFillFacebook, AiOutlineAmazon, AiFillLinkedin } from 'react-icons/ai';
import { BsMicrosoft } from 'react-icons/bs';

const Partners = () => {
  return (
    <div id='partners'>
      {/* Container for Partners Section */}
      <div className="partnersContainer" data-aos="fade-up">
        {/* Partners Section Heading */}
        <h2>Our Partners In Business</h2>

        {/* Partners Section Description */}
        <p>Our partners are our treasured assets and the life-force behind our corporation, who have been with us through our decade of excellence by virtue of our commitment and passion.</p>

        {/* Company Icons */}
        <div className='companyIcons'>
          <AiOutlineGoogle className='companyIcon' />
          <AiFillFacebook className='companyIcon' />
          <AiOutlineAmazon className='companyIcon' />
          <AiFillLinkedin className='companyIcon' />
          <BsMicrosoft className='companyIcon' />
        </div>
      </div>
    </div>
  );
}

export default Partners;
