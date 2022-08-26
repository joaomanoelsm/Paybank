export const filterNumericKeycaps= ( e ) => {
    if (isNaN(Number(e.key)) && e.key !== 'Backspace') e.preventDefault()
}

export const filterLetterKeycaps= ( e ) => {
    if (!isNaN(Number(e.key)) && e.key !== ' ') e.preventDefault()
}

export const convertNumberToCurrency = ( currency ) => {
    return currency.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL', minimumFractionDigits: 2}) 
}