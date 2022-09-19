export const filterNumericKeycaps= ( e ) => {
    if (isNaN(Number(e.key)) && e.key !== 'Backspace') e.preventDefault()
}

export const filterLetterKeycaps= ( e ) => {
    if (!isNaN(Number(e.key)) && e.key !== ' ') e.preventDefault()
}

export const creditCardNumberGenerator = () => {
    const numberOfCardCharacters = 16
    let cardNumber = []
    let spaceBetweenNumbers = 4
  
    for ( let i = 0 ; i < numberOfCardCharacters ; i++ ) {
      const randomNumber = Math.floor(Math.random() * 10)
  
      if ( cardNumber.length === spaceBetweenNumbers ) {
        cardNumber.push( ' ' )
        cardNumber.push( randomNumber )
        spaceBetweenNumbers += 4 + 1
      }
      else cardNumber.push( randomNumber )
    }

    return cardNumber
}