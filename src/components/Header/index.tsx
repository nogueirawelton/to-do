import toDoListLogo from '../../assets/logo.svg';

import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={toDoListLogo} alt="ToDo List Logo" />
    </header>
  )
}
