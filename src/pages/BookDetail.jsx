import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

const BookDetail = () => {
    const { id } = useParams();

    const [book, setBook] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);

        axios
            .get(`https://profuse-brave-soul.glitch.me/books/${id}`)
            .then((res) => setBook(res.data))
            .catch((err) => setError(err.response ? err.response.data : err.message))
            .finally(setLoading(false));

        navigate("/")
    }, []);

    return (
        <div className="details-container">
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            {book && (
                <div>
                    <div>
                        <img src={book.coverImage} />
                    </div>
                    <div>
                        <h1>Name of the Book : {book.name} </h1>
                        <h2>Author: {book.author} </h2>
                        <h3>Category: {book.category} </h3>
                        <h3>Price: ${book.price} </h3>
                        <h4>Publishing Year: {book.publishingYear} </h4>
                        <p>Description: {book.description} </p>
                    </div>
                    <div>
                        <button onClick={() => navigate("/books")}>Go Back</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default BookDetail;