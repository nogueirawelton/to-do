import { v4 as uuidv4 } from 'uuid';

import styles from './TaskForm.module.scss';

import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';

interface Task {
  id: string;
  content: string;
  isDone: boolean;
}

interface TaskFormProps {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
}


export const TaskForm = ({ tasks, setTasks }: TaskFormProps) => {
  const [newTask, setNewTask] = useState('');
  
  const handleNewTaskChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  }

  const handleCreateTask = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setTasks([
      ...tasks, {
        id: uuidv4(),
        content: newTask,
        isDone: false,
      }
    ])
    setNewTask('');
  }

  return (
    <form onSubmit={handleCreateTask} className={styles.taskForm}>
      <input value={newTask} onChange={handleNewTaskChange} type="text" placeholder="Adicione uma nova tarefa"/>
      <button type="submit" disabled={newTask.length === 0}>Criar<PlusCircle size={16} /></button>
    </form>
  )
}
