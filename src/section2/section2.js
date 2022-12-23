import React from 'react';

import './section2.css';
import orphans from '../Section1/img/orphans.jpg';
import episode from './img/orphans-episode.jpg';
import actor from './img/actor.jpg';

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
    let episodesCount = 0;
    episodes.map(el => {
        episodesCount += 1;
        return <p key={el.episode}></p>;
    });

    const actors = [
        {image: actor, name: 'Seoul Brahmal', actorName: 'Nathalie Bensalman'},
        {image: actor, name: 'Sem Muhammad', actorName: 'Nathalie Bensalman'},
        {image: actor, name: 'Dol Radjuun', actorName: 'Nathalie Bensalman'},
        {image: actor, name: 'Mael Mahmoud', actorName: 'Nathalie Bensalman'},
        {image: actor, name: 'Soulan Seoul', actorName: 'Nathalie Bensalman'},
        {image: actor, name: 'Gabbi Brahmal', actorName: 'Nathalie Bensalman'},
        {image: actor, name: 'Ghandi Mael', actorName: 'Nathalie Bensalman'},
        {image: actor, name: 'Derby Fasika', actorName: 'Nathalie Bensalman'},
    ];

    let actorsCount = 0;
    actors.map(el => {
        actorsCount += 1;
        return <p key={el.name}></p>;
    });

    const album = [actor, actor, actor];
    let picCount = 0;
    album.map(el => {
        picCount += 1;
        return <p key={Math.random()}></p>
    })
    return (
        <div className='bg-lighterDarkBlur'>
            {/* Menu bar */}
            <div className='flex flex-row overflow-auto justify-start bg-darkerBlur items-center py-0 px-2 space-x-5 w-100 my-5 lg:justify-center lg:space-x-20'>
                <h3 className='py-5 text-base box-content text-chocolateBrayish hover:border-b-2 hover:border-white buttonHv hover:text-white'
                onClick={() => {
                    window.scrollTo({
                        top: 670,
                        behavior: 'smooth'
                    })
                }}
                >SEASONS</h3>
                <h3 className='py-5 text-base buttonHv text-chocolateBrayish hover:border-b-2 hover:border-white hover:text-white'
                onClick={() => {
                    window.scrollTo({
                        top: 1000,
                        behavior: 'smooth'
                    })
                }}
                >EPISODES</h3>
                <h3 className='py-5 text-base buttonHv text-chocolateBrayish hover:border-b-2 hover:border-white hover:text-white'
                onClick={() => {
                    window.scrollTo({
                        top: 1300,
                        behavior: 'smooth'
                    })
                }}
                >ACTORS</h3>
                <h3 className='py-5 text-base buttonHv text-chocolateBrayish hover:border-b-2 hover:border-white hover:text-white'
                onClick={() => {
                    window.scrollTo({
                        top: 1700,
                        behavior: 'smooth'
                    })
                }}
                >PHOTOS</h3>
            </div>

            <div className='flex flex-row'>
                <div className='flex flex-col mx-5'>
                    <h3 className='py-5 text-white text-left'>Season (1)</h3>
                    <img src={orphans} alt='' className='w-[8.5rem] h-[12rem] hover:opacity-50'/>
                    <p className='text-md text-white'>Season 1</p>
                    <p className='text-md text-chocolateBrayish'>155 episodes</p>
                </div>
            </div>
            <hr className='w-100 h-[1px] border-none mx-6 bg-chocolateBrayish my-10'/>
            <h3 className='py-5 px-5 text-white text-left'>Episodes ({episodesCount})</h3>
            <div className='w-100 scrollWrapper overflow-auto px-1 pb-10'>
                <div className='flex flex-row flex-wrap space-x-2 w-[200rem]'>
                {/* Episodes items */}
                {episodes.map(el => {
                    return (
                    <div className='flex flex-col py-2 px-5' key={el.episode}>
                        <img src={el.image} alt='' className='w-[16rem] h-[7rem] hover:opacity-50'/>
                        <h3 className='text-sm text-center text-white pb-0 pt-1 lg:text-md'>{el.episode}</h3>
                        <h3 className='text-sm text-center text-chocolateBrayish lg:text-md'>{el.date}</h3>
                    </div>)
                })}
                
                </div>
            </div>
                {/* 3rd section */}
            <h3 className='py-5 px-5 text-white text-left'>Actors '({actorsCount})'</h3>

            <div className='w-100 scrollWrapper overflow-auto px-1 pb-10'>
                <div className='flex flex-row flex-wrap space-x-2 w-[200rem]'>
                {/* Episodes items */}
                {actors.map(el => {
                    return (
                    <div className='flex flex-col py-2 px-5' key={Math.random()}>
                        <img src={el.image} alt='' className='w-[10rem] h-[10rem] rounded-full hover:opacity-50'/>
                        <h3 className='text-sm text-center text-white pb-0 pt-1 lg:text-md'>{el.name}</h3>
                        <h3 className='text-sm text-center text-chocolateBrayish lg:text-md'>{el.actorName}</h3>
                    </div>)
                })}
                
                </div>
            </div>
            <hr className='w-100 h-[1px] border-none mx-6 bg-chocolateBrayish my-10'/>
            <h3 className='py-5 px-5 text-white text-left'>Photos ({picCount})</h3>

            <div className='w-100 scrollWrapper overflow-auto px-1 pb-10'>
                <div className='flex flex-row flex-wrap space-x-2 w-[200rem]'>
                {/* Episodes items */}
                {album.map(el => {
                    return (
                    <div className='flex flex-col py-2 px-5' key={Math.random()}>
                        <img src={el} alt='' className='w-[10rem] h-[10rem] hover:opacity-50'/>
                    </div>)
                })}
                
                </div>
            </div>
        </div>
    );
}

export default section2;