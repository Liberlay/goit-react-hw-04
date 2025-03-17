import styles from './ImageCard.module.scss'

export default function ImageCard({ data, onImageClick }) {
  return (
    <div className={styles.wrapper}>
      <img
        className={styles.image}
        src={data.urls.small}
        alt={data.alt_description}
        onClick={() => onImageClick(data.urls.regular)}
      />
    </div>
  )
}
