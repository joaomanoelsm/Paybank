import React, { memo } from 'react'

const Card = ({ userName, background, logo, flag, cardNumber }) => {

  return (
    <div className='card'>
        <div className={`card__background ${ background }`}>
            <div id='card__sponsorships'>
                <h3 id='card__logo'>Pay<span id='card__logo__span' className={`${ logo }`}>bank</span></h3>
                <div className={`card__flag ${ flag }`}></div>
            </div>
            <span className='card__number'>{ cardNumber ? cardNumber : '**** **** **** ****'}</span>
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
            <span id='card__user-name'>{ userName ? userName : 'Username'}</span>
        </div>
    </div>
  )
}

export default memo(Card)