import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type comment = {
    id: number;
    userId: string;
    boardId: number;
    comment: string;
    like2: number;
    ref2: number;
    seq: number;
    img: string;
    date: string;
} | null;

export type userState = {
    comment?: Array<comment>;
    isLogin: boolean;
    check: number;
    BoardNum: Number;
};
const initialState: userState = {
    comment: undefined,
    isLogin: false,
    check: 0,
    BoardNum: 0,
};

const commentSlice = createSlice({
    name: "comment",
    initialState,
    reducers: {
        loadaddcomment: (state: userState, action: PayloadAction<Object>) => {
            //console.log("dfaf:", action.payload);
        },
        getUsers: (state: userState, action: PayloadAction<Array<any>>) => {
            state.comment = action.payload;
        },
        loadcomment: (state: userState, action: PayloadAction<Object>) => {
            console.log(action);
        },
        inputBoardId: (state: userState, action: PayloadAction<Number>) => {
            state.BoardNum = action.payload;
        },
        loadaddlove: (state: userState, action: PayloadAction<Object>) => {
            console.log(action);
        },
    },
    extraReducers: {},
});
export const { loadaddcomment, getUsers, loadcomment, inputBoardId, loadaddlove } = commentSlice.actions;
export default commentSlice.reducer;
