import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'user',
    initialState: 0,
    reducers: {
        add(state, { payload }) {
            return state + payload
        },
        discount(state, { payload }) {
            return state - payload
        }
    }
})

export const { add, discount } = slice.actions

export const selectUser = state => state.user

export default slice.reducer