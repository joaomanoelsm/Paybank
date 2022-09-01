import React, { useState } from 'react'
import sunIcon from '../../assets/svgs/Sun.svg'
import moonIcon from '../../assets/svgs/Moon.svg'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectUser, setThemeToggle } from '../../store/useSlice'

const Header = () => {
  const { themeToggle } = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect( () => {
    const html = document.querySelector('html')
    
    if ( themeToggle ) {
      html.classList.add('light-mode')
      html.classList.remove('dark-mode')
    }
    else {
      html.classList.add('dark-mode')
      html.classList.remove('light-mode')
    }
  }, [ themeToggle ])

  return (
    <header id='header'>
        <div id='header__background'></div>
        <nav id='header__nav'>
            <NavLink id='header__logo-container' to='/Paybank'>
                <span id='header__logo'>Pay<span>bank</span></span>
            </NavLink>
            <img onClick={ () => dispatch(setThemeToggle()) } id='header__profile' src={ themeToggle ? sunIcon : moonIcon } alt="Perfil" />
        </nav>
    </header>
  )
}

export default Header