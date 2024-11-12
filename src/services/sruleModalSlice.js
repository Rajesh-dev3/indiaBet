// src/features/authModalSlice.js

import { createSlice } from '@reduxjs/toolkit';

const authModalSlice = createSlice({
    name: 'authModal',
    initialState: {
        isLoggedIn: false,
        isModalOpen: false,
    },
    reducers: {
        loginSuccess: (state) => {
            state.isLoggedIn = true;
            state.isModalOpen = true; // Open the modal immediately after login
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.isModalOpen = false;
        },
        closeModalRule: (state) => {
            state.isModalOpen = false;
        },
    },
});

export const { loginSuccess, logout, closeModalRule } = authModalSlice.actions;
export default authModalSlice.reducer;
