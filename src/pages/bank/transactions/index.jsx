import React from 'react'
import receiveIcon from '../../../assets/svgs/More.svg';
import transferIcon from '../../../assets/svgs/Less.svg';

const Transactions = () => {
    const transactionsInformations = [
        {
            id: 1,
            name: 'Paula martins de castro',
            method: 'receive',
            value: 700,
            date: '14/12'
        },
        {
            id: 2,
            name: 'Roberta miranda oliveira',
            method: 'receive',
            value: 2630,
            date: '14/12'
        },
        {
            id: 3,
            name: 'Marcos silvano',
            method: 'transfer',
            value: 1800,
            date: '14/12'
        },
        {
            id: 4,
            name: 'Cláudia soarez',
            method: 'receive',
            value: 1200,
            date: '14/12'
        },
        {
            id: 5,
            name: 'Kleber de machado alvez',
            method: 'transfer',
            value: 200,
            date: '11/12'
        },
        {
            id: 6,
            name: 'Paulo césar soarez',
            method: 'transfer',
            value: 4700,
            date: '06/12'
        }
    ]

  return (
    <section id='transactions'>
        <div id='transactions__title'>
            <h2>Transactions</h2>
        </div>
        <div id='transactions__historic'>
            {transactionsInformations.map( user => {
                let icon;
                if (user.method === 'transfer') {
                    icon = transferIcon
                } else {
                    icon = receiveIcon
                }
                return (
                    <div className='transactions__historic__itens' key={ user.id }>
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