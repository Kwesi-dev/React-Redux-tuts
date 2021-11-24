// import { axiosInstance } from "../requestMethods"
// import { loginStart, loginFailure, loginSuccess, logout } from "./userSlice"
// import { getProductsFailure, getProductsSuccess, getProductsStart } from "./productSlice"
import { logout } from "./userSlice"

// export const userLogin = async (dispatch, user)=>{
//     dispatch(loginStart())
//     try{
//         const res = await axiosInstance.post('/auth/login', user)
//         dispatch(loginSuccess(res.data))
//     }catch(err){
//         dispatch(loginFailure())
//     }
// }
export const userLogout = (dispatch)=>{
    dispatch(logout())
}

// export const fetchProducts = async (dispatch)=>{
//     dispatch(getProductsStart())
//     try{
//         const res = await axiosInstance('/products')
//         dispatch(getProductsSuccess(res.data))
//     }catch{
//         dispatch(getProductsFailure())
//     }
    
// }


