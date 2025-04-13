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
            const itemNameToRemove = action.payload
            state.items = state.items.filter(item => item.name !== itemNameToRemove)
        },
        updateQuantity: (state, action) => {
            const itemNametoUpdateQuantity = action.payload.name
            const itemAlreadyThere = state.items.find(
                item => item.name === itemNametoUpdateQuantity
            )
            const actionType = action.payload.actionType

            if (actionType === 'increment') {
                itemAlreadyThere.quantity++
            } else if (actionType === 'decrement') {
                if (itemAlreadyThere.quantity > 1) {
                    itemAlreadyThere.quantity--
                } else {
                    state.items = state.items.filter(
                        item => item.name !== itemNametoUpdateQuantity
                    )
                }
            }
        }
    }
})

export const { addItem, removeItem, updateQuantity } = CartSlice.actions

export default CartSlice.reducer
