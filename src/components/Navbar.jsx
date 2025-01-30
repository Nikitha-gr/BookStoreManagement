import { useContext, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import AuthContext from "../context/AuthContext"

export default function Navbar() {
    // const { login, handleLogin, handleLogout } = useContext(AuthContext);

    const [login, setLogin] = useState(false);

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
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/books">Books</NavLink>
            <NavLink to="/login">Login</NavLink>
            {login ?
                <button onClick={handleLogout}>Logout</button>
                :
                <button onClick={handleLogin}>Login</button>
            }
        </nav>
    )
}