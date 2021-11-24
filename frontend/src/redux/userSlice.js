import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../requestMethods'

export const userLogin = createAsyncThunk('users/userLogin', async(user)=>{
    try{
        const res = await axiosInstance.post('/auth/login', user)
        return res.data
    }catch{}
})

const userSlice = createSlice({
    name: "user",
    initialState:{
        user: null,
        isFetching: false,
        error: false
    },
    reducers: {
        loginStart: (state)=>{
            state.isFetching = true
            state.user = null
            state.error = false
        },
        loginSuccess: (state, action)=>{
            state.isFetching = false
            state.user = action.payload
            state.error = false
        },
        loginFailure: (state)=>{
            state.isFetching = false
            state.user = null
            state.error = true
        },
        logout: (state)=>{
            state.isFetching = false
            state.user = null
            state.error = false
        },
    },
    extraReducers(builder){
        builder.addCase(userLogin.pending, (state)=>{
            state.isFetching = false
            state.user = null
            state.error = false
        })
        builder.addCase(userLogin.fulfilled, (state, action)=>{
            state.isFetching = false
            state.user = action.payload
            state.error = false
        })
        builder.addCase(userLogin.rejected, (state)=>{
            state.isFetching = false
            state.user = null
            state.error = true
        })
    }
})

export const { loginStart, loginSuccess, loginFailure, logout } = userSlice.actions

export default userSlice.reducer