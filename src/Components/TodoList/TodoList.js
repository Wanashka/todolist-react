import React, {useEffect, useState} from 'react';
import styles from './TodoList.module.css';
import {ModalViewTask} from '../Modal/ModalViewTask/ModalViewTask';
import ModalCreateTaskContainer from '../Modal/ModalCreateTask/ModalCreateTaskContainer';

export const TodoList = (props) => {
  const [isViewed, setIsViewed] = useState(false); //false
  const [idView, setIdView] = useState('');
  const [idEditTask, setIdEditTask] = useState('');
  const [currentTask, setCurrentTask] = useState(null);

  const viewTask = (e) => {
    if (e.target.className === styles.containerTask ||
      e.target.className === styles.titleTask) {
      setIdView(e.target.id);
      setIsViewed(true);
    }
  };
  const removeTask = (id) => {
    props.removeTodoReducer(id)
  }
  const removingStyles = (e) => {
    if (e.target.parentElement.className === styles.containerTask) {
      e.target.parentElement.style.marginBottom = '0px';
      e.target.parentElement.style.boxShadow = 'none';
    }
  }
  const dragOverHandler = (e) => {
    e.preventDefault();
    if (e.target.parentElement.className === styles.containerTask) {
      e.target.parentElement.style.marginBottom = '30px';
      e.target.parentElement.style.boxShadow = '0 4px 3px gray';
    }
  };
  const dragLeaveHandler = (e) => {
    removingStyles(e);
  };
  const dragStartHandler = (e) => {
    setCurrentTask(e.target.id);
  };
  const dragEndHandler = (e) => {
    removingStyles(e);
    setCurrentTask(null);
  };
  const dropHandler = (e, tab, idArray) => {
    e.preventDefault();
    if (currentTask !== e.target.id) {
      props.dropTodoReducer(tab, currentTask, idArray);
    }
    removingStyles(e);
  };

  const dropCard = (e, tab) => {
    if (e.target.className !== styles.titleTask) {
      props.dropTodoReducer(tab, currentTask, props.task.length);
    }
  }

  const Overdue = (item) => {
    if (item.dateEnd > item.dateCreate) {
      return <span className={styles.statusCompletionTask}
                   style={{backgroundColor: 'Green'}}
                   title="В процессе"/>
    }
    return <span className={styles.statusCompletionTask}
                 style={{backgroundColor: 'red'}}
                 title="Просрочено"/>
  }

  const openWindowEditTask = (id) => {
    props.modeEdit(true);
    setIdEditTask(id);
    props.openModalCreateTask();
  }

  let statusTab = (tab) => {
    return props.task
      .filter((item) => item.tab === tab)
      .filter((item) => item.title.toLowerCase().includes(props.searchWord.toLowerCase()))
      .map((task) => {
        return (
          <div className={styles.containerTask}
               onDragOver={(e) => dragOverHandler(e)}
               onDragLeave={(e) => dragLeaveHandler(e)}
               onDragStart={(e) => dragStartHandler(e)}
               onDragEnd={(e) => dragEndHandler(e)}
               onDrop={(e) => dropHandler(e, tab, props.task.indexOf(task))}
               draggable={true}
               onClick={viewTask}
               key={task.id}
               id={task.id}>
            <Overdue dateCreate={task.id} dateEnd={task.dateCompletionTask}/>
            <span className={styles.titleTask} id={task.id}>
            {task.title}
            </span>
            <span className={styles.basket} onClick={() => openWindowEditTask(task.id)}>&#9998;</span>
            <span className={styles.basket} onClick={() => removeTask(task.id)}>&#128465;</span>
          </div>
        );
      });
  }

  return (
    <div className={styles.todoTask}>
      <div className={styles.TabQueue} onDrop={e => dropCard(e, 'Queue')} onDragOver={e => dragOverHandler(e)}>
        <div className={styles.Queue}>Очередь</div>
        {statusTab('Queue')}
      </div>

      <div className={styles.TabDevelopment} onDrop={e => dropCard(e, 'Development')}
           onDragOver={e => dragOverHandler(e)}>
        <div className={styles.Development}>В работе</div>
        {statusTab('Development')}
      </div>

      <div className={styles.TabDone} onDrop={e => dropCard(e, 'Done')} onDragOver={e => dragOverHandler(e)}>
        <div className={styles.Done}>Выполнено</div>
        {statusTab('Done')}
      </div>
      <ModalViewTask isViewed={isViewed} task={props.task} id={idView} closeModelViewTask={setIsViewed}
                     editTask={openWindowEditTask}/>
      <ModalCreateTaskContainer id={idEditTask} task={props.task}/>
    </div>
  );
};
