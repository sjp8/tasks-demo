import { TaskList } from './components/TaskList'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h1>Task Manager</h1>
      </div>

      <TaskList />
    </main>
  )
}
