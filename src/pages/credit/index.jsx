import React from 'react'
import addIcon from '../../assets/svgs/Add.svg'
import { useNavigate } from 'react-router-dom';

const Credit = () => {
  const navigate = useNavigate()

  return (
    <section id='credit-card'>
      <h2>Your credit cards</h2>
      <div onClick={ () => navigate('/Paybank/credit/add-card')} id='credit-card__add'>
        <img src={ addIcon } alt="" />
        <span>Add credite card</span>
      </div>
      <div></div>
    </section>
  )
}

export default Credit