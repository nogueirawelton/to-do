import { Trash, Check } from 'phosphor-react';
import styles from './Task.module.scss';

interface Task {
  id: string;
  content: string;
  isDone: boolean;
}

interface TaskProps {
  task: Task;
  tasks: Task[];
  onDeleteTask: (id: string) => void;
  setTasks: (tasks: Task[]) => void;
}

export const Task = ({ task: {id, content, isDone}, tasks, setTasks, onDeleteTask }: TaskProps) => {

  const handleDeleteTask = () => {
    onDeleteTask(id);
  }

  const handleSetDone = () => {
    const updatedTasks = tasks.map(task => task.id == id ? {
      ...task,
      isDone: !task.isDone, 
    } : task);

    setTasks(updatedTasks);
  }

  return (
    <div className={styles.task}>
      <div className={isDone ? styles.done : styles.default}>
        <button onClick={handleSetDone}><span><Check /></span></button>
        <p>{content}</p>
      </div>
      <button className={styles.delete} onClick={handleDeleteTask}><Trash size={18} /></button>
    </div>
  )
}
