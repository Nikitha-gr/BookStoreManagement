import axios from "axios";
import { useEffect, useState } from "react";

const Books = () => {
    const [books, setBooks] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        axios
            .get("https://profuse-brave-soul.glitch.me/books")
            .then((res) => {
                setBooks(res.data)
                console.log(res.data)
            })
            .catch((err) => setError(err.response ? err.response.data : err.message))
            .finally(setLoading(false));
    }, []);

    return (
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
    )
}

export default Books;