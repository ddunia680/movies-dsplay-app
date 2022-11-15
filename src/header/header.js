import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faLaptop, faSearch, faUserGroup, faVideo } from '@fortawesome/free-solid-svg-icons'

import './header.css';

function header(props) {
    return (
        <div>
            <nav className='header w-screen h-7 mx-auto px-0 bg-waydarkerBlur flex flex-row justify-between px-2 lg:justify-around lg:h-20 lg:px-6'>
          {/* Left side */}
          <div className='flex flex-row items-center justify-between px-0 lg:px-5'>
            <h1 className='hidden font-bold text-2xl text-white pr-10 md:block'>betaseries</h1>
            <div className='flex flex-row justify-start items-center space-x-4 lg:space-x-6 text-white'>
                <p className=' flex flex-row items-center space-x-2 text-chocolateBrayish text-sm lg:text-md hover:text-white hover:cursor-pointer'><FontAwesomeIcon icon={faHome} />
                  <span className='hidden lg:block'>Home</span>
                </p>
                <p className=' flex flex-row items-center space-x-2 text-chocolateBrayish text-sm lg:text-md hover:text-white hover:cursor-pointer'><FontAwesomeIcon icon={faLaptop} />
                  <span className='hidden lg:block'>Shows</span>
                </p>
                <p className=' flex flex-row items-center space-x-2 text-chocolateBrayish text-sm lg:text-md hover:text-white hover:cursor-pointer'><FontAwesomeIcon icon={faVideo} />
                  <span className='hidden lg:block'>Movies</span>
                </p>
                <p className=' flex flex-row items-center space-x-2 text-chocolateBrayish text-sm lg:text-md hover:text-white hover:cursor-pointer'><FontAwesomeIcon icon={faUserGroup} />
                  <span className='hidden lg:block'>Community</span>
                </p>
            </div>
            
          </div>
          {/* Right side */}
          <div className='flex flex-row justify-start items-center space-x-5'>
            <button className='  hidden signUp text-white px-3 py-1 border-none lg:block  hover:bg-white hover:text-gray-500'>Sign up</button>
            <p className=' text-chocolateBrayish text-sm lg:text-md hover:text-white'>Sign in</p>
            <span className=' text-chocolateBrayish text-sm lg:text-md hover:text-white'>
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </div>
        
      </nav>
            
        </div>
    );
}

export default header;