import { configureStore } from '@reduxjs/toolkit'
//import reduxLogger from 'redux-logger'
import cakeReducer from '../features/cake/cakeSlice'
import icecreamReducer from '../features/icecream/icecreamSlice'
// import userReducer from '../features/user/userSlice'
import { userApi } from '../features/user/userApi';

// const logger = reduxLogger.createLogger()

// создаем store с помощью configureStore, и присоединяем к нему reducer
const store = configureStore({
    // configureStore сам соберет все редюсеры в один общий редюсер
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        // user: userReducer,
        [userApi.reducerPath]: userApi.reducer, // Редюсер RTK Query
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
    // потому что RTK подключает Middleware автоматически, поэтому нам нужно к этому списку добавить наш логгер
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(userApi.middleware), // Добавляем middleware RTK Query
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
