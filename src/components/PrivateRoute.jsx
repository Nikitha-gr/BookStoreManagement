import { useContext } from "react"
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const PrivateRoute = ({children}) => {
    const {login} = useContext(AuthContext)

    return login?children:<Navigate to="/login"/>
}

export default PrivateRoute;