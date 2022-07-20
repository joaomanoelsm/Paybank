import React from 'react'
import profileSvg from '../../assets/svgs/profile.svg'

const Header = () => {
  return (
    <header id='header'>
        <div id='header__color'></div>
        <nav id='header__nav'>
            <div id='header__menu'>
              <div className='header__menu__tickness__1 header__menu__tickness'></div>
              <div className='header__menu__tickness__2 header__menu__tickness'></div>
              <div className='header__menu__tickness__3 header__menu__tickness'></div>
            </div>
            <img id='header__profile' src={ profileSvg } alt="" />
        </nav>
    </header>
  )
}

export default Header