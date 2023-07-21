import { Component } from "react"
import css from './Modal.module.css'

export class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handlePressESC)
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlePressESC)
  }

  handlePressESC = (e) => {
    if(e.code === 'Escape' || e.currentTarget === e.target) this.props.closeModal()
  }

  render() {
    const { largeImageURL, tags } = this.props.img;
    return (
      <div className={css.overlay} onClick={this.handlePressESC}>
        <div className={css.modal}>
          <img src={largeImageURL} alt={tags} />
        </div>
      </div>
    )
  }
}