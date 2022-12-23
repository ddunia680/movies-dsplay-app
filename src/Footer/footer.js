import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

import triangle from './img/triangle1.png';
import './footer.css';
function footer(props) {
    return (
        <div className='footer flex flex-col  lg:justify-between lg:flex-row lg:items-center'>
            {/* left side */}
            <div className='flex flex-col basis-[30%] bg-grayish pb-5 pl-5 pr-5 pt-2  xl:pb-40 xl:pl-40 xl:pt-10 xl:h-[25rem] xl:pl-40'>
                <h2 className='text-2xl my-5 text-white flex flex-row justify-center items-center xl:justify-start'>
                    <img src={triangle} alt='' className='w-[2rem] h-[2rem] mx-2' /> Betaseries</h2>
                <p className='text-lightGray text-sm text-center xl:text-left'>For 10 years of existence, BetaSeries has become your best ally for TV shows: manage your calendar, share your latest episodes watched and discover new shows within a one million member community.</p>

            </div>
            {/* Right side */}
            <div className='basis-[30%] bg-grayish pr-5 pt-1 pl-5 xl:pr-10 xl:pt-10 xl:pb-[8.5rem] xl:h-[25rem] xl:pr-40'>
                <h2 className='text-lightGray text-4xl py-4 flex flex-row justify-center space-x-2 items-center xl:justify-end'>
                    <FontAwesomeIcon icon={faTwitter}/>
                    <FontAwesomeIcon icon={faFacebook}/>
                    <FontAwesomeIcon icon={faInstagram}/>
                </h2>
                <h3 className='text-center text-sm text-lightGray py-2 xl:text-right '>Shows directory ·      Movies directory ·
                    API documentation · FAQ ·  Contact support</h3>
                <h3 className='text-center text-sm text-lightGray py-2 xl:text-right'>Legal information ·  Cookies · 
                    Terms ·  Personal data</h3>
            
                <h3 className='text-center text-sm text-lightGray py-2 xl:text-right '>&copy; 2022 BetaSeries</h3>
            </div>
        </div>
    );
}

export default footer;