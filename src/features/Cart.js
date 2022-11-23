import { createSlice } from "@reduxjs/toolkit"

const initialCart = {
    items: [],
    orderItems: [],
    totalPrice: 0,
    totalQuantity: 0,
    totalDiscount: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCart,
    reducers: {
        addToCart: (state, action) => {
            let item = action.payload

            if (state.items.length === 0) {
                state.items = [...state.items, { ...item, tdsc: item.discount * item.quantity ,subtotal: (item.price * item.quantity) - item.discount  }]
            } else {
                let exist = state.items.findIndex(si => si.id === item.id)

                if (exist > -1) {

                    if (state.items[exist].quantity >= state.items[exist].stock) {
                        state.items = [...state.items]
                    } else {
                        state.items = [...state.items]
                        state.items[exist].quantity =  parseInt(state.items[exist].quantity) + 1
                        state.items[exist].tdsc = state.items[exist].discount *  parseInt(state.items[exist].quantity) + 1
                        state.items[exist].subtotal = (state.items[exist].price * state.items[exist].quantity) - state.items[exist].tdsc
                    }
                
                } else {
                    state.items = [...state.items, { ...item, tdsc: item.discount * item.quantity, subtotal: (item.price * item.quantity) - item.discount  }]
                }
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(si => si.id !== action.payload.id)
        },
        reduceQuantity: (state, action) => {
            let product = action.payload
            
            state.items = state.items.map(item => {
                if (item.id === product.id) {
                    return { ...item, quantity: parseInt(item.quantity) - 1, tdsc: item.discount * (item.quantity - 1), subtotal: (item.price * (item.quantity - 1) ) - (item.discount * (item.quantity - 1))  }
                } else {
                    return item
                }
            })
        },
        updateOrderItems: (state, action) => {
            state.orderItems = []
            state.items.forEach(item => {
                state.orderItems =  [...state.orderItems, { product_id: item.id, qty: item.quantity, price: item.price, sub_total: item.subtotal }]
            })
        },
        updatePrice: (state, action) => {
            let price = 0
            state.items.forEach(si => (price += si.price * si.quantity))

            state.totalPrice = price
        },
        updateQuantity: (state, action) => {
            let quantity = 0
            state.items.forEach(si => quantity += si.quantity)
            state.totalQuantity = quantity
        },
        updateDiscount: (state, action) => {
            let discount = 0
            state.items.forEach(si => discount += si.discount * si.quantity)
            state.totalDiscount = discount
        },
        clearCart: (state, action) => {
            state.items = []
            state.orderItems = []
            state.totalDiscount = 0
            state.totalQuantity = 0
            state.totalPrice = 0
        }
    }
})

export const { addToCart, removeFromCart, reduceQuantity, updatePrice, updateDiscount, updateOrderItems, updateQuantity, clearCart } = cartSlice.actions
export default cartSlice.reducer