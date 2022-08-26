import React, { memo } from 'react'
import addIcon from '../../../assets/svgs/Add.svg';
import Popup from '../../../componentes/popup';
import { selectUser, setPopup } from '../../../store/useSlice';
import { useDispatch, useSelector } from 'react-redux';
import Warning from '../../warning';

const Search = ({ inputSearch, setInputSearch, warningSearch, inputSearchRef }) => {

  const store = useSelector(selectUser)
  const dispatch = useDispatch()

  return (
    <>
      <section className='search'>
        <div className='search__container'>
          <label htmlFor="search__input">Type to search for your contact</label>
          <input ref={ inputSearchRef }  className='search__input' onChange={ ({ target }) => setInputSearch( target.value ) } value={ inputSearch } placeholder='Look for the contact' type="text" />
        </div>
        { warningSearch && <Warning text={'This contact does not exist'} /> }
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
        { store.popup && <Popup method={'text'} title={'Add Contact'} buttonName={['Cancelar', 'Adicionar']} /> }
      </section>
    </>
  )
}

export default memo(Search)