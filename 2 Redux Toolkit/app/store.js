const configureStore = require('@reduxjs/toolkit').configureStore
const reduxLogger = require('redux-logger')
const cakeReducer = require('../features/cake/cakeSlice')
const icecreamReducer = require('../features/icecream/icecreamSlice')

const logger = reduxLogger.createLogger()

// создаем store с помощью configureStore, и присоединяем к нему reducer
const store = configureStore({
    // configureStore сама соберет все редюсеры в один общий редюсер
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
    // потому что RTK подключает Middleware автоматически, поэтому нам нужно к этому списку добавить наш логгер
})

module.exports = store
