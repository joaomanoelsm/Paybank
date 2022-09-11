import React, { useEffect, useRef, useState } from 'react'
import { add, addContact, selectUser, setPopup } from '../../store/useSlice';
import { useDispatch, useSelector } from 'react-redux'
import Warning from '../warning';
import { filterLetterKeycaps, filterNumericKeycaps } from '../../utils';

const Popup = ({ title, buttonName, method }) => {
  const [ popupSearch, setPopupSearch ] = useState('')
  const [ popupMoney, setPopupMoney ] = useState(0)

  const [ warning, setWarning ] = useState(false)
  const [ warningText, setWarningText ] = useState('Character limit reached')
  
  const inputSearchRef = useRef(null)
  const inputNumberRef = useRef(null)
  const popupButtonRef = useRef(null)

  const store = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect( () => {

    if ( method === 'text' ) {
      inputSearchRef.current.value = null

      inputSearchRef.current.onkeydown = ( e ) => {
        if ( e.key === 'Enter' ) popupButtonRef.current.click()
        filterLetterKeycaps( e )
      }
    }

    const maximumCharacters = popupSearch.length > 20

    if ( maximumCharacters ) {
      setWarning(true)
      setWarningText('Character limit reached')
    } else {
      setWarning(false)
      setWarningText('minimum of 4 characters')
    }

  },  [ popupSearch, method ])

  useEffect( () => {
    if (method === 'number') {
      inputNumberRef.current.value = null

      inputNumberRef.current.onkeydown = ( e ) => {
        if ( e.key === 'Enter' ) popupButtonRef.current.click()
        filterNumericKeycaps( e )
      }
    }

    const maximumWithdrawal = popupMoney > 10000

    if ( maximumWithdrawal ) {
      setWarning(true)
      setWarningText('The maximum value is 10,000')
    } else {
      setWarningText('Value unavailable')
      setWarning(false)
    }
  }, [ popupMoney, method ])
  
  const addCurrencyToBalance = () => {
    const invalidWithdrawal = Number(popupMoney) === 0

    if ( !popupMoney || invalidWithdrawal ) setWarning(true)
    else {
      dispatch(add(Number(popupMoney)))
      dispatch(setPopup(false))
    }
  }

  const addContactToList = () => {
    const minimumOfCharacters = popupSearch.length < 4

    if ( !popupSearch || minimumOfCharacters ) setWarning(true)
    else {
      const capitalizedName = popupSearch[0].toLocaleUpperCase() + popupSearch.substring(1).trim()
      const filteredContact = store.contactArray.some( contact => contact.name === capitalizedName)

      if ( filteredContact ) {
        setWarning(true)
        setWarningText('The contact already exists')
      } 
      else {
        dispatch(addContact({name: capitalizedName, id: store.contactArray.length + 1}))
        dispatch(setPopup(false))
        setWarning(false)
      }
    }
  }

  const filterPopupValue = () => {
    if ( !warning ) method === 'number' ? addCurrencyToBalance() : addContactToList()
  }
    
  const addPopupValue  = () => { 
    filterPopupValue()
  }

  return (
    <div className='popup__wallpaper' >
        <div className='popup'>
          <h3>{ title }</h3>
          { method === 'text' 
            ? <input autoFocus ref={ inputSearchRef } onChange={ ({ target }) => setPopupSearch(target.value)} value={ popupSearch } placeholder='Look for contact' type="text" /> 
            : <input autoFocus  ref={ inputNumberRef } onChange={ ({ target }) => setPopupMoney(target.value)} value={ popupMoney } placeholder='R$' type="text" /> 
          }
          <div className='popup__buttons'>
            <button onClick={ () => dispatch(setPopup( false ))} className='popup__buttons popup__buttons__1'>{ buttonName[0] }</button>
            <button ref={ popupButtonRef } onClick={ addPopupValue } className='popup__buttons popup__buttons__2'>{ buttonName[1] }</button>
          </div>
          { warning && <Warning text={ warningText } /> }
        </div>
    </div>
  )
}

export default Popup

