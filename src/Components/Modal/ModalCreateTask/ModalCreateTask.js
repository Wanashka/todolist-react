import { useState } from 'react';
import styles from './ModalCreateTask.module.css';

export const ModalCreateTask = (props) => {
  const [inputTitle, setInputTitle] = useState('');
  const [inputDescription, setInputDescription] = useState('');

  const saveData = () => {
    props.addTodoReducer(inputTitle, inputDescription);
    props.closeModalCreateTask();
    setInputTitle('');
    setInputDescription('');
  };

  if (!props.isOpen) {
    return null;
  }
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={props.closeModalCreateTask}>
          &times;
        </button>
        <div>
          <span>Title</span>
          <div>
            <input
              placeholder="Тут заголовок"
              value={inputTitle}
              onChange={(event) => setInputTitle(event.target.value)}
            ></input>
          </div>
        </div>
        <div>
          <div>
            <span>Description</span>
          </div>
          <textarea
            placeholder="Тут описание"
            value={inputDescription}
            onChange={(event) => setInputDescription(event.target.value)}
            className={styles.fieldDescription}
          ></textarea>
        </div>
        <button onClick={saveData}>Save</button>
      </div>
    </div>
  );
};
