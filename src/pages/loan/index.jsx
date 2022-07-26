import React from 'react'
import Input from '../../componentes/input'
import arrowIcon from '../../assets/svgs/Arrow.svg'

const Loan = () => {
    const [ appearance, setAppearance ] = React.useState(false)
    const [ name, setName ] = React.useState('12 parcela de R$ 80')

    const imgRef = React.useRef()
    const selectRef = React.useRef()

    const popup = () => {
        setAppearance( state => !state )
    }
    
    const selectOption = ({target}) => {
        setName(target.innerText)
        popup()
    }
    
  return (
    <main id='loan'>
        <Input />
        <section id='container__select'>
            <div onClick={ popup } id='select'>
                <span>{ name }</span>
                <img ref={ imgRef } src={ arrowIcon } alt="" />
            </div>
            { appearance ? <div ref={ selectRef } onClick={ selectOption } id='select__itens'>
                <div className='itens'>1 parcela de R$ 1000</div>
                <div className='itens'>2 parcela de R$ 500</div>
                <div className='itens'>3 parcela de R$ 333</div>
                <div className='itens'>4 parcela de R$ 250</div>
                <div className='itens'>5 parcela de R$ 200</div>
                <div className='itens'>6 parcela de R$ 160</div>
                <div className='itens'>7 parcela de R$ 140</div>
                <div className='itens'>8 parcela de R$ 125</div>
                <div className='itens'>9 parcela de R$ 120</div>
                <div className='itens'>10 parcela de R$ 100</div>
                <div className='itens'>11 parcela de R$ 90</div>
                <div className='itens'>12 parcela de R$ 80</div>
            </div> : <div id='select__itens'></div>}
        </section>
        <section id='view__money'>
            <span>Total payable</span>
            <h2>R$ 1500</h2>
            <span>5% a month</span>
            <button>Accept</button>
        </section>
    </main>
  )
}

export default Loan