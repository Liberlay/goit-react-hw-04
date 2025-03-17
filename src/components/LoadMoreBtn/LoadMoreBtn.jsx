import styles from './LoadMoreBtn.module.scss'

export default function LoadMoreBtn({ onLoadMore }) {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={onLoadMore}>
        Load more
      </button>
    </div>
  )
}
