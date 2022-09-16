import React, { useEffect, useState } from 'react'
import addIcon from '../../assets/svgs/Add.svg'
import { useNavigate } from 'react-router-dom';
import cardIcon from '../../assets/svgs/Card-icon.svg'
import arrowIcon from '../../assets/svgs/Arrow.svg'
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../store/useSlice';
import Card from './addCard/card';

const Credit = () => {
  const arrowRef = useRef()
  
  const { cardsArray } = useSelector(selectUser)
  const navigate = useNavigate()

  const switchSideOfArrow = ( e ) => {
    e.target.parentNode.classList.toggle('animation')
    if ( e.target.parentNode.classList.contains('animation') ) e.target.children[2].style.transform = 'rotateX(-180deg)'
    else e.target.children[2].style.transform = 'rotateX(-360deg)'
  }

  const creditCardNumberGenerator = () => {
    const numberOfCardCharacters = 16
    let cardNumber = []
    let spaceBetweenNumbers = 4

    for ( let i = 0 ; i < numberOfCardCharacters ; i++ ) {
      const randomNumber = Math.floor(Math.random() * 10)

      if ( cardNumber.length === spaceBetweenNumbers ) {
        cardNumber.push( ' ' )
        cardNumber.push( randomNumber )
        spaceBetweenNumbers += 4 + 1
      }
      else cardNumber.push( randomNumber )
    }

    return cardNumber
  }

  return (
    <section id='credit-card' >
      <h2>Your credit cards</h2>
      <div onClick={ () => navigate('/Paybank/credit/add-card') } id='credit-card__add'>
        <img src={ addIcon } alt="" />
        <span>Add credite card</span>
      </div>
      <div id='credit-card__items'>
        { cardsArray.map( cardStyle => (
          <div key={ cardStyle.id } className='credit-card__details'>
            <div id='credit-card__summary' onClick={ switchSideOfArrow }>
              <img id='credit-card__icon' src={ cardIcon } alt="Icone do cartão" />
              <span>{ creditCardNumberGenerator() }</span>
              <img ref={ arrowRef } id='credit-card__arrow' src={ arrowIcon } alt="Icone de direção" />
            </div>
            <div className='credit-card__data'>
              <Card cardNumber={ creditCardNumberGenerator() } userName={ cardStyle.userName } background={ cardStyle.bg } logo={ cardStyle.logo } flag={ cardStyle.flag } />
              <div id='credit-card__limit'>
                <div id='credit-card__available-limit'>
                  <h3>Current limit</h3>
                  <span>R$ { cardStyle.limit }</span>
                </div>
                <div id='credit-card__current-limit'>
                  <h3>Available limit</h3>
                  <span>R$ { cardStyle.limit }</span>
                </div>
              </div>
              <div id='credit-card__limit-bar'></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Credit