import { createSlice } from '@reduxjs/toolkit'
import { ordered as cakeOrdered } from "../cake/cakeSlice";

const initialState = {
    numOfIcecreams: 20
}

// createSlice() автоматически создаст actions с теми же именами, как у reducers, которые мы задаем
const icecreamSlice = createSlice({
    name: 'icecream',
    initialState, // то же самое что "initialState: initialState", т.к. у них одинаковое имя
    reducers: {
        ordered: (state, action) => {
            state.numOfIcecreams -= action.payload
            // использует библиотеку immer, что позволяет изменять состояние напрямую
            // т.е. возможен синтаксис state.numOfIcecreams++ или state.numOfIcecreams--
        },
        restocked: (state, action) => {
            state.numOfIcecreams += action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(cakeOrdered, (state, action) => {
            state.numOfIcecreams -= action.payload
        })
    }
})

// создает основную reducer функцию, которую мы можем передать в redux store
export default icecreamSlice.reducer // экспортируем как default
// создает actions, которые мы экспортируем
export const { ordered, restocked } = icecreamSlice.actions
// экспортируем как именные функции

// slice сам создает action constants, action object, action creator,
// switch statements in reducer, immutability of data in the reducer
