import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { add, decrease, selectUser, setTransaction } from '../../store/useSlice'

const Button = ({ inputCurrency, warningCurrency, warningSearch, buttonRef, inputSearch }) => {
  const navigate = useNavigate()
  
  const currentPage = window.location.pathname.replace('/', '')

  const store = useSelector(selectUser)
  const dispatch = useDispatch()

  const date = new Date()
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const currentDate = `${day}/${month}`

  const defineMethod  = () => {
    currentPage === 'Paybank/receive' ? dispatch(add(Number(inputCurrency))) : dispatch(decrease(Number(inputCurrency)))

    dispatch(setTransaction({name: inputSearch, id: store.contactsTransactions.length + 1, method: currentPage, value: inputCurrency, date: currentDate }))
  }

  const sendBalance = () => {
    if ( !warningCurrency && !warningSearch ) {
      defineMethod()
      navigate('/Paybank')
    }
  } 
  
  return (
    <div className='button-section'>
      <button ref={ buttonRef } onClick={ sendBalance } className='button-section__button'>Confirmar</button>
    </div>
  )
}

export default Button