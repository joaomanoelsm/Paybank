import React, { useEffect, useState } from 'react'
import addIcon from '../../assets/svgs/Add.svg'
import { useNavigate } from 'react-router-dom';
import cardIcon from '../../assets/svgs/Card-icon.svg'
import arrowIcon from '../../assets/svgs/Arrow.svg'
import { useRef } from 'react';

const Credit = () => {
  const [ details, setDetails ] = useState(false)
  const arrowRef = useRef()

  const navigate = useNavigate()

  useEffect( () => {
    if ( details ) arrowRef.current.style.transform = 'rotateX(-360deg)'
    else arrowRef.current.style.transform = 'rotateX(-180deg)'
  }, [ details ])

  return (
    <section id='credit-card'>
      <h2>Your credit cards</h2>
      <div onClick={ () => navigate('/Paybank/credit/add-card') } id='credit-card__add'>
        <img src={ addIcon } alt="" />
        <span>Add credite card</span>
      </div>
      <div id='credit-card__items'>
        <div id='credit-card__details'>
          <div id='credit-card__summary' onClick={ () => setDetails( state => !state ) }>
            <img id='credit-card__icon' src={ cardIcon } alt="Icone do cartão" />
            <span>5061 5326 7913 2323</span>
            <img ref={ arrowRef } id='credit-card__arrow' src={ arrowIcon } alt="Icone de direção" />
          </div>
          <div  id={`credit-card__data\n ${ details ? 'animation' : '' }`}>
            <div id='credit-card__'></div>
            <div id='credit-card__limit'>
              <div id='credit-card__available-limit'>
                <h3>Limite atual</h3>
                <span>R$ 10000</span>
              </div>
              <div id='credit-card__current-limit'>
                <h3>Limite disponivel</h3>
                <span>R$ 10000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Credit