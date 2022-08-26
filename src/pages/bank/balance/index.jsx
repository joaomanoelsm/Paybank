import React from 'react';
import visibilitySvg from '../../../assets/svgs/visibility.svg';
import visibilityOffSvg from '../../../assets/svgs/visibility_off.svg';
import { useSelector } from 'react-redux/es/exports';
import { selectUser } from '../../../store/useSlice';
import { convertNumberToCurrency } from '../../../utils';

const Balance = () => {
  let [ icon, setIcon ] = React.useState(true)

  const balanceRef = React.useRef()

  const store = useSelector(selectUser)

  const toogleIcon = () => setIcon( (state) => !state)

  React.useEffect( () => {
    
    icon ? balanceRef.current.innerText = convertNumberToCurrency( store.balance ) 
    : balanceRef.current.innerText = 'R$ ****'

  }, [ icon, store.balance ])

  return (
    <section id='balance'>
         <div id='balance__title'>
            <h2>Balance</h2>
         </div>
         <div id='balance__view'>
            <span ref={ balanceRef }>{ store.balance }</span>
            <img src={ icon ? visibilitySvg : visibilityOffSvg } alt="" onClick={ toogleIcon } />
         </div>
    </section>
  )
}

export default Balance