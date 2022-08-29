import React from 'react'
import { selectUser, setPopup } from '../../../store/useSlice'
import { useDispatch, useSelector } from 'react-redux'
import addIcon from '../../../assets/svgs/Add.svg';

const Contacts = ({ setInputSearch }) => {
    const store = useSelector(selectUser)
    const dispatch = useDispatch()

  return (
    <div className='search__content'>
      <h2>Contact</h2>
      <div className='search__list'>
        <div onClick={ () => dispatch(setPopup(true)) } className='search__add__contact'>
          <img className='search__add__contact__img' src={ addIcon } alt="" />
          <span>Add contact</span>
        </div>
        <div className='search__contacts'>
          <ul>
            { store.contactArray.map( contact => {
            return (
              <li onClick={ ({ target }) => setInputSearch(target.innerText) } key={ contact.id }>
                { contact.name }
              </li>
            )
            }) }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contacts