import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { add, decrease, selectUser, setCustomCard, setTransaction } from '../../store/useSlice'

const Button = ({ inputCurrency, warningCurrency, warningSearch, buttonRef, inputSearch, cardIndex }) => {
  const navigate = useNavigate()
  
  const currentPage = window.location.pathname.replace('/', '')

  const store = useSelector(selectUser)
  const dispatch = useDispatch()

  const date = new Date()
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const currentDate = `${ day }/${ month }`

  const makeCard = () => {
    dispatch(setCustomCard( cardIndex ))
    navigate('/Paybank/credit')
  }

  const changeBalance = () => {
    if ( !warningCurrency && !warningSearch ) {
      currentPage === 'Paybank/receive' ? dispatch(add(Number( inputCurrency ))) : dispatch(decrease(Number( inputCurrency )))
  
      dispatch(setTransaction({ name: inputSearch, id: store.contactsTransactions.length + 1, method: currentPage, value: inputCurrency, date: currentDate }))
      navigate('/Paybank')
    }
  }

  const filterButtonAction  = () => currentPage === 'Paybank/credit/add-card' ? makeCard() : changeBalance()
  
  return (
    <div className='button-section'>
      <button ref={ buttonRef } onClick={ filterButtonAction } className='button-section__button'>Confirmar</button>
    </div>
  )
}

export default Button