const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numOfCakes: 10
}

// createSlice() автоматически создаст actions с теми же именами, как у reducers, которые мы задаем
const cakeSlice = createSlice({
    name: 'cake',
    initialState, // то же самое что "initialState: initialState", т.к. у них одинаковое имя
    reducers: {
        ordered: (state, action) => {
            state.numOfCakes -= action.payload
            // использует библиотеку immer, что позволяет изменять состояние напрямую
            // т.е. возможен синтаксис state.numOfCakes++ или state.numOfCakes--
        },
        restocked: (state, action) => {
            state.numOfCakes += action.payload
        }
    }
})

// создает основную reducer финкцию, которую мы можем передать в redux store
module.exports = cakeSlice.reducer
// создает actions, которые мы экспортируем
module.exports.cakeActions = cakeSlice.actions

// slice сам создает action constants, action object, action creator,
// switch statements in reducer, immutability of data in the reducer