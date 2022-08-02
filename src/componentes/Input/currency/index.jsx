import React from 'react';
import alertIcon from '../../../assets/svgs/Alert.svg';
import { add, selectUser, setCurrency, setInputCurrency } from '../../../store/useSlice';
import { useDispatch, useSelector } from 'react-redux'

const Currency = ({ title }) => {
    const [ warning, setWarning ] = React.useState(false)
    const inputMoneyRef = React.useRef()

    const [ inputMoney, setInputMoney ] = React.useState(0)
    
    const dispatch = useDispatch()
    
    const adjustBalance = () => {
        dispatch(add(Number(inputMoney)))
    }
  
    React.useEffect( () => {

        inputMoneyRef.current.addEventListener('keyup', (e) => {
            dispatch(setInputCurrency(Number(inputMoney)))
            if (e.key === 'Enter') {
                if (Number(inputMoney)) {
                    setWarning(false)
                } else {
                    setWarning(true)
                }
            }
        })

        inputMoneyRef.current.onblur = () => {
            dispatch(setInputCurrency(Number(inputMoney)))
            if (Number(inputMoney)) {
                setWarning(false)
            } else {
                setWarning(true)
            }
        }
        
    }, [ dispatch, inputMoneyRef, inputMoney ])

    return (
        <section className='search__container'>
            <label onClick={ adjustBalance }  htmlFor="">{ title }</label>
            <input ref={ inputMoneyRef } onChange={ ({ target }) => setInputMoney(target.value)} value={ inputMoney } className='input' placeholder='R$' type="text" />
            { warning ? <div className='warning'>
                <img src={ alertIcon } alt="" />
                <span>Aviso: O formulário só aceita números</span>
            </div> : ''}
        </section>
    )
}

export default Currency