import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { login } from "../../api";


const initialState = {
    loading: false,
    login:[],
    error:'',
}

export const userLogin = createAsyncThunk('login/userLogin', (data)=> {
    const {mail,password} = data;
    const {navigate} = data;
    // return axios.post('http://localhost:5002/api/auth/login', {mail,password}).then(response=> [response.data,navigate]);
    return login('/auth/login', {mail,password}).then(response=> [response.data,navigate]);
});

const loginSlice = createSlice({
    name:'login',
    initialState,
    extraReducers: builder => {
        builder.addCase(userLogin.pending, state => {
            state.loading = true;
        })
        builder.addCase(userLogin.fulfilled, (state, action) => {
            state.loading = false;
            state.login = action.payload;
            state.error = '';
            console.log(action.payload);
            const {userDetails} = action.payload[0];
            const navigate = action.payload[1];
            localStorage.setItem("user",JSON.stringify(userDetails));
            navigate('/dashboard');
        })
        builder.addCase(userLogin.rejected, (state, action) => {
            state.loading = false;
            state.login = [];
            state.error = action.error.message;
        })
    }
});

export default loginSlice.reducer;