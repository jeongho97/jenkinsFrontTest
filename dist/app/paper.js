import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    papers: [],
    isLoading: false,
    error: null,
    selectedUser: undefined,
    selectedPaper: undefined,
};
const paperSlice = createSlice({
    name: "papers",
    initialState,
    reducers: {
        select: (state, action) => {
            state.selectedUser = action.payload;
        },
        selectPaper: (state, action) => {
            console.log(action.payload);
            state.selectedPaper = action.payload;
        },
        getPapers: (state, action) => {
            console.log(action.payload);
            state.papers = action.payload;
        },
        load: (state) => {
            state.isLoading = true;
        },
        load2: (state, action) => {
            //   state.paperdata = action.payload;
            console.log(action.payload);
            state.selectedUser = undefined;
        },
        getPapersFail: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        requestGetGift: (state, action) => {
            console.log(action.payload);
        },
        getGiftFromId: (state, action) => {
            state.selectedPaper = Object.assign(Object.assign({}, state.selectedPaper), { gift: action.payload });
        },
        getGiftByIdFails: (state, action) => {
            state.error = action.payload;
        },
    },
});
export const { select, selectPaper, getPapers, getPapersFail, load, load2, getGiftFromId, getGiftByIdFails, requestGetGift } = paperSlice.actions;
export default paperSlice.reducer;
