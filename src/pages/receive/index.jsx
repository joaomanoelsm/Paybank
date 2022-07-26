import React from 'react'
import Input from '../../componentes/input'
import Search from '../../componentes/search'
import { useSelector } from 'react-redux';
import { selectUser } from '../../store/useSlice';

const Receive = () => {
  const state = useSelector(selectUser)

  console.log(state)
  
  return (
    <>
        <Input title={'Enter the amount to be charged'} />
        <Search />
    </>
  )
}

export default Receive