import { Route, Redirect } from "react-router";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import BookList from "./book-list/book-list.component";
import BookDetails from "./book-details/book-details.component";
import { setBooks } from "../../redux/library/library.actions";

const URL = 'http://localhost:3002/books';

function LibraryApp(props) {
  // Since this component is the child of BrowserRouter, it gets an extra prop from react router, called as `match`
  const parentPath = props.match.path;

  const dispatch = useDispatch();
  const [isBooksLoaded, setIsBooksLoaded] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axios.get(URL);
      const { data } = response;
      dispatch(setBooks(data));

      setIsBooksLoaded(true);
    };
    fetchBooks();
  }, [dispatch]);

  return (
    <div>
      <h2>Welcome to my library!</h2>
      <button>Add a new book</button>

      <Route exact path={parentPath}>
        <Redirect to={`${parentPath}/book-list`}/>
      </Route>

      {
        isBooksLoaded ? (
          <>
            <Route path={`${parentPath}/book-list`} component={BookList}/>
            <Route path={`${parentPath}/book-details/:bookId`} component={BookDetails}/>
          </>
        ) : (<h2>Loading... Please wait!</h2>)
      }
    </div>
  )
}

export default LibraryApp;