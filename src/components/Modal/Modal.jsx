import css from './Modal.module.css'
import { useEffect } from "react"
import PropTypes from 'prop-types'
export const Modal = ({closeModal, img}) => {

  useEffect(() => {
    const handlePressESC = (e) => {
    if(e.code === 'Escape') closeModal()
  }
    window.addEventListener('keydown', handlePressESC)
    return () => window.removeEventListener('keydown', handlePressESC)
   }, [closeModal])

  const { largeImageURL, tags } = img;

  return (
    <div className={css.overlay} onClick={() => closeModal()}>
      <div className={css.modal}>
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>
  )
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  img: PropTypes.objectOf(PropTypes.string).isRequired,
}
