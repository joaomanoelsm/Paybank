import React, { useCallback, useEffect, useState } from 'react'
import { useRef } from 'react'
import { memo } from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../store/useSlice'
import { filterNumericKeycaps, filterLetterKeycaps } from '../../utils'
import Button from '../button'
import Currency from './currency'
import Search from './search'

const Input = ({ title }) => {
    const [ warningCurrency, setWarningCurrency ] = useState(false)
    const [ warningSearch, setWarningSearch ] = useState(false)

    const [ warningText, setWarningText ] = useState('')

    const [ inputCurrency, setInputCurrency ] = useState(0)
    const [ inputSearch, setInputSearch ] = useState('')

    const inputCurrencyRef = useRef(null)
    const inputSearchRef = useRef(null)
    const buttonRef = useRef(null)

    const store = useSelector(selectUser)

    useEffect( () => {
        inputCurrencyRef.current.value = null

        const currentPage = window.location.pathname
        const insufficientFunds = store.balance - inputCurrency < 0
        const transactionLimit = inputCurrency > 10000
        
        if ( insufficientFunds && currentPage === '/transfer' ) {
            setWarningCurrency( true )
            setWarningText('You do not have money for the transfer')
        } else if ( transactionLimit ) {
            setWarningCurrency( true )
            setWarningText('The maximum value is 10,000')
        } else {
            setWarningCurrency( false )
        }

        inputCurrencyRef.current.onkeydown = ( e ) => {
            if (e.key === 'Enter') inputSearchRef.current.focus()
            filterNumericKeycaps( e )
        }
    }, [ inputCurrency, store.balance ])

    useEffect( () => {
        const filteredContacts = store.contactArray.some( contact => inputSearch === contact.name )

        if ( inputSearch ) {
            if ( filteredContacts ) {
                setWarningSearch(false)
            } else {
                setWarningSearch(true)
            }
        }

        inputSearchRef.current.onkeydown = ( e ) => {
            if (e.key === 'Enter') buttonRef.current.click()
            filterLetterKeycaps( e )
        }
    }, [ inputSearch, store.contactArray ])

    return (
        <>
            <Currency title={'Who do you want to transfer to'} setWarningText={ setWarningText } warningText={ warningText } inputCurrency={ inputCurrency } setInputCurrency={ setInputCurrency } setWarningCurrency={ setWarningCurrency } warningCurrency={ warningCurrency } inputCurrencyRef={ inputCurrencyRef } />
            <Search inputSearch={ inputSearch } setInputSearch={ setInputSearch } setWarningSearch={ setWarningSearch} warningSearch={ warningSearch } inputSearchRef={ inputSearchRef } />
            { inputSearch && inputCurrency > 0 && <Button inputCurrency={ inputCurrency } warningCurrency={ warningCurrency } warningSearch={ warningSearch } buttonRef={ buttonRef } inputSearch={ inputSearch } /> }
        </>
    )
}

export default memo(Input)