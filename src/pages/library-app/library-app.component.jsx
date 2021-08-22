import { Route, Redirect } from "react-router";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import './library-app.styles.scss';

import BookList from "./book-list/book-list.component";
import BookDetails from "./book-details/book-details.component";
// import { setBooks, setBooksError } from "../../redux/library/library.actions";
import { fetchBooksAsync } from "../../redux/library/library.actions";
import Modal from "../../components/modal/modal.component";
// import BookForm from "../../components/book-form/book-form.component";
import BookForm from "../../components/book-form/book-form.component.controlled";
// import BookForm from '../../components/book-form/book-form.component.formik';

function LibraryApp(props) {
  // Since this component is the child of BrowserRouter, it gets an extra prop from react router, called as `match`
  const parentPath = props.match.path;

  const dispatch = useDispatch();
  const isBooksLoaded = useSelector((state) => state.libraryReducer.isBooksLoaded);
  const isError = useSelector((state) => state.libraryReducer.isError);

  // const [isBooksLoaded, setIsBooksLoaded] = useState(false);
  const [isNotShowing, setIsNotShowing] = useState(true);
  // const [isError, setIsError] = useState(false);

  useEffect(() => {
    /* const fetchBooks = async () => {
      try {
        const response = await axios.get(URL);

        const { data } = response;
        dispatch(setBooks(data));
      } catch (err) {
        // setIsError(true);
        dispatch(setBooksError());
      }

      // setIsBooksLoaded(true);
    };
    fetchBooks(); */
    dispatch(fetchBooksAsync());
  }, [dispatch]);

  if (isError) {
    throw new Error('Unable to fetch the books');
  }

  return (
    <div>
      <h2>Welcome to my library!</h2>
      <div className='add-book-container'>
        <button onClick={() => setIsNotShowing(false)}>Add a new book</button>
        <Modal isNotShowing={isNotShowing} onClose={() => setIsNotShowing(true)}>
          <BookForm/>
        </Modal>
      </div>

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