import React from 'react'
import receiveIcon from '../../../assets/svgs/More.svg';
import transferIcon from '../../../assets/svgs/Less.svg';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../store/useSlice';

const Transactions = () => {
    const store = useSelector(selectUser)

  return (
    <section id='transactions'>
        <div id='transactions__title'>
            <h2>Transactions</h2>
        </div>
        <div id='transactions__historic'>
            {store.contactsTransactions.map( user => {
                let icon;
                if (user.method === 'transfer') {
                    icon = transferIcon
                } else {
                    icon = receiveIcon
                }
                return (
                    <div className='transactions__itens' key={ user.id }>
                        <div className='transactions__info'>
                            <img src={ icon } alt="" />
                            <div className='transactions__data'>
                                <div className='transactions__name'>
                                    <span>{ user.name }</span>
                                </div>
                                <div className='transactions__date'>
                                    <span>{ user.date }</span>
                                </div>
                            </div>
                        </div>
                        <div className='transactions__amount'>
                            <span>R$ { user.value }</span>
                        </div>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default Transactions