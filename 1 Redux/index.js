const redux = require('redux') // import redux from 'redux' -- jsx syntax
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware // подключение middleware к redux

const reduxLogger = require('redux-logger') // redux-logger middleware
const logger = reduxLogger.createLogger()

// --- Redux Actions: ---
const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'
const ICECREAM_ORDERED = 'ICECREAM_ORDERED'
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED'

// --- Action creators: ---

function orderCake(qty = 1){
    return {
        type: CAKE_ORDERED,
        payload: qty
    }
}

function restockCake(qty = 1) {
    return {
        type: CAKE_RESTOCKED,
        payload: qty
    }
}

function orderIceCream(qty = 1){
    return {
        type: ICECREAM_ORDERED,
        payload: qty
    }
}

function restockIceCream(qty = 1) {
    return {
        type: ICECREAM_RESTOCKED,
        payload: qty
    }
}

// --- Initial state: ---

// const initialState = {
//     numOfCakes: 10,
//     numOfIceCreams: 20
// }

const initialCakeState = {
    numOfCakes: 10,
}

const initialIceCreamState = {
    numOfIceCreams: 20
}

// --- Redux Reducer: ---
// (previousState, action) => newState

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case CAKE_ORDERED:
//             return {
//                 ...state,
//                 numOfCakes: state.numOfCakes - action.payload
//             }
//         case CAKE_RESTOCKED:
//             return {
//                 ...state,
//                 numOfCakes: state.numOfCakes + action.payload
//             }
//         case ICECREAM_ORDERED:
//             return {
//                 ...state,
//                 numOfIceCreams: state.numOfIceCreams - action.payload
//             }
//         case ICECREAM_RESTOCKED:
//             return {
//                 ...state,
//                 numOfIceCreams: state.numOfIceCreams + action.payload
//             }
//         default:
//             return state;
//     }
// }

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes - action.payload
            }
        case CAKE_RESTOCKED:
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload
            }
        default:
            return state;
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case ICECREAM_ORDERED:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - action.payload
            }
        case ICECREAM_RESTOCKED:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams + action.payload
            }
        default:
            return state;
    }
}

// Объединение редюсеров: необходимо потому что createStore()

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
})

// --- Redux Store: ---

const store = createStore(rootReducer, applyMiddleware(logger)) // подключаем middleware здесь
console.log('Initial state', store.getState())

const unsubscribe = store.subscribe(() => {
    // console.log('Update store', store.getState())
    // теперь не нужно, так как за логирование теперь отвечает applyMiddleware(logger)
})

// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
//
// store.dispatch(restockCake(3))

// --- Helper function bindActionCreators from redux ---
// works the same way as calling store.dispatch()
// (imported at the top)

const actions = bindActionCreators({ orderCake, restockCake, orderIceCream, restockIceCream }, store.dispatch)

actions.orderCake();
actions.orderCake();
actions.orderCake();

actions.restockCake(3);

actions.orderIceCream();
actions.orderIceCream();

actions.restockIceCream(2);

unsubscribe()
