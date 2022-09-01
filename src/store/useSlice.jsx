import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    balance: 0,
    popup: false,
    warningCurrency: false,
    warningSearch: false,
    contactArray: [
        {
            name: 'Rodrigo',
            id: 1
        },
        {
            name: 'Carlos',
            id: 2
        }
    ],
    contactsTransactions: [
        {
            id: 1,
            name: 'Paula martins de castro',
            method: 'receive',
            value: 700,
            date: '14/12'
        },
        {
            id: 2,
            name: 'Roberta miranda oliveira',
            method: 'receive',
            value: 2630,
            date: '14/12'
        },
        {
            id: 3,
            name: 'Marcos silvano',
            method: 'transfer',
            value: 1800,
            date: '14/12'
        },
        {
            id: 4,
            name: 'Cláudia soarez',
            method: 'receive',
            value: 1200,
            date: '14/12'
        },
        {
            id: 5,
            name: 'Kleber de machado alvez',
            method: 'transfer',
            value: 200,
            date: '11/12'
        },
        {
            id: 6,
            name: 'Paulo césar soarez',
            method: 'transfer',
            value: 4700,
            date: '06/12'
        }
    ],
    themeToggle: true
}

export const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        add(state, { payload } ) {
            return { ...state, balance: state.balance + payload }
        },

        decrease(state, { payload } ) {
            return { ...state, balance: state.balance - payload }
        },

        setPopup(state, { payload } ) {
            return { ...state, popup: payload }
        },

        addContact(state, { payload } ) {
            return { ...state, contactArray: [...state.contactArray, {name: payload.name, id: payload.id}] }
        },
        
        setTransaction( state, { payload } ) {
            return { ...state, contactsTransactions: [...state.contactsTransactions, {name: payload.name, id: payload.id, method: payload.method, value: payload.value, date: payload.date}] }
        },

        resetData( state) {
            return { ...state, inputCurrency: 0, search: ''}
        },

        setWarningCurrency( state, { payload }) {
            return {...state, warningCurrency: payload}
        },

        setWarningSearch( state, { payload }) {
            return { ...state, warningSearch: payload}
        },
        setThemeToggle(state) {
            return { ...state, themeToggle: !state.themeToggle }
        }
    }
})

export const { add, decrease, setPopup, setCurrency, addContact, setTransaction, resetData, setWarningCurrency, setWarningSearch, setThemeToggle } = slice.actions

export const selectUser = (state) => state.user

export default slice.reducer
