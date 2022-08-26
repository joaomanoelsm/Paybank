import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import arrowIcon from '../../assets/svgs/Arrow.svg';
import Currency from '../../componentes/input/currency';
import Warning from '../../componentes/warning';
import { add } from '../../store/useSlice';
import { filterNumericKeycaps } from '../../utils';

const Loan = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [ inputCurrency, setInputCurrency ] = useState(0)
    const [ warningText, setWarningText ] = useState('The maximum value is 10,000')

    const [ appearAplots, setAppearAplots ] = useState(false)
    const [ warning, setWarning ] = useState(false)

    const [ name, setName ] = useState('--Select the parcel--')
    const [ total, setTotal ] = useState( inputCurrency )

    const parcels = [
        {
            name: '1 parcel de R$',
            id: 1
        },
        {
            name: '2 parcel de R$',
            id: 2
        },
        {
            name: '3 parcel de R$',
            id: 3
        },
        {
            name: '4 parcel de R$',
            id: 4
        },
        {
            name: '5 parcel de R$',
            id: 5
        },
        {
            name: '6 parcel de R$',
            id: 6
        },
        {
            name: '7 parcel de R$',
            id: 7
        },
        {
            name: '8 parcel de R$',
            id: 8
        },
        {
            name: '9 parcel de R$',
            id: 9
        },
        {
            name: '10 parcel de R$',
            id: 10
        },
        {
            name: '11 parcel de R$',
            id: 11
        },
        {
            name: '12 parcel de R$',
            id: 12
        },
    ]

    const arrowIconRef = useRef(null)
    const inputCurrencyRef = useRef(null)
    
    const appearOptions = useCallback( () => {
        setAppearAplots( state => !state )
    }, [])

    useEffect( () => {
        if (appearAplots) {
            arrowIconRef.current.style.transform = 'rotateX(-360deg)'
        } else {
            arrowIconRef.current.style.transform = 'rotateX(-180deg)'
        }
    }, [ appearAplots ])

    const setInterest = useCallback( ( parcelNumber ) => {
        const account = inputCurrency * (1 + (5 / 100)) ** parcelNumber 
        return (account / parcelNumber).toFixed(2)
    }, [ inputCurrency ])

    const selectOption = useCallback( ({ target }) => {
        setName( target.innerText )
        appearOptions()
        setTotal( (setInterest(target.value) * target.value).toFixed(2) )
    }, [ appearOptions, setInterest ])

    useEffect( () => {
        inputCurrencyRef.current.value = null

        if ( inputCurrency > 10000) {
            setWarning(true)
            setWarningText('The maximum value is 10,000')
        } else {
            setWarning(false)
            setWarningText('Select the parcel')
        }

        inputCurrencyRef.current.onkeydown = ( e ) => {
            filterNumericKeycaps( e )
        }

        setName('--Select the parcel--')
        setTotal(setInterest(1))
    }, [ setInterest, inputCurrency ])

    useEffect( () => {
        if (name !== '--Select the parcel--') setWarning(false)
    }, [ name ])

    const addLoanAmount = () => {
        const invalidInstallment = name === '--Select the parcel--'

        if ( invalidInstallment || warning ) setWarning(true)
        else {
            setWarning(false)
            dispatch(add(Number(total)))
            navigate('/')
        }
    }

  return (
    <section id='loan'>
        <Currency title={'Enter the amount to borrow'} setInputCurrency={ setInputCurrency } inputCurrency={ inputCurrency } inputCurrencyRef={ inputCurrencyRef } />
        <section id='loan__select'>
            <div onClick={ appearOptions } id='loan__viewer'>
                <span>{ name }</span>
                <img ref={ arrowIconRef } src={ arrowIcon } alt="" />
            </div>
            { appearAplots && <ul onClick={ selectOption } id='loan__parcels'>
                { parcels.map( parcel => (
                    <li key={parcel.id} value={parcel.id} className='loan__parcel'>{ parcel.name } { setInterest(parcel.id) }</li>
                    )
                ) }
            </ul> }
        </section>
        { warning && <Warning text={ warningText } /> }
        <section id='loan__info'>
            <span>Total payable</span>
            <h2>R$ { total }</h2>
            <span>5% a month</span>
            <button onClick={ addLoanAmount }>Accept</button>
        </section>
    </section>
  )
}

export default Loan