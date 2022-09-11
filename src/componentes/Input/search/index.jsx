import React, { memo } from 'react'
import Popup from '../../../componentes/popup';
import { selectUser } from '../../../store/useSlice';
import { useSelector } from 'react-redux';
import Warning from '../../warning';

const Search = ({ title, inputSearch, setInputSearch, warningSearch, inputSearchRef, warningText }) => {

  const store = useSelector(selectUser)

  const currentPage = window.location.pathname === '/Paybank/credit/add-card'
  
  return (
    <>
      <section className='search'>
        <div className='search__container'>
          <label htmlFor="search__input">{ title ? title : 'Type to search for your contact'}</label>
          <input autoFocus={ currentPage ? true : false } ref={ inputSearchRef }  className='search__input' onChange={ ({ target }) => setInputSearch( target.value ) } value={ inputSearch } placeholder={ currentPage ? 'Between 4 and 10 characters' : 'Look for the contact'} type="text" />
        </div>
        { warningSearch && <Warning text={ warningText ? warningText : 'This contact does not exist'} /> }
        { store.popup && <Popup method={'text'} title={'Add Contact'} buttonName={['Cancelar', 'Adicionar']} /> }
      </section>
    </>
  )
}

export default memo(Search)