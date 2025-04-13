import { createSlice } from '@reduxjs/toolkit'

export const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [] // Initialize items as an empty array
    },
    reducers: {
        addItem: (state, action) => {
            const itemToAdd = action.payload
            const itemAlreadyThere = state.items.find(
                item => item.name === itemToAdd.name
            )

            if (itemAlreadyThere) {
                itemAlreadyThere.quantity++
            } else {
                state.items.push(Object.assign({}, itemToAdd, { quantity: 1 }))
            }
        },
        removeItem: (state, action) => {

        },
        updateQuantity: (state, action) => {

        }
    }
})

export const { addItem, removeItem, updateQuantity } = CartSlice.actions

export default CartSlice.reducer
