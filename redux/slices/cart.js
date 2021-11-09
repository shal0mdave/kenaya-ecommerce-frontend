import { createSlice } from '@reduxjs/toolkit'

const initialState = [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addProduct: (state, action) => {
            state.push(action.payload)
        },
        deleteProduct: (state, action) => {       
            const index = state.findIndex(product => product.id === action.payload.id);
            state[index] = action.payload;
        }     
    }
})

export default cartSlice.reducer;