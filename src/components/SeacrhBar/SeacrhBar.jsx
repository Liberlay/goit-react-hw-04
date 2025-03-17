import toast from 'react-hot-toast'
import { Field, Form, Formik } from 'formik'

import { FaSearch } from 'react-icons/fa'

import styles from './SeacrhBar.module.scss'

export default function SeacrhBar({ onSearch }) {
  return (
    <header className={styles.container}>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={(values, actions) => {
          values.query.trim() === ''
            ? toast.error('Search field is empty :(')
            : (onSearch(values.query), actions.resetForm())
        }}
      >
        <Form className={styles.form}>
          <Field name={'query'}>
            {({ field }) => (
              <input
                {...field}
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                className={styles.input}
              />
            )}
          </Field>
          <button className={styles.button} type="submit">
            <FaSearch />
          </button>
        </Form>
      </Formik>
    </header>
  )
}
