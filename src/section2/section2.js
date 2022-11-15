import React from 'react';

import './section2.css';
import orphans from '../Section1/img/orphans.jpg';
import episode from './img/orphans-episode.jpg';

function section2(props) {
    const episodes = [
        {image: episode, episode: 'S01E01 - Copitulo 1', date: '1 April 2019'},
        {image: episode, episode: 'S01E02 - Copitulo 2', date: '2 April 2019'},
        {image: episode, episode: 'S01E03 - Copitulo 3', date: '3 April 2019'},
        {image: episode, episode: 'S01E04 - Copitulo 4', date: '4 April 2019'},
        {image: episode, episode: 'S01E05 - Copitulo 5', date: '5 April 2019'},
        {image: episode, episode: 'S01E06 - Copitulo 6', date: '6 April 2019'},
        {image: episode, episode: 'S01E07 - Copitulo 7', date: '7 April 2019'},
        {image: episode, episode: 'S01E01 - Copitulo 8', date: '8 April 2019'},
        {image: episode, episode: 'S01E01 - Copitulo 9', date: '9 April 2019'},
    ]
    return (
        <div>
            {/* Menu bar */}
            <div className='flex flex-row overflow-auto justify-start bg-darkerBlur items-center py-0 px-2 space-x-5 w-100 my-5 lg:justify-center lg:space-x-20'>
                <h3 className='py-5 text-base box-content text-chocolateBrayish hover:border-b-2 hover:border-white buttonHv hover:text-white'>SEASONS</h3>
                <h3 className='py-5 text-base buttonHv text-chocolateBrayish hover:border-b-2 hover:border-white hover:text-white'>EPISODES</h3>
                <h3 className='py-5 text-base buttonHv text-chocolateBrayish hover:border-b-2 hover:border-white hover:text-white'>ACTORS</h3>
                <h3 className='py-5 text-base buttonHv text-chocolateBrayish hover:border-b-2 hover:border-white hover:text-white'>PHOTOS</h3>
            </div>

            <div className='flex flex-row'>
                <div className='flex flex-col mx-5'>
                    <h3 className='py-5 text-white text-left'>Season (1)</h3>
                    <img src={orphans} alt='' className='w-[8.5rem] h-[12rem]'/>
                    <p className='text-md text-white'>Season 1</p>
                    <p className='text-md text-chocolateBrayish'>155 episodes</p>
                </div>
            </div>
            <hr className='w-100 h-1 mx-6 text-chocolateBrayish my-10'/>
            <h3 className='py-5 px-5 text-white text-left'>Season (155)</h3>
            <div className='w-100 overflow-auto px-1 pb-10'>
                <div className='flex flex-row flex-wrap space-x-2 w-[200rem]'>
                {/* Episodes items */}
                {episodes.map(el => {
                    return (
                    <div className='flex flex-col py-2 px-5'>
                        <img src={el.image} alt='' className='w-[16rem] h-[7rem'/>
                        <h3 className='text-sm text-white pb-0 pt-1 lg:text-md'>{el.episode}</h3>
                        <h3 className='text-sm text-chocolateBrayish lg:text-md'>{el.date}</h3>
                    </div>)
                })}
                
            </div>
            </div>
        </div>
    );
}

export default section2;