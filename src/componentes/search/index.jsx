import React from 'react'
import searchIcon from '../../assets/svgs/search.svg';
import addIcon from '../../assets/svgs/Add.svg';

const Search = () => {
    const [ search, setSearch ] = React.useState('')
    const contacts = ['Carlos daniel', 'Douglas santos', 'Fernanda de oliveira', 'Jessica alvez da cruz', 'Amanda costa']

  return (
    <>
      <section className='search'>
        <label htmlFor="">Type to search for your contact</label>
        <input onChange={ ({ target }) => setSearch(target.value)} value={ search } className='input' placeholder='Look for the contact' type="text" />
        <img src={ searchIcon } alt="" />
        <div className='search__content'>
          <h2>Contact</h2>
          <div className='search__list'>
            <div className='search__add__contact'>
              <img src={ addIcon } alt="" />
              <span>Add contact</span>
            </div>
            <div className='search__contacts'>
              <ul>
                { contacts.map( contact => {
                return (
                  <li onClick={ ({ target }) => setSearch( target.innerText )} className='contact' key={ contact }>
                    <span>{ contact }</span>
                  </li>
                )
                }) }
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search