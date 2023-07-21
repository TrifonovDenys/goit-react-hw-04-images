import { Component } from "react"
import css from "./Searchbar.module.css"

export class Searchbar extends Component  {

  state = {
    value: ''
  }

  handleChange = ({target: {value}}) => {
    this.setState({value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.hendleInput(this.state.value)
    this.setState({value: ''})
  }
  
  render() {
    return (
      <>
        <header className={css.Searchbar}>
          <form className={css.SearchForm} onSubmit={this.handleSubmit} >
            <button type="submit" className={css.SearchFormbutton}>
              <span className={css.SearchForm_button_label}>Search</span>
            </button>
            <input
              className={css.SearchForm_input}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleChange} value={this.state.value} /> 
            </form>
          </header>
      </>
    )
  }
}