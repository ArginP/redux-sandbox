import { configureStore } from '@reduxjs/toolkit'
//import reduxLogger from 'redux-logger'
import cakeReducer from '../features/cake/cakeSlice'
import icecreamReducer from '../features/icecream/icecreamSlice'
import userReducer from '../features/user/userSlice'

// const logger = reduxLogger.createLogger()

// создаем store с помощью configureStore, и присоединяем к нему reducer
const store = configureStore({
    // configureStore сам соберет все редюсеры в один общий редюсер
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
    // потому что RTK подключает Middleware автоматически, поэтому нам нужно к этому списку добавить наш логгер
})

export default store
