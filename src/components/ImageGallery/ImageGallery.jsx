import ImageCard from '../ImageCard/ImageCard'

import styles from './ImageGallery.module.scss'

export default function ImageGallery({ images, onImageClick }) {
  return (
    <div className={styles.container}>
      <ul className={styles.gallery}>
        <li className={styles.wrapper}>
          {images.map((image) => (
            <ImageCard key={image.id} data={image} onImageClick={onImageClick} />
          ))}
        </li>
      </ul>
    </div>
  )
}
