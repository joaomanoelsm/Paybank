import React from 'react'
import alertIcon from '../../assets/svgs/Alert.svg';

const Warning = ({ text }) => {
  return (
    <div className='warning'>
        <img src={ alertIcon } alt="" />
        <span>Warning: { text }</span>
    </div>
  )
}

export default Warning