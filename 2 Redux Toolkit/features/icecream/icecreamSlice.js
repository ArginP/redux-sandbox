const createSlice = require('@reduxjs/toolkit').createSlice

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
        builder.addCase('cake/ordered', (state, action) => {
            state.numOfIcecreams -= action.payload
        })
    }
})

// создает основную reducer финкцию, которую мы можем передать в redux store
module.exports = icecreamSlice.reducer // экспортируем как default
// создает actions, которые мы экспортируем
module.exports.icecreamActions = icecreamSlice.actions // экспортируем как именной

// slice сам создает action constants, action object, action creator,
// switch statements in reducer, immutability of data in the reducer
