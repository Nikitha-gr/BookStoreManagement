import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className="home-page">
            <h1>Welcome to Book Store</h1>
            <p>Click here to go to books page</p>
            <Link to="/books">Books</Link>
        </div>
    )
}

export default Home;