import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    loading: false,
    register:[],
    error: '',
}

export const userRegister = createAsyncThunk('register/userRegister', (data) => {
    const {mail,username,password} = data;
    const {navigate} = data;
    return axios.post('http://localhost:5002/api/auth/register', {mail,username,password}).then(response => [response.data, navigate]);
});

const registerSlice = createSlice({
    name: 'register',
    initialState,
    extraReducers: builder => {
        builder.addCase(userRegister.pending, state => {
            state.loading = true;
        })
        builder.addCase(userRegister.fulfilled, (state,action) => {
            state.loading = false;
            state.register = action.payload;
            state.error = '';
            console.log(action.payload);
            const {userDetails} = action.payload[0];
            const navigate = action.payload[1];
            localStorage.setItem("user",JSON.stringify(userDetails));
            navigate('/dashboard');
        })
        builder.addCase(userRegister.rejected, (state, action) => {
            state.loading = false;
            state.register = [];
            state.error = action.error.message;
        })
    }
});

export default registerSlice.reducer;



