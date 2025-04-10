const store = require('./app/store')
// импортируем действия, созданные RTK:
const cakeActions = require('./features/cake/cakeSlice').cakeActions
const icecreamActions = require('./features/icecream/icecreamSlice').icecreamActions

console.log('Initial state', store.getState())

// подключаемся к store:
const unsubscribe = store.subscribe(() => {
    console.log('Updated state', store.getState())
})

// dispatching actions:
store.dispatch(cakeActions.ordered(1))
store.dispatch(cakeActions.ordered(1))
store.dispatch(cakeActions.ordered(1))

store.dispatch(cakeActions.restocked(3))

store.dispatch(icecreamActions.ordered(1))
store.dispatch(icecreamActions.ordered(1))

store.dispatch(icecreamActions.restocked(2))

unsubscribe()
