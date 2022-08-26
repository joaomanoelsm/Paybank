import React from 'react'
import profileSvg from '../../assets/svgs/profile.svg'
import LogoSvg from '../../assets/svgs/Logo.svg'
import { NavLink } from 'react-router-dom'

const Header = () => {

  return (
    <header id='header'>
        <div id='header__background'></div>
        <nav id='header__nav'>
            <NavLink id='header__logo' to='/'>
                <img src={ LogoSvg } alt="Logo do banco" />
            </NavLink>
            <img id='header__profile' src={ profileSvg } alt="Perfil" />
        </nav>
    </header>
  )
}

export default Header