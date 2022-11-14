import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faPlus, faStar } from '@fortawesome/free-solid-svg-icons';

import orphans from './img/orphans.jpg';
import './section1.css';

function section1(props) {
    const content = [
        {title:'COUNTRY', details: 'Brazil'},
        {title:'GENRES', details: 'Drama, Romance, Soap'},
        {title:'RUNTME', details: '40 minutes'},
        {title:'TOTAL RUNTIME', details: '103 hours 20 minutes'},
        {title:'STATUS', details: 'Ended'},
        {title:'NETWORK', details: 'TV Glovo'},
        {title:'SHOWRUNNER', details: 'Duca Rachid'},
    ]
    return (
        <div className='flex flex-col-reverse pt-20 mx-auto px-5 lg:container  lg:mx-auto lg:px-20 lg:flex-row lg:justify-evently'>
            {/* Left div */}
            <div className='flex flex-row justify-start mx-5 items-center space-x-2 flex-wrap lg:flex-col lg:items-end lg:justify-start'>
                {content.map(el => {
                    return <div className='flex flex-row flex-nowrap justify-start space-x-2 items-center lg:flex-col lg:px-5 lg:items-end lg:py-2' key={el.title}>
                                <h2 className='font-bold text-md text-white'>{el.title}</h2>
                                <p className='text-sm text-gray-300'>{el.details}</p>
                            </div>
                })}
            </div>
                {/* Middle Div */}
            <div className='flex flex-col flex-1 px-5'>
                <div className='flex flex-row justify-start items-center text-sm space-x-1 text-gray-300'>
                    <p>Home <span><FontAwesomeIcon icon={faArrowRightLong}/></span></p>
                    <p>Shows<span><FontAwesomeIcon icon={faArrowRightLong}/></span></p>
                    <p>Drama<span><FontAwesomeIcon icon={faArrowRightLong}/></span></p>
                    <p>Orfaas da Tena</p>
                </div>
                <h1 className='text-4xl text-left text-white font-bold py-3'>Orphans of a Nation</h1>
                <p className='text-left text-gray-300 text-lg'>Orfaas da Terra</p>

                <div className='flex flex-row justify-start items-center text-md space-x-5 my-3 text-lg text-gray-300'>

                    <div className=' flex flex-row justify-start space-x-1 text-yellow-500'>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                    </div>
                    <p>2019</p>
                    <p>121 members</p>
                    <p>1 season</p>
                    <p>155 episodes</p>
                </div>
                
                <p className='text-left text-white text-lg'>Diverse cultures, beliefs, dreams, accents and a single nation: Brazil. The couple Laila and Jamil disembark in the country to live the love that united them still in the Middle East.</p>

                <div className='flex flex-col w-fit h-fit my-5'> 
                    <span className='w-20 h-10 plusB flex flex-row justify-center items-center text-white hover:bg-gray-100 hover:text-gray-900'>
                        <FontAwesomeIcon icon={faPlus} className='text-sm'/>
                    </span>
                    <p className='text-md text-white'>Add</p>
            </div>
            </div>
                {/* Right div */}
            <div className='hidden lg:flex lg:flex-row'>
                <img src={orphans} alt=''/>
            </div>
            
        </div>
    );
}

export default section1;