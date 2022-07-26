import React from 'react';
import visibilitySvg from '../../../assets/svgs/visibility.svg';
import visibilityOffSvg from '../../../assets/svgs/visibility_off.svg';
import { useSelector } from 'react-redux/es/exports';
import { selectUser } from '../../../store/useSlice';

const Balance = () => {
  let [ icon, setIcon ] = React.useState(true)

  const state = useSelector(selectUser)

  const toogleIcon = () => setIcon( (state) => !state)

  return (
    <section id='balance'>
         <div id='balance__title'>
            <h2>Balance</h2>
         </div>
         <div id='balance__container'>
            <span>R$ { state }</span>
            <img src={ icon ? visibilitySvg : visibilityOffSvg } alt="" onClick={ toogleIcon } />
         </div>
    </section>
  )
}

export default Balance