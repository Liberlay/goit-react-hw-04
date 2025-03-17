import Modal from 'react-modal'
import { useEffect } from 'react'

import styles from './ImageModal.module.scss'

export default function ImageModal({ isOpen, setIsOpen, image }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsOpen()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [setIsOpen])

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={setIsOpen}
      overlayClassName={styles.container}
      bodyOpenClassName={styles.open}
      className={styles.modal}
      ariaHideApp={false}
    >
      <img className={styles.image} src={image} alt="Modal image" />
    </Modal>
  )
}
