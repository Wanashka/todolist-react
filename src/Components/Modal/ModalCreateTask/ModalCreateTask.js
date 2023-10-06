import {useState} from 'react';
import styles from './ModalCreateTask.module.css';

export const ModalCreateTask = (props) => {
  const [inputTitle, setInputTitle] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  const [inputDate, setInputDate] = useState('');
  const options = {
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };

  const currentDate = new Date().toLocaleString('ru-RU', options).replace('в', ' ');
  const saveData = () => {
    const dateEndTask = new Date(inputDate).getTime()
    props.addTodoReducer(inputTitle, inputDescription, dateEndTask);
    props.closeModalCreateTask();
    setInputTitle('');
    setInputDescription('');

    // console.log(a);
    // 2030-12-12T12:12
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
        <div className={styles.container}>
          <div className={styles.leftBlock}>
            <div className={styles.nameModal}>Create task</div>
            <div className={styles.fieldNameTitle}>Title</div>

            <input
              placeholder="Тут заголовок"

              onChange={(event) => setInputTitle(event.target.value)}
              className={styles.inputTitle}
            />

            <div className={styles.fieldNameDescription}>Description</div>
            <textarea
              placeholder="Тут описание"
              value={inputDescription}
              onChange={(event) => setInputDescription(event.target.value)}
              className={styles.fieldDescription}
            />
          </div>

          <div className={styles.rightBlock}>
            <div className={styles.currentData}>{currentDate}</div>
            <div>Выполнить до:</div>
            <input type={'datetime-local'} className={styles.inputData} onChange={(e) => setInputDate(e.target.value)}/>
            <div className={styles.priorityBlock}>
              <span>Priority task: </span>
              <select className={styles.priorityValue}>
                <option value={'Высокий'}>Высокий</option>
                <option value={'Средний'}>Средний</option>
                <option value={'Низкий'}>Низкий</option>
              </select>
            </div>
            <input type={'file'} onChange={() => alert('Скоро будет работать')} className={styles.inputFile}/>
          </div>
        </div>
        <button onClick={saveData} className={styles.btnSave}>Save</button>
      </div>
    </div>
  );
};
