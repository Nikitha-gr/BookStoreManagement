import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import PrivateRoute from './components/PrivateRoute'
import Login from './pages/Login'
import Books from './pages/Books'
import BookDetail from './pages/BookDetail'
import { useState } from 'react'

function App() {
  const [login, setLogin] = useState(false)

    const navigate = useNavigate();

    const handleLogin = () => {
        setLogin(true);
        navigate("/");
    }

    const handleLogout = () => {
        setLogin(false);
        navigate("/login");
    }
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/books" element= {
          // <PrivateRoute>
            <Books/>
          // </PrivateRoute>
        }
        />
        <Route path="/login" element={<Login/>}/>
        <Route path="/books/:id" element={<BookDetail/>}/>
      </Routes>
    </div>
  )
}

export default App
