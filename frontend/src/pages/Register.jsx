import './register.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { axiosInstance } from '../requestMethods'
const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const newUser = {
        email,
        password
    }

    const handleClick = async (e)=>{
        e.preventDefault()
        try{
            await axiosInstance.post('/auth/register', newUser)
        }catch{}
    }

    return (
        <div className="register">
            <form className="form">
                <input type="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
                <button className="registerBtn" onClick={handleClick}>Register</button>
                <Link to="/login" className="link">
                    <span style={{color: "blue", cursor: "pointer"}}>Already has account, <strong>login</strong></span>
                </Link>
            </form>
        </div>
    )
}

export default Register
