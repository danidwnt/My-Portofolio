import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header id='home'>
      <div className='container header__container'>
        <h5>Hallo I'm </h5>
        <h1>Dani Dewantara</h1>
        <h5>Fullstack Develover</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={ME} alt="" />
        </div>
        
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
