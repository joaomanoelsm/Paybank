import React from 'react'
import searchIcon from '../../assets/svgs/search.svg';
import addIcon from '../../assets/svgs/Add.svg';

const Search = () => {
    const [ search, setSearch ] = React.useState()

    const contacts = ['Carlos daniel', 'Douglas santos', 'Fernanda de oliveira', 'Jessica alvez da cruz', 'Amanda costa']

  return (
    <>
      <section className='search__container'>
        <label htmlFor="">Type to search for your contact</label>
        <input onChange={ ({ target }) => setSearch(target.value)} value={ search } className='input' placeholder='Look for the contact' type="text" />
        <img className='search__img' src={ searchIcon } alt="" />
      </section>
      <section className='search__list'>
        <h2>Contact</h2>
        <div className='search__contacts'>
          <div className='contact__add'>
            <img src={ addIcon } alt="" />
            <span>Add contact</span>
          </div>
          { contacts.map( contact => {
            return (
              <div className='contact' key={ contact }>
                <img src="" alt="" />
                <span>{ contact }</span>
              </div>
            )
          }) }
        </div>
      </section>
    </>
  )
}

export default Search