import React, { memo } from 'react';
import Warning from '../../warning';

const Currency = ({ title, warningText, inputCurrency, setInputCurrency, warningCurrency, inputCurrencyRef }) => {

    const currentPage = window.location.pathname !== '/Paybank/credit/add-card'

    return (
        <section className='search'>
            <label htmlFor="search__input">{ title }</label>
            <input autoFocus={ currentPage ? true : false } ref={ inputCurrencyRef } onChange={ ({ target }) => setInputCurrency( target.value )} value={ inputCurrency } className='search__input' placeholder='R$' type="text" />
            { warningCurrency && <Warning text={ warningText } /> }
        </section>
    )
}

export default memo(Currency)