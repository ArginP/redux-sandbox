import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
    numOfCakes: number
}

const initialState: InitialState = {
    numOfCakes: 10
}

// createSlice() автоматически создаст actions с теми же именами, как у reducers, которые мы задаем
const cakeSlice = createSlice({
    name: 'cake',
    initialState, // то же самое что "initialState: initialState", т.к. у них одинаковое имя
    reducers: {
        ordered: (state, action: PayloadAction<number>) => {
            state.numOfCakes -= action.payload
            // использует библиотеку immer, что позволяет изменять состояние напрямую
            // т.е. возможен синтаксис state.numOfCakes++ или state.numOfCakes--
        },
        restocked: (state, action: PayloadAction<number>) => {
            state.numOfCakes += action.payload
        }
    }
})

// назвние действий будет по следующему образу:
// 'cake/ordered'
// первая половина по названию слайса,
// вторая половина через слеш по названию редюсера

// создает основную reducer финкцию, которую мы можем передать в redux store
export default cakeSlice.reducer // экспортируем как default
// создает actions, которые мы экспортируем
export const { ordered, restocked } = cakeSlice.actions
// экспортируем как именные функции

// slice сам создает action constants, action object, action creator,
// switch statements in reducer, immutability of data in the reducer
