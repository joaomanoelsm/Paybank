import React from 'react'

export const CreateContext = React.createContext()

export const GlobalContext = ({children}) => {
    let [ popup, setPopup ] = React.useState(false)

    return (
        <CreateContext.Provider value={{ popup, setPopup }}>
            {children}
        </CreateContext.Provider>
    )
}