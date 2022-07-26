import React from 'react';
import alertIcon from '../../assets/svgs/Alert.svg';
import { useDispatch } from "react-redux";
import { add, discount } from '../../store/useSlice';
import { CreateContext } from '../../store/useContext';

const Input = ({ title }) => {
    const [ input, setInput ] = React.useState(0)
    const [ warning, setWarning ] = React.useState(false)
    const inputRef = React.useRef()

    let { balance } = React.useContext(CreateContext)
  
    const dispatch = useDispatch()
    
    const handleLogin = () => {
        dispatch(add(Number(input)))
    }
  
    React.useEffect( () => {

        inputRef.current.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                if (Number(input)) {
                    setWarning(false)
                } else {
                    setWarning(true)
                }
            }
        })

        inputRef.current.onblur = () => {
            if (Number(input)) {
                setWarning(false)
            } else {
                setWarning(true)
            }
        }
        
    }, [ inputRef, input ])

    return (
        <section className='search__container'>
            <label onClick={ handleLogin }  htmlFor="">{ title }</label>
            <input ref={ inputRef } onChange={ ({ target }) => setInput(target.value)} value={ input } className='input' placeholder='R$' type="text" />
            { warning ? <div className='warning'>
                <img src={ alertIcon } alt="" />
                <span>Aviso: O formulário só aceita números</span>
            </div> : ''}
        </section>
    )
}

export default Input