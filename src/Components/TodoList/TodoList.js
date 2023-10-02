import React, { useState } from 'react';
import styles from './TodoList.module.css';
import { ModalViewTask } from '../Modal/ModalViewTask/ModalViewTask';

export const TodoList = (props) => {
  const [isViewed, setIsViewed] = useState(false);
  const [id, setId] = useState('');

  const viewTask = (e) => {
    setIsViewed(true);
    setId(e.target.id);
  };

  let tabQueue = props.task.Queue.map((task) => {
    return (
      <span draggable="true" onClick={viewTask} key={task.id} id={task.id}>
        {task.title}
      </span>
    );
  });

  let tabDevelopment = props.task.Development.map((task) => {
    return <span draggable="true">{task.title}</span>;
  });

  let tabDone = props.task.Done.map((task) => {
    return <span draggable="true">{task.title}</span>;
  });

  return (
    <div className={styles.todoTask}>
      <div className={styles.TabQueue}>
        <div className={styles.Queue}>Queue</div>
        {tabQueue}
      </div>

      <div className={styles.TabDevelopment}>
        <div className={styles.Development}>Development</div>
        {tabDevelopment}
      </div>

      <div className={styles.TabDone}>
        <div className={styles.Done}>Done</div>
        {tabDone}
      </div>
      <ModalViewTask isViewed={isViewed} task={props.task.Queue} id={id} closeModelViewTask={setIsViewed} />
    </div>
  );
};
