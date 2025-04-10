const configureStore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require('../features/cake/cakeSlice')
const icecreamReducer = require('../features/icecream/icecreamSlice')

// создаем store с помощью configureStore, и присоединяем к нему reducer
const store = configureStore({
    // configureStore сама соберет все редюсеры в один общий редюсер
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
    }
})

module.exports = store