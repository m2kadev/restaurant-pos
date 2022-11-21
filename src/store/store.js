import { configureStore } from "@reduxjs/toolkit"
import cartReducer from '../features/Cart'
import userReducer from '../features/User'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer
    }
})