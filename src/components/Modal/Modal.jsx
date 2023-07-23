import css from './Modal.module.css'
import { useEffect } from "react"

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