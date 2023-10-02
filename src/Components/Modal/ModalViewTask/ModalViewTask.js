import React from 'react';
import styles from './ModalViewTask.module.css';

export const ModalViewTask = (props) => {
  const closeViewTask = () => {
    props.closeModelViewTask(false);
  };

  const task = props.task.find((item) => Number(props.id) === item.id);

  if (!props.isViewed) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={closeViewTask}>
          &times;
        </button>
        <h2>ModalViewTask</h2>
        <div>title: {task.title}</div>
        <div>Description: {task.message}</div>
      </div>
    </div>
  );
};
