import './book-form.styles.scss';

import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { createBookAsync } from '../../redux/library/library.actions';

// Controlled form components

function BookForm() {
  const [newBook, setNewBook] = useState({
    title: '',
    pages: 0,
    price: 0,
  });

  const dispatch = useDispatch();

  const handleSave = (event) => {
    event.preventDefault(); // prevent the form from being submitted

    /* const response = await axios.post(URL, newBook);
    const { data } = response;
    dispatch(saveBook(data)); */
    dispatch(createBookAsync(newBook));

    setNewBook({
      title: '',
      pages: 0,
      price: 0,
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewBook({
      ...newBook,
      [name]: value
    }); // render
  };

  return (
    <>
      <h2>Add a new book!</h2>
      <form onSubmit={handleSave}>
        <p>
          <input type="text" name="title" value={newBook.title} placeholder="enter title" onChange={handleChange} />
        </p>
        <p>
          <input type="number" name="pages" value={newBook.pages} placeholder="enter pages" onChange={handleChange}/>
        </p>
        <p>
          <input type="number" name="price" value={newBook.price} placeholder="enter price" onChange={handleChange}/>
        </p>
        <p>
          <button type="submit">Save</button>
        </p>
      </form>
    </>
  )
}

export default BookForm;