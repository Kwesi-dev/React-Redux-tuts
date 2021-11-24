import './App.css';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Products from './pages/Products';
import Register from './pages/Register';
import SingleProduct from './pages/SingleProduct';
import { BrowserRouter as Router, Routes, Route , Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
function App() {
  const user = useSelector(state=>state.userReducer.user)
  return (
    <Router>  
      <div className="App">
          <Navbar user={user}/>
          <Routes>
            <Route path="/" element={<Products/>}/>
            <Route path="/product/:id" element={user ? <SingleProduct/> : <Navigate to="/register"/>}/>
            <Route path="/register" element={user ? <Navigate to="/"/> : <Register/>}/>
            <Route path="/login" element={user ? <Navigate to="/"/> : <Login/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;
