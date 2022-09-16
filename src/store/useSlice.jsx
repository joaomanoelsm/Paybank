import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    balance: 0,
    popup: false,
    warningCurrency: false,
    warningSearch: false,
    contactArray: [
        {
            name: 'Rodrigo costa',
            id: 1
        },
        {
            name: 'Carlos santos',
            id: 2
        }
    ],
    contactsTransactions: [
        {
            id: 1,
            name: 'José oliveira',
            method: 'Paybank/receive',
            value: 700,
            date: '14/12'
        },
        {
            id: 2,
            name: 'Roberta miranda',
            method: 'Paybank/receive',
            value: 2630,
            date: '14/12'
        },
        {
            id: 3,
            name: 'Marcos castro',
            method: 'Paybank/transfer',
            value: 1800,
            date: '14/12'
        }
    ],
    themeToggle: true,
    cardsArray: [
        {
        id: 1,
        bg: 'card__background--purple',
        logo: 'card__logo--purple',
        flag: 'card__flag--purple',
        limit: 10000,
        userName: 'Carlos'
        },
        {
        id: 2,
        bg: 'card__background--green',
        logo: 'card__logo--green',
        flag: 'card__flag--green',
        limit: 8700,
        userName: 'Fernando'
        }
    ]
}

export const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        add( state, { payload } ) {
            return { ...state, balance: state.balance + payload }
        },

        decrease( state, { payload } ) {
            return { ...state, balance: state.balance - payload }
        },

        setPopup( state, { payload } ) {
            return { ...state, popup: payload }
        },

        addContact( state, { payload } ) {
            return { ...state, contactArray: [...state.contactArray, {name: payload.name, id: payload.id}] }
        },
        
        setTransaction( state, { payload } ) {
            return { ...state, contactsTransactions: [...state.contactsTransactions, {name: payload.name, id: payload.id, method: payload.method, value: payload.value, date: payload.date}] }
        },

        setThemeToggle( state ) {
            return { ...state, themeToggle: !state.themeToggle }
        },

        setCustomCard( state, { payload }) {
            return { ...state, cardsArray: [ ...state.cardsArray, { bg: payload.bg, flag: payload.flag, logo: payload.logo, limit: payload.limit, userName: payload.userName, id: payload.id } ] }
        }
    }
})

export const { add, decrease, setPopup, setCurrency, addContact, setTransaction, setThemeToggle, setCustomCard } = slice.actions

export const selectUser = ( state ) => state.user

export default slice.reducer
