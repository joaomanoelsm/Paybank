import React from 'react'
import { CreateContext } from '../../store/useContext'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { selectUser } from '../../store/useSlice'

const Popup = () => {
  let { setPopup } = React.useContext(CreateContext)

  const state = useSelector(selectUser)

  return (
    <div className='popup__wallpaper'>
        <div className='popup'>
            <h3>Enviar para</h3>
            <span>Carlos daniel</span>
            <div className='popup__buttons__container'>
                <button onClick={ () => setPopup(false)} className='popup__buttons popup__buttons__1'>Cancelar</button>
                <button onClick={ () => setPopup(false)} className='popup__buttons popup__buttons__2'>Enviar</button>
            </div>
        </div>
    </div>
  )
}

export default Popup