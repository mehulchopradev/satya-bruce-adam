import './book-list.styles.scss';

import { useSelector } from 'react-redux';

function BookList() {
  const books = useSelector((state) => state.libraryReducer.books);

  return (
    <div className='book-list'>
      <h2>Book list</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            books.map(book => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td><a href="">Details</a></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default BookList;