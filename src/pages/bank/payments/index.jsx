import React from 'react';
import creditIcon from '../../../assets/svgs/Credit-icon.svg';
import depositIcon from '../../../assets/svgs/Deposit-icon.svg';
import loanIcon from '../../../assets/svgs/Loan-icon.svg';
import payIcon from '../../../assets/svgs/Pay-icon.svg';
import transferIcon from '../../../assets/svgs/Transfer-icon.svg';
import { useNavigate } from 'react-router-dom'
import Popup from '../../../componentes/popup';
import { CreateContext } from '../../../store/useContext';

const Payments = () => {
    const navigate = useNavigate()

    let { setPopup, popup } = React.useContext(CreateContext)

    const icons = [{
        img: payIcon,
        name: 'Receive'
    },
    {
        img: transferIcon,
        name: 'Transfer'
    },
    {
        img: creditIcon,
        name: 'Credit'
    },
    {
        img: depositIcon,
        name: 'Deposit'
    },
    {
        img: loanIcon,
        name: 'Loan'
    }]


    const navigateFilter = ( url ) => url === 'deposit' ? setPopup( true ) : navigate( url )

    return (
        <section id='payments'>
            <div id='payments__container'>
                {icons.map( icon => {
                    return (
                    <div onClick={ () => navigateFilter(icon.name.toLocaleLowerCase()) } className='payments__icons' key={ icon.name }>
                        <div className='payments__wallpapers'>
                            <img src={ icon.img } alt="" />
                        </div>
                        <span>{ icon.name }</span>
                    </div>
                    )
                })}
            </div>
            { popup ? <Popup title={'Valor do depósito'} buttonName={['Cancelar', 'Enviar']}  /> : null}
        </section>
    )
}

export default Payments

