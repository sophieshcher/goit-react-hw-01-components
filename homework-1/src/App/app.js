import styles from './app.module.css'

export default function App({children}) {
  return (
    <div className={styles.containerApp}>{children}</div>
  )
}

