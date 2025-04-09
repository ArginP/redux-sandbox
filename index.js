const redux = require('redux')
const createStore = redux.createStore

// import redux from 'redux' -- jsx syntax

// Redux Action:
const CAKE_ORDERED = 'CAKE_ORDERED'

function orderCake(){
    return {
        type: CAKE_ORDERED,
        quantity: 1
    }
}


const initialState = {
    numOfCakes: 10
}

// Redux Reducer:
// (previousState, action) => newState

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        default:
            return state;
    }
}

// Redux Store:

const store = createStore(reducer)
console.log('Initial state', store.getState())

const unsubscribe = store.subscribe(() => {
    console.log('Update store', store.getState())
})

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())

unsubscribe()

store.dispatch(orderCake())
