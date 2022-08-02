import React from 'react'
import searchIcon from '../../../assets/svgs/search.svg';
import addIcon from '../../../assets/svgs/Add.svg';
import Popup from '../../../componentes/popup';
import Button from '../../button';
import { selectUser, setPopup } from '../../../store/useSlice';
import { useSelector } from 'react-redux';

const Search = () => {
  const contactName = [
    {
      name: 'rodrigo',
      id: 1
    },
    {
      name: 'carlos',
      id: 2
    }
  ]

  const [ search, setSearch ] = React.useState('')
  const store = useSelector(selectUser)

    
  return (
    <>
      <section className='search'>
        <div className='search__container'>
          <label htmlFor="">Type to search for your contact</label>
          <input onChange={ ({ target }) => setSearch(target.value)} value={ search } placeholder='Look for the contact' type="text" />
          <img className='search__image' src={ searchIcon } alt="" />
        </div>
        <div className='search__content'>
          <h2>Contact</h2>
          <div className='search__list'>
            <div onClick={ () => setPopup(true) } className='search__add__contact'>
              <img className='search__add__contact__img' src={ addIcon } alt="" />
              <span>Add contact</span>
            </div>
            <div className='search__contacts'>
              <ul>
                { contactName.map( contact => {
                return (
                  <li onClick={ ({ target }) => setSearch( target.innerText )} key={ contact.id }>
                    { contact.name }
                  </li>
                )
                }) }
              </ul>
            </div>
          </div>
        </div>
        { search ? <Button /> : null}
        { store.popup ? <Popup title={'Adicionar contato'} buttonName={['Cancelar', 'Adicionar']} /> : null}
      </section>
    </>
  )
}

export default Search