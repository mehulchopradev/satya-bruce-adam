import './book-form.styles.scss';

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// title of the book is required, min length = 5 max length = 15
// pages of the book is required, min = 1
// price is optional

function BookForm() {
  /* const validate = (data) => {
    const errors = {};

    const { title, pages } = data;

    if (!title) {
      errors['title'] = 'Title is required';
    } else {
      if (title.length < 5 || title.length > 15) {
        errors['title'] = 'Title must be between 5 and 15 chars'
      }
    }

    if (!pages) {
      errors['pages'] = 'Pages is required and must be min 1';
    } else if (pages < 0) {
      errors['pages'] = 'Pages must be a positive value';
    }

    return errors;
  }; */

  return (
    <>
      <h2>Add a new book!</h2>
      <Formik
        initialValues={{
          title: '',
          pages: 0,
          price: 0
        }}
        onSubmit={(data) => {
          debugger;
        }}
        validationSchema={Yup.object().shape({
          title: Yup.string().min(5, 'Title must be min 5').max(15, 'Title must be max 15').required('Title is required'),
          pages: Yup.number().min(1, 'Pages must be minimum 1').required('Pages is required')
        })}
      >
        <Form>
          <p>
            <Field name="title" type="text" placeholder="enter title"/><br/>
            <ErrorMessage name="title"/>
          </p>
          <p>
            <Field name="pages" type="number" placeholder="enter pages"/><br/>
            <ErrorMessage name="pages"/>
          </p>
          <p>
            <Field name="price" type="number" placeholder="enter price"/>
          </p>
          <p>
            <button type="submit">Save</button>
          </p>
        </Form>
      </Formik>
    </>
  )
}

export default BookForm;