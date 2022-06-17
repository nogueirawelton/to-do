import styles from './TaskList.module.scss';

import { Task } from '../../components/Task';
import { ClipboardText } from 'phosphor-react';

interface Task {
  id: string;
  content: string;
  isDone: boolean;
}

interface TaskListProps {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
}

export const TaskList = ({ tasks, setTasks }: TaskListProps) => {

const taskCount = tasks.length;
const doneTasks = tasks.filter(task => task.isDone).length;

const deleteTask = (id: string) => {
  const tasksWithtoutDeletedOne = tasks.filter(task => task.id !== id);
  setTasks(tasksWithtoutDeletedOne);
}

  return (
    <div className={styles.taskList}>
      <header>
          <strong>Tarefas Criadas<span>{taskCount}</span></strong>
          <strong>Concluídas<span className={taskCount ? styles.doneTasks : ''}>{taskCount ? `${doneTasks} de ${taskCount}` : 0}</span></strong>
      </header>
      <section>
        {tasks.length ? 
          tasks.map((task) => (
            <Task key={task.id} task={task} tasks={tasks} setTasks={setTasks} onDeleteTask={deleteTask}/>
          )) : (
            <div className={styles.empty}>
              <ClipboardText size={64} />
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          )}
      </section>
    </div>
  )
}
