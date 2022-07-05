import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    users: undefined,
    isLogin: false,
    check: 0,
    me: null,
};
const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        login: (state, action) => {
            console.log(action.payload);
            state.isLogin = action.payload;
        },
        load3: (state, action) => {
            console.log(action.payload);
        },
        load4: (state, action) => {
            console.log(action.payload);
        },
        load7: (state, action) => {
            console.log(action.payload);
        },
        load5: (state, action) => {
            state.check = action.payload;
        },
        getUsers: (state, action) => {
            state.users = action.payload;
        },
        getUserById: (state, action) => {
            state.me = action.payload.data;
        },
        fistload: (state, action) => {
            state.check = 0;
        },
        checkLogin: (state, action) => {
            console.log("check login...");
        },
        // getUsers: (state, action) => {
        //   state.value = action.payload;
        // },
        // selectUserById: (state, action) => {
        //   state.value = action.payload;
        // },
    },
    extraReducers: {},
});
export const { login, getUsers, load3, load4, load5, getUserById, load7, fistload, checkLogin } = userSlice.actions;
export default userSlice.reducer;
