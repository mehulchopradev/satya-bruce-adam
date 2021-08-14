import { Route, Redirect } from "react-router";
import { Link } from "react-router-dom";
import { useEffect } from "react";
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

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axios.get(URL);
      const { data } = response;
      dispatch(setBooks(data));
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <h2>Welcome to my library!</h2>
      <button>Add a new book</button>
      <Link to={`${parentPath}/book-details`}>Book Details</Link>

      <Route exact path={parentPath}>
        <Redirect to={`${parentPath}/book-list`}/>
      </Route>

      <Route path={`${parentPath}/book-list`} component={BookList}/>
      <Route path={`${parentPath}/book-details`} component={BookDetails}/>
    </div>
  )
}

export default LibraryApp;