import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { axiosInstance } from '../requestMethods'

export const fetchproducts = createAsyncThunk('products/fetchProducts', async()=>{
    try{
        const res = await axiosInstance.get('/products')
        return res.data
    }catch{}
})

const productSlice = createSlice({
    name:"products",
    initialState:{
        products:[],
        isFetching: false,
        error: false
    },
    reducers:{
        getProductsStart: (state)=>{
            state.products = []
            state.isFetching = true
            state.error = false
        },
        getProductsSuccess: (state, action)=>{
            state.products = action.payload
            state.isFetching = false
            state.error = false
        },
        getProductsFailure: (state)=>{
            state.isFetching = false
            state.products = []
            state.error = true
        },
        getProductStart: (state)=>{
            state.products = []
            state.isFetching = true
            state.error = false
        },
        getProductSuccess: (state, action)=>{
            state.products = action.payload
            state.isFetching = false
            state.error = false
        },
        getProductFailure: (state)=>{
            state.isFetching = false
            state.products = []
            state.error = true
        },
    },
    extraReducers(builder){
        builder.addCase(fetchproducts.pending, (state)=>{
            state.isFetching = true
            state.products = []
            state.error = false
        })
        builder.addCase(fetchproducts.fulfilled, (state, action)=>{
            state.products = state.products.concat(action.payload)
            state.isFetching = false
            state.error = false
        })
        builder.addCase(fetchproducts.rejected, (state)=>{
            state.products = []
            state.isFetching = false
            state.error = true
        })
    }
})





export const { getProductsStart, getProductsSuccess, getProductsFailure } = productSlice.actions

export default productSlice.reducer