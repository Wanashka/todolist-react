import React from 'react';
import styles from './Header.module.css';

export const Header = (props) => {

  const searchTask = (e) => {
    props.searchTodoReducer(e.target.value);
  }

  return (
    <div className={styles.header}>
      <span className={styles.searchBox}>
          <input type={'text'} className={styles.searchTxt} placeholder={"Поиск..."} onChange={searchTask}/>
          <span className={styles.searchBtn}>&#128269;</span>
      </span>
      <div className={styles.headerLogo}>TODO</div>
      <div className={styles.blockButton}>
        <button onClick={props.openModalCreateTask} className={styles.buttonNewTask}>
          Новая задача
        </button>
      </div>
    </div>
  );
};
