import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit'
import axios from 'axios'

type User = {
    id: number
    name: string
}

type InitialState = {
    loading: boolean,
    users: User[],
    error: string,
}


const initialState: InitialState = {
    loading: false,
    users: [],
    error: '',
}

// сам создаст action types для pending, fulfilled или rejected
export const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
    return axios
        .get('https://jsonplaceholder.typicode.com/users/')
        .then(res => res.data)
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchUsers.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
            state.loading = false
            state.users = action.payload
            state.error = ''
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false
            state.users = []
            state.error = action.error.message || 'Something went wrong'
        })
    }
})

export default userSlice.reducer
// экспорт именной fetchUsers на строке 11
