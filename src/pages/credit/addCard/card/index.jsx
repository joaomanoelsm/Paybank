import React from 'react'

const Card = ({ background, logo, flag, cardRef, handleClick, selected, select }) => {


  return (
    <div ref={ cardRef } className='card'>
        <div className={`card__background ${ background }`}>
            <div id='card__sponsorships'>
                <h3 id='card__logo'>Pay<span className={`${ logo }`}>bank</span></h3>
                <div className={`card__flag ${ flag }`}></div>
            </div>
            <span>**** **** **** ****</span>
        </div>
        <div id='card__data'>
            <div id='card__date'>
                <h3>EXP DATE</h3>
                <span>31/99</span>
            </div>
            <div id='card__agency'>
                <h3>AGENCY</h3>
                <span>0001</span>
            </div>
            <span id='card__user-name'>Username</span>
        </div>
    </div>
  )
}

export default Card