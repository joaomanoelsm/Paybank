import React from 'react';
import Popup from '../../componentes/popup';
import Balance from './balance';
import Payments from './payments';
import Transactions from './transactions';

const Bank = () => {
  return (
    <>
      <Balance />
      <Payments />
      <Transactions />
    </>
  )
}

export default Bank