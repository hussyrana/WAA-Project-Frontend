import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartCount:0,
    products:[],
    totalPrice:0
}

export const cartSlice = createSlice({
    name:'cart',
    initialState:initialState,
    reducers:{
        increment:(state, action)=>{
            state.cartCount+=1;
            state.products.push(action.payload);
        },
        decrement:(state, action)=>{
            state.cartCount-=1
            state.products = state.products.filter(p=> p.id!==action.payload);
        },
        setTotalPrice:(state, action)=>{
            state.totalPrice = action.payload
        }
    }
})
export const { increment, decrement, setTotalPrice } = cartSlice.actions

export default cartSlice.reducer