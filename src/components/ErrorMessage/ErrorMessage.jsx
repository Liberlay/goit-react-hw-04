import styles from './ErrorMessage.module.scss'

export default function ErrorMessage() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>An error occured :(</p>
    </div>
  )
}
