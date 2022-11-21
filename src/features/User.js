import { createSlice } from "@reduxjs/toolkit"

let initialUser = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : ''

const userSlice = createSlice({
    name: 'user',
    initialState: {user: initialUser},
    reducers: {
        createUser: (state, action) => {
            state.user = action.payload
            localStorage.setItem('user', JSON.stringify(action.payload))
        }
    }
})

export const {createUser} = userSlice.actions
export default userSlice.reducer
