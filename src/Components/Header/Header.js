import React from 'react';
import styles from './Header.module.css';

export const Header = (props) => {
  return (
    <div className={styles.header}>
      <div className={styles.blockLogo}>
        <div className={styles.headerLogo}>TODO</div>
      </div>
      <div className={styles.blockButton}>
        <button onClick={props.openModalCreateTask} className={styles.buttonNewTask}>
          New task
        </button>
      </div>
    </div>
  );
};
