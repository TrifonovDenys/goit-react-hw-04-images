import css from "./Searchbar.module.css"
import {useState } from "react"
import Notiflix from 'notiflix';
import PropTypes from 'prop-types'
export const Searchbar = ({hendleInput}) => {

  const [value, setValue] = useState('') 


  const handleChange = ({target: {value}}) => {
    setValue(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value) {
      Notiflix.Notify.failure( `Empty search`);
    }
    hendleInput(value)
    setValue('')
  }
  
    return (
      <>
        <header className={css.Searchbar}>
          <form className={css.SearchForm} onSubmit={handleSubmit} >
            <button type="submit" className={css.SearchFormbutton}>
              <span className={css.SearchForm_button_label}>Search</span>
            </button>
            <input
              className={css.SearchForm_input}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={handleChange} value={value} /> 
            </form>
          </header>
      </>
    )
}
  
Searchbar.propTypes = {
  hendleInput: PropTypes.func.isRequired,
}
