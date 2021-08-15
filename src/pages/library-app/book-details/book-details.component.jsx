import { useParams } from "react-router";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { fetchBookAsync } from "../../../redux/library/library.actions";

function BookDetails() {
  const { bookId } = useParams();
  const dispatch = useDispatch();
  const book = useSelector((state) => state.libraryReducer.books.find(book => book.id === bookId));

  useEffect(() => {
    /* const fetchBookDetails = async () => {
      const response = await axios.get(`${URL}/${bookId}`);
      const { data } = response;

      dispatch(updateBook(data));
    }
    fetchBookDetails(); */
    dispatch(fetchBookAsync(bookId))
  }, [bookId, dispatch]);

  return (
    <div>
      <h2>{book.title}</h2>
      <p>
        Id: <span>{book.id}</span>
      </p>
      <i>Price: </i>{book.price ? book.price : (<span>Loading...</span>)}<br/>
      <i>Pages: </i>{book.pages ? book.pages : (<span>Loading...</span>)}
    </div>
  )
}

export default BookDetails;