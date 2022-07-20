import React from 'react'

const Search = () => {
    const [ search, setSearch ] = React.useState()

  return (
    <div className='search__container'>
            <label htmlFor="">Digite o valor a cobrar</label>
            <input onChange={ ({ target }) => setSearch(target.value)} value={ search } className='input' placeholder='R$' type="text" />
    </div>
  )
}

export default Search