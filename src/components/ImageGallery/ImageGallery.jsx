import ImageCard from '../ImageCard/ImageCard'

import styles from './ImageGallery.module.scss'

export default function ImageGallery({ images, onImageClick }) {
  return (
    <div className={styles.container}>
      <ul className={styles.gallery}>
        {images.map((image) => (
          <li className={styles.wrapper}>
            <ImageCard key={image.id} data={image} onImageClick={onImageClick} />
          </li>
        ))}
      </ul>
    </div>
  )
}
