import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faLaptop, faSearch, faUserGroup, faVideo } from '@fortawesome/free-solid-svg-icons'

import './header.css';
import { NavLink, Outlet } from 'react-router-dom';

function header(props) {

    // let navDarker='';
    // window.addEventListener('scroll', () => {
    //     navDarker = 'bg-waydarkerBlur';
    // })
    return (
      <>
        <header className='fixed top-0 left-0'>
            <nav className='w-screen h-7 mx-auto bg-waydarkerBlur flex flex-row justify-between px-2 lg:justify-around lg:h-20 lg:px-6'>
              {/* Left side */}
              <div className='flex flex-row items-center justify-between px-0 lg:px-5'>
                <h1 className='hidden font-bold text-2xl text-white pr-10 md:block'>betaseries</h1>
                <div className='flex flex-row justify-start items-center space-x-4 lg:space-x-6 text-white'>
                    <p className=' flex flex-row items-center space-x-2 text-chocolateBrayish text-sm lg:text-md hover:text-white hover:cursor-pointer'><NavLink to="/home" className='flex flex-row items-center space-x-2'><FontAwesomeIcon icon={faHome} />
                      <span className='hidden lg:block'>Home</span></NavLink>
                    </p>
                    <p className=' flex flex-row items-center space-x-2 text-chocolateBrayish text-sm lg:text-md hover:text-white hover:cursor-pointer'><NavLink to="/movie" className='flex flex-row items-center space-x-2'><FontAwesomeIcon icon={faLaptop} />
                      <span className='hidden lg:block'>Shows</span></NavLink>
                    </p>
                    <p className=' flex flex-row items-center space-x-2 text-chocolateBrayish text-sm lg:text-md hover:text-white hover:cursor-pointer'><NavLink to="/" className='flex flex-row items-center space-x-2'><FontAwesomeIcon icon={faVideo} />
                      <span className='hidden lg:block'>Movies</span></NavLink>
                    </p>
                    <p className=' flex flex-row items-center space-x-2 text-chocolateBrayish text-sm lg:text-md hover:text-white hover:cursor-pointer'><NavLink to="/" className='flex flex-row items-center space-x-2'><FontAwesomeIcon icon={faUserGroup} />
                      <span className='hidden lg:block'>Community</span></NavLink>
                    </p>
                </div>
              
              </div>
              {/* Right side */}
              <div className='flex flex-row justify-start items-center space-x-5'>
                <button className='  hidden signUp text-white px-3 py-1 border-none lg:block  hover:bg-black hover:text-white-500'>Sign up</button>
                <p className=' text-chocolateBrayish text-sm lg:text-md hover:text-white'>Sign in</p>
                <span className=' text-chocolateBrayish text-sm lg:text-md hover:text-white'>
                <FontAwesomeIcon icon={faSearch} />
                </span>
              </div>
        
          </nav>
            
        </header>
        <Outlet/>
      </>
    );
}

export default header;