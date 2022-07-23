import React from 'react';
import alertIcon from '../../assets/svgs/Alert.svg';

const Input = ({ title }) => {
    const [ input, setInput ] = React.useState('R$ ')
    const [ warning, setWarning ] = React.useState(false)
    const inputRef = React.useRef()

    if (input.length === 2) {
        setInput( input + ' ' )
    }

    React.useEffect( () => {

        inputRef.current.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                if (Number(input.replace('R$ ', ''))) {
                    setWarning(false)
                } else {
                    setWarning(true)
                }
            }
        })

        inputRef.current.onblur = () => {
            if (Number(input.replace('R$ ', ''))) {
                setWarning(false)
            } else {
                setWarning(true)
            }
        }
        
    }, [ inputRef, input ])

    return (
        <section className='search__container'>
            <label htmlFor="">{ title }</label>
            <input ref={ inputRef } onChange={ ({ target }) => setInput(target.value)} value={ input } className='input' placeholder='R$' type="text" />
            { warning ? <div className='warning'>
                <img src={ alertIcon } alt="" />
                <span>Aviso: O formulário só aceita números</span>
            </div> : ''}
        </section>
    )
}

export default Input