import { MoonLoader } from 'react-spinners'

import styles from './Loader.module.scss'

export default function Loader() {
  return (
    <div className={styles.container}>
      <MoonLoader size={50} color="#3747ac" />
    </div>
  )
}
