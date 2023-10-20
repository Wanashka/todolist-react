import {useEffect, useState} from 'react';
import styles from './ModalCreateTask.module.css';

export const ModalCreateTask = (props) => {

  const task = props.task.find((item) => Number(props.id) === item.id);

  const [inputTitle, setInputTitle] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  const [inputDate, setInputDate] = useState('');
  const [inputPriority, setInputPriority] = useState('');

  const formatMilliseconds = (milliseconds) => {
    const date = new Date(milliseconds);

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}`;
    return formattedDate;
  }

  useEffect(() => {
    setInputTitle((props.ifModeEdit) ? task.title : '');
    setInputDescription((props.ifModeEdit) ? task.message : '');
    setInputDate((props.ifModeEdit) ? formatMilliseconds(task.dateCompletionTask) : '');
    setInputPriority((props.ifModeEdit) ? task.Priority : 'Низкий');
  }, [props.isOpen])

  const options = {
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };

  const closeModal = (e) => {
    if (e.target.className === styles.modalOverlay) {
      props.closeModalCreateTask()
    }
  }

  const currentDate = new Date().toLocaleString('ru-RU', options).replace('в', ' ');

  const saveData = () => {
    const dateEndTask = new Date(inputDate).getTime()
    props.addTodoReducer(inputTitle, inputDescription, dateEndTask, inputPriority);
    props.closeModalCreateTask();
    setInputTitle('');
    setInputDescription('');
  };

  const editData = () => {
    const dateEndTask = new Date(inputDate).getTime()
    props.editTodoReducer(props.id, inputTitle, inputDescription, dateEndTask, inputPriority);
    props.closeModalCreateTask();
  }

  if (!props.isOpen) {
    props.modeEdit(false);
    return null;
  }
  return (
    <div className={styles.modalOverlay} onClick={closeModal}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={props.closeModalCreateTask}>
          &times;
        </button>
        <div className={styles.container}>
          <div className={styles.leftBlock}>
            <div className={styles.nameModal}>{props.ifModeEdit ? 'Измените задачу' : 'Создайте задачу'}</div>
            <div className={styles.fieldNameTitle}>Заголовок</div>
            <input
              placeholder="Заголовок"
              value={inputTitle}
              onChange={(event) => setInputTitle(event.target.value)}
              className={styles.inputTitle}
            />
            <div className={styles.fieldNameDescription}>Описание</div>
            <textarea
              placeholder="Описание"
              value={inputDescription}
              onChange={(event) => setInputDescription(event.target.value)}
              className={styles.fieldDescription}
            />
          </div>
          <div className={styles.rightBlock}>
            <div className={styles.currentData}>{currentDate}</div>
            <div>Выполнить до:</div>
            <input type={'datetime-local'} className={styles.inputData}
                   value={inputDate}
                   onChange={(e) => {
                     setInputDate(e.target.value)
                   }}/>
            <div className={styles.priorityBlock}>
              <span>Приоритет: </span>
              <select className={styles.priorityValue}
                      onChange={(e) => setInputPriority(e.target.value)}
                      value={inputPriority}>
                <option value={'Высокий'}>Высокий</option>
                <option value={'Средний'}>Средний</option>
                <option value={'Низкий'}>Низкий</option>
              </select>
            </div>
          </div>
        </div>
        {props.ifModeEdit ?
          <button onClick={editData} className={styles.btnSave}>Изменить</button> :
          <button onClick={saveData} className={styles.btnSave}>Сохранить</button>
        }
      </div>
    </div>
  );
};
