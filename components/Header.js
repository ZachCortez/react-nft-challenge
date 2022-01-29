import React from 'react'
import './Header.css'
import punkLogo from '../assets/header/cryptopunk-logo.png'
import searchIcon from '../assets/header/search.png'
import themeSwitchIcon from '../assets/header/theme-switch.png'

const Header = () => {
    return (
        <div className='header'>
                        {/*---------- Header Logo---------- */}
            <div className='logoContainer'>
                <img src={punkLogo} className='punkLogo' alt=""  />
            </div>
                        {/* ----------Search Bar---------- */}
            <div className='searchBar'>
                <div className='searchIconContainer'>
                    <img src={searchIcon} />
                </div>
                        {/* ----------Search Input---------- */}
                <input className='searchInput' placeholder='Collection, item or user ...' />
            </div>
                        {/* ----------Header Items---------- */}
            <div className='headerItems'>
                <p>Drops</p>
                <p>Marketplace</p>
                <p>Create</p>
            </div>
                        {/* ----------Header ACtions---------- */}
            <div className='headerActions'>
                <div className='themeSwitchContainer'>
                    <img src={themeSwitchIcon} alt=''  />
                </div>
                        {/* ----------Login Button---------- */}
            <div className='loginButton'>GET IN</div>
            </div>
        </div>
    )
}

export default Header
