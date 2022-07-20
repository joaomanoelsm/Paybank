import React from 'react';
import creditIcon from '../../../assets/svgs/Credit-icon.svg';
import depositIcon from '../../../assets/svgs/Deposit-icon.svg';
import loanIcon from '../../../assets/svgs/Loan-icon.svg';
import payIcon from '../../../assets/svgs/Pay-icon.svg';
import transferIcon from '../../../assets/svgs/Transfer-icon.svg';

const Payments = () => {
    const icons = [ payIcon, transferIcon, creditIcon, depositIcon, loanIcon ]

    return (
        <section id='payments'>
            <div id='payments__container'>
                {icons.map( icon => {
                    return (
                    <div className='payments__icons'>
                        <div className='payments__wallpapers'>
                            <img src={ icon } alt="" />
                        </div>
                        <span>Receive</span>
                    </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Payments

