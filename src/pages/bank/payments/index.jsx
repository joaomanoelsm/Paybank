import React from 'react';
import creditIcon from '../../../assets/svgs/Credit-icon.svg';
import depositIcon from '../../../assets/svgs/Deposit-icon.svg';
import loanIcon from '../../../assets/svgs/Loan-icon.svg';
import payIcon from '../../../assets/svgs/Pay-icon.svg';
import transferIcon from '../../../assets/svgs/Transfer-icon.svg';
import { useNavigate } from 'react-router-dom'

const Payments = () => {
    const navigate = useNavigate()

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

    return (
        <section id='payments'>
            <div id='payments__container'>
                {icons.map( icon => {
                    return (
                    <div onClick={ () => navigate( icon.name.toLocaleLowerCase() )} className='payments__icons' key={ icon.name }>
                        <div className='payments__wallpapers'>
                            <img src={ icon.img } alt="" />
                        </div>
                        <span>{ icon.name }</span>
                    </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Payments

