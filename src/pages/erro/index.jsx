import React from 'react'
import { useNavigate } from 'react-router-dom'
import arrowBackSvg from '../../assets/svgs/Arrow-back.svg'

const Erro = () => {

  const navigate = useNavigate()
  return (
    <section id='erro'>
      <h2 id='erro__number'>404</h2>
      <span id='erro__warning'>Page not found</span>
        <button onClick={ () => navigate('/') } id='erro__button'>
          Voltar
          <img src={ arrowBackSvg } alt="" />
        </button>
    </section>
  )
}

export default Erro