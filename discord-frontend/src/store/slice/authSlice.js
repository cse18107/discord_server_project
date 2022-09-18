import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userDetails: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        dummy: ( state )=> {
            state.isLoading=true;
        }
    }
});

export default userSlice.reducer;
export const {dummy} = userSlice.actions;