import { useState } from 'react'
import './login.css'
import { useDispatch } from 'react-redux'
import { userLogin } from '../redux/userSlice'
const Login = () => {
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const dispatch = useDispatch()

    const user = {
        email,
        password
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(userLogin(user))
    }

    return (
        <div className="login">
            <form className="form" onSubmit={handleSubmit}>
                <input type="email" placeholder="email" onChange={e=>setEmail(e.target.value)}/>
                <input type="password" placeholder="password" onChange={e=>setPassword(e.target.value)}/>
                <button className="loginBtn" type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login
