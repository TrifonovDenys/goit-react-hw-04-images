import css from "./Searchbar.module.css"
import {useState } from "react"
import Notiflix from 'notiflix';
export const Searchbar = ({hendleInput}) => {

  const [value, setValue] = useState('') 


  const handleChange = ({target: {value}}) => {
    setValue(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value) {
      hendleInput('random')
      return Notiflix.Notify.failure( `Here 'random' imgs`);
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
