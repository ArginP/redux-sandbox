const configureStore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require('../features/cake/cakeSlice')

// создаем store с помощью configureStore, и присоединяем к нему reducer
const store = configureStore({
    reducer: {
        cake: cakeReducer,
    }
})

module.exports = store