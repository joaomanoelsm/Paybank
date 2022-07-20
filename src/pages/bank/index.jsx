import React from 'react';
import Balance from './balance';
import Payments from './payments';
import Transactions from './transactions';

const Bank = () => {
  return (
    <main id='bank'>
      <Balance />
      <Payments />
      <Transactions />
    </main>
  )
}

export default Bank