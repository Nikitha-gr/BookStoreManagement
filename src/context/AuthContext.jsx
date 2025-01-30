import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const AuthContext = ({children}) => {
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
        <UserContext.Provider value={{login,handleLogin,handleLogout}}>
            {children}
        </UserContext.Provider>
    )
}

export default AuthContext;