import './book-form.styles.scss';

import { useRef } from 'react';

// Uncontrolled form components

function BookForm() {
  const titleRef = useRef();
  const pagesRef = useRef();
  const priceRef = useRef();

  const handleSave = (event) => {
    event.preventDefault(); // prevent the form from being submitted

    const title = titleRef.current.value;
    const pages = pagesRef.current.value;
    const price = priceRef.current.value;

    debugger;
  };

  return (
    <>
      <h2>Add a new book!</h2>
      <form onSubmit={handleSave}>
        <p>
          <input type="text" name="title" placeholder="enter title" ref={titleRef}/>
        </p>
        <p>
          <input type="number" name="pages" placeholder="enter pages" ref={pagesRef}/>
        </p>
        <p>
          <input type="number" name="price" placeholder="enter price" ref={priceRef}/>
        </p>
        <p>
          <button type="submit">Save</button>
        </p>
      </form>
    </>
  )
}

export default BookForm;