import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import Currency from '../../../componentes/input/currency'
import Search from '../../../componentes/input/search'
import { selectUser } from '../../../store/useSlice'
import { useSelector } from 'react-redux'
import Card from './card'
import { filterLetterKeycaps, filterNumericKeycaps } from '../../../utils'
import { memo } from 'react'
import Button from '../../../componentes/button'

const AddCard = () => {
  const [ inputSearch, setInputSearch ] = useState('')
  const [ inputCurrency, setInputCurrency ] = useState(0)

  const [ warningCurrency, setWarningCurrency ] = useState(false)
  const [ warningSearch, setWarningSearch ] = useState(false)

  const [ warningText, setWarningText ] = useState('')
  const [ cardTarget, setCardTarget ] = useState(null)

  const inputSearchRef = useRef(null)
  const inputCurrencyRef = useRef(null)
  const cardsRef = useRef()

  const cardsStyles = [
    {
      id: 1,
      bg: 'card__background--purple',
      logo: 'card__logo--purple',
      flag: 'card__flag--purple'
    },
    {
      id: 2,
      bg: 'card__background--green',
      logo: 'card__logo--green',
      flag: 'card__flag--green'
    },
    {
      id: 3,
      bg: 'card__background--red',
      logo: 'card__logo--red',
      flag: 'card__flag--red'
    },
    {
      id: 4,
      bg: 'card__background--blue',
      logo: 'card__logo--blue',
      flag: 'card__flag--blue'
    },
    {
      id: 5,
      bg: 'card__background--yellow',
      logo: 'card__logo--yellow',
      flag: 'card__flag--yellow'
    },
    {
      id: 6,
      bg: 'card__background--orange',
      logo: 'card__logo--orange',
      flag: 'card__flag--orange'
    },
  ]

  const store = useSelector(selectUser)

  useEffect( () => {
      inputCurrencyRef.current.value = null

      const creditLimit = inputCurrency > 10000
      
      if ( creditLimit ) {
          setWarningCurrency( true )
          setWarningText('Total credit card limit is 10.000')
      } else {
          setWarningCurrency( false )
      }

      inputCurrencyRef.current.onkeydown = ( e ) => filterNumericKeycaps( e )
      
  }, [ inputCurrency, store.balance ])

  useEffect( () => {
    if ( inputSearch ) {
      if ( inputSearch.length < 4 || inputSearch.length > 10 ) {
        setWarningSearch(true)
        setWarningText('Enter a name longer than 4 characters and less than 10 characters')
      } else {
        setWarningSearch(false)
      }
    }
      inputSearchRef.current.onkeydown = ( e ) => {
          if (e.key === 'Enter') inputCurrencyRef.current.focus()
          filterLetterKeycaps( e )
      }
  }, [ inputSearch, store.contactArray ])


  const handleClick = ( e ) => {
    setCardTarget( e.target )

    cardsRef.current.childNodes.forEach( card => {
      if ( card.classList.contains('card--select') ) {
        card.classList.remove('card--select')
      }
    })

    e.target.classList.add('card--select')
  }

  useEffect( () => {
  }, [])

  useEffect( () => {
    cardsRef.current.childNodes.forEach( card => card.addEventListener('click', handleClick, { capture: true } ))
  }, [])

  return (
    <section id='add-card'>
      <Search title={'Enter the card user name'} setInputSearch={ setInputSearch } inputSearch={ inputSearch } inputSearchRef={ inputSearchRef } warningSearch={ warningSearch } setWarningSearch={ setWarningSearch } warningText={ warningText } />
      <Currency title={'Enter card limit'} setInputCurrency={ setInputCurrency } inputCurrency={ inputCurrency } inputCurrencyRef={ inputCurrencyRef } warningCurrency={ warningCurrency } setWarningCurrency={ setWarningCurrency } warningText={ warningText } />
      <div id='add-card__cards-container'>
        <h2>Choose card theme</h2>
        <div ref={ cardsRef } id='add-card__cards'>
          { cardsStyles.map( cardStyle => (
            <Card key={ cardStyle.id } background={ cardStyle.bg } logo={ cardStyle.logo } flag={ cardStyle.flag } />
          ))}
        </div>
      </div>
      { inputCurrency && inputSearch && cardTarget && <Button /> }
    </section>
  )
}

export default memo(AddCard)