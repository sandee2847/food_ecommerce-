import { createSlice } from "@reduxjs/toolkit";

const initialState = { cart: [] }

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        ADD_TO_CART: (state, action) => {
            const ItemIndex = state.cart.findIndex((item) => item.id === action.payload.id)
            if(ItemIndex>=0)
            {
                state.cart = state.cart[ItemIndex].qnty += 1
            }
            else {
                const temp={...action.payload, qnty:1}
                state.cart = [...state.cart, temp];
            }
        },
        REMOVE_TO_CART: (state, action) => {
            const data = state.cart.filter((ele) => ele.id !== action.payload)
            state.cart = data;
        },
        REMOVE_ONE_TO_CART: (state, action) => {

            const findIndexRemove=state.cart.findIndex((element)=>element.id===action.payload.id)
            if(state.cart[findIndexRemove].qnty>=1)
            {
                const dltItems = state.cart[findIndexRemove].qnty -= 1;
                state.cart;
            }
            else if (state.cart[findIndexRemove].qnty===1)
            {
                const data=state.cart.fliter((ele)=>ele.id!==action.payload)
            }

        },
    },
})
export const { ADD_TO_CART, REMOVE_TO_CART, REMOVE_ONE_TO_CART } = cartSlice.actions;
export default cartSlice.reducer;