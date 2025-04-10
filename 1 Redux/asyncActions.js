const redux = require('redux')
const { thunk } = require('redux-thunk')
// import thunk and pass it to createStore function as middleware
// to pass functions with action creator instead of just actions
// const thunkMiddleware = require('redux-thunk').thunk - тоже сработает
const axios = require('axios') // import axios for async action
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

// --- State: ---

const initialState = {
    loading: false,
    users: [],
    error: '',
}

// --- Constants for Actions: ---

const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED'
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED'
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'

// --- Actions: ---

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUESTED,
    }
}

const fetchUsersSuccess = users => {
    return {
        type: FETCH_USERS_SUCCEEDED,
        payload: users,
    }
}

const fetchUsersFailure = error => {
    return {
        type: FETCH_USERS_FAILED,
        payload: error,
    }
}

// --- Asynchronous action creator: ---

const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fetchUsersRequest())
        axios // axios request with dispatch necessary actions
            .get('https://jsonplaceholder.typicode.com/users/')
            .then(response => {
                // response.data is the users
                const users = response.data.map(user => user.id)
                dispatch(fetchUsersSuccess(users))
            })
            .catch(error => {
                // error.message is the error message
                dispatch(fetchUsersFailure(error))
            })
    }
}

// --- Reducer: ---

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUESTED:
            return {
                ...state,
                loading: true,
            }
        case FETCH_USERS_SUCCEEDED:
            return {
                ...state,
                loading: false,
                users: action.payload,
                error: '',
            }
        case FETCH_USERS_FAILED:
            return {
                ...state,
                loading: false,
                users: [],
                error: action.payload,
            }
        default:
            return state
    }
}

// --- Create Store and Link: ---

const store = createStore(reducer, applyMiddleware(thunk))
console.log('Initial State', store.getState())

store.subscribe(() => {console.log(store.getState())})
store.dispatch(fetchUsers())
