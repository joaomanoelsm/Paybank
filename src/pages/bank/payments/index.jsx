import React, { useEffect } from 'react';

import creditIcon from '../../../assets/svgs/Credit-icon.svg';
import depositIcon from '../../../assets/svgs/Deposit-icon.svg';
import loanIcon from '../../../assets/svgs/Loan-icon.svg';
import payIcon from '../../../assets/svgs/Pay-icon.svg';
import transferIcon from '../../../assets/svgs/Transfer-icon.svg';

import { useNavigate } from 'react-router-dom'
import Popup from '../../../componentes/popup';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { selectUser, setPopup } from '../../../store/useSlice';
import { useRef } from 'react';

const Payments = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const { popup, themeToggle } = useSelector(selectUser)

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

    useEffect( () => {
    }, [ themeToggle ])

    const navigateFilter = ( url ) => url === 'deposit' ? dispatch(setPopup(true)) : navigate( url )

    return (
        <section id='payments'>
            <div id='payments__icons'>
                {icons.map( icon => {
                    return (
                    <div onClick={ () => navigateFilter(icon.name.toLocaleLowerCase()) } className='payments__icon' key={ icon.name }>
                        <abbr title={ icon.name }>
                            <div className='payments__svg'>
                                <img src={ icon.img } alt="" />
                            </div>
                            <span>{ icon.name }</span>
                        </abbr>
                    </div>
                    )
                })}
            </div>
            { popup && <Popup title={'Deposit amount'} method={'number'} buttonName={['Cancel', 'Submit']}  /> }
        </section>
    )
}

export default Payments

