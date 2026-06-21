import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        number: 0
    },
    reducers: {
        setCartNumber: (state, action) => {
            state.number = action.payload;
        },
        clearCartNumber: (state) => {
            state.number = 0
        }
    }
})

export default cartSlice.reducer;
export const { setCartNumber, clearCartNumber } = cartSlice.actions;