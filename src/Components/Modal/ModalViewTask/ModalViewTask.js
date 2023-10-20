import React from 'react';
import styles from './ModalViewTask.module.css';

export const ModalViewTask = (props) => {
  const options = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  };
  const closeViewTask = () => {
    props.closeModelViewTask(false);
  };
  const closeModal = (e) => {
    if (e.target.className === styles.modalOverlay) {
      closeViewTask()
    }
  }
  const task = props.task.find((item) => Number(props.id) === item.id);

  const startTask = () => new Date(task.id).toLocaleString('ru-RU', options);
  const endTask = () => new Date(task.dateCompletionTask).toLocaleString('ru-RU', options);

  if (!props.isViewed) return null;

  return (
    <div className={styles.modalOverlay} onClick={closeModal}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={closeViewTask}>
          &times;
        </button>
        <div className={styles.container}>
          <div className={styles.windowName}>
            Просмотр задачи
            <span className={styles.btnEdit} title={'Редактирование'}
                  onClick={() => props.editTask(task.id)}>&#9998;</span>
          </div>
          <div className={styles.timeFrame}>{startTask()} - {endTask()}</div>
          <div className={styles.priority}>{task.Priority} приоритет</div>
          <div className={styles.title}>{task.title}</div>
          <div className={styles.description}>{task.message}</div>
        </div>
      </div>
    </div>
  );
};
