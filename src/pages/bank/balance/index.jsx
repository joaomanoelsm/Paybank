import React from 'react';
import visibilitySvg from '../../../assets/svgs/visibility.svg';
import visibilityOffSvg from '../../../assets/svgs/visibility_off.svg';

const Balance = () => {
  let [ icon, setIcon ] = React.useState(true)

  const toogleIcon = () => setIcon( (state) => !state)

  return (
    <section id='balance'>
         <div id='balance__title'>
            <h2>Balance</h2>
         </div>
         <div id='balance__container'>
            <span>R$ 1.400,32</span>
            <img src={ icon ? visibilitySvg : visibilityOffSvg } alt="" onClick={ toogleIcon } />
         </div>
    </section>
  )
}

export default Balance