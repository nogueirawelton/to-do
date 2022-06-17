import './global.scss';

import styles from './App.module.scss';
import { Header } from './components/Header';
import { TaskList } from './components/TaskList';
import { TaskForm } from './components/TaskForm';
import { useState } from 'react';

interface Task {
  id: string;
  content: string;
  isDone: boolean;
}

export const App = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <main>
          <TaskForm tasks={tasks} setTasks={setTasks}/>
          <TaskList tasks={tasks} setTasks={setTasks}/>
        </main>
      </div>
    </>
  )
}