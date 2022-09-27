import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showAlertMessage: false,
    alertMessageContent: null,
}


const alertMessageSlice = createSlice({
    name:'alert',
    initialState,
    reducers: {
        openAlertMessage: (state,action) => {
            state.showAlertMessage=true;
            state.alertMessageContent = action.payload
        },
        closeAlertMessage: (state) => {
            state.showAlertMessage = false;
            state.alertMessageContent = null;  
        },
    }
});

export default alertMessageSlice.reducer;
export const { openAlertMessage, closeAlertMessage } = alertMessageSlice.actions;