import React from 'react'
import './styles/header.css'

const Header = () => {
    return (
        <>
            <div className='header__red'>
                <img className='pokedex-header__img' src='/images/home/pokedex.png'/> 
                <div className='header__black'></div>
                <div className='header__circle'>
                    <div className='header__circle-int'></div>
                </div>
            </div>
        </>
    )
}

export default Header