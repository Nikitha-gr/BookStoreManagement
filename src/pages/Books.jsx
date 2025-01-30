import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Books = () => {
    const [books, setBooks] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        axios
            .get(`https://profuse-brave-soul.glitch.me/books`)
            .then((res) => {
                setBooks(res.data.books)
                console.log(res.data.books)
            })
            .catch((err) => setError(err.response ? err.response.data : err.message))
            .finally(setLoading(false));
    }, []);

    return (
        <div id="cont">
            <div id="sorting">
                <select>
                    <option>Sort Alphabetically</option>
                    <option>A-Z</option>
                    <option>Z-A</option>
                </select>
                <select>
                    <option>Filter By Price</option>
                    <option>Low to High</option>
                    <option>High to Low</option>
                </select>
            </div>
            <div className="books-container">
                {isLoading && <h1>Loading...</h1>}
                {error && <h1>{error}</h1>}
                {books.length &&
                    books.map((book) => {
                        return (
                            <div key={book.id} className="books-card">
                                <div>
                                    <img src={book.coverImage} />
                                </div>
                                <div>
                                    <h1>Name of the Book : {book.name} </h1>
                                    <h3>Category: {book.category} </h3>
                                    <h3>Price: ${book.price} </h3>
                                </div>
                                <div>
                                    <button>View Details</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Books;