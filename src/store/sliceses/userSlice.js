import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        userLoggedIn: false,
        userId: '',
        userName: "",
        userRole: "USER",
        userEmail: ''
    },
    reducers: {
        setUserInfo: (state, action) => {
            state.userLoggedIn = action.payload.logged
            state.userId = action.payload.id
            state.userName = action.payload.name
            state.userEmail = action.payload.email
            state.userRole = action.payload.role
        },
        clearUserInfo: (state) => {
            state.userLoggedIn = false;
            state.userId = '';
            state.userName = '';
            state.userRole = 'USER';
            state.userEmail = '';
        }

    }


});
export const { setUserInfo, clearUserInfo } = userSlice.actions;
export default userSlice.reducer;