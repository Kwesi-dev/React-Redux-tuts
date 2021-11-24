import './navbar.css'
import { Link } from 'react-router-dom'
import { userLogout } from '../redux/apiCalls'
import { useDispatch } from 'react-redux'
const Navbar = ({ user }) => {
    const dispatch = useDispatch()
    
    const handleLogout = ()=>{
        userLogout(dispatch)
    }

    return (
        <div className="navbar">
            <div className="wrapper">
                <Link to="/" className="link">
                    <span className="logo">Kwesi Store</span>
                </Link>
                {user ? (
                  <>
                    <div className="itemsContainer">
                        <span className="item">{user.email}</span>
                        <span className="item item2" onClick={handleLogout}>Logout</span>
                    </div>
                  </>
                ):(
                    <Link to="/register" className="link">
                        <span color="item item2">Register</span>
                    </Link>
                )}
            </div>
        </div>
    )
}

export default Navbar
