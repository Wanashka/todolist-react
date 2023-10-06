import React, {useState} from 'react';
import styles from './TodoList.module.css';
import {ModalViewTask} from '../Modal/ModalViewTask/ModalViewTask';

export const TodoList = (props) => {
  const [isViewed, setIsViewed] = useState(false); //false
  const [id, setId] = useState('');
  const [currentTask, setCurrentTask] = useState(null);

  const viewTask = (e) => {
    setIsViewed(true);
    setId(e.target.id);
  };
  const removingStyles = (e) => {
    if (e.target.className === styles.containerTask) {
      e.target.style.boxShadow = 'none';
      e.target.style.marginBottom = '0px';
    } else if (e.target.parentElement.className === styles.containerTask) {
      e.target.parentElement.style.marginBottom = '0px';
      e.target.parentElement.style.boxShadow = 'none';
    }
  }
  const dragOverHandler = (e) => {
    e.preventDefault();
    if (e.target.className === styles.containerTask) {
      e.target.style.boxShadow = '0 4px 3px gray';
      e.target.style.marginBottom = '20px';
    } else if (e.target.parentElement.className === styles.containerTask) {
      e.target.parentElement.style.marginBottom = '20px';
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
    if (e.target.className !== styles.item) {
      props.dropTodoReducer(tab, currentTask, props.task.length);
    }
  }
  let Overdue = (dateCreate, dateEnd) => {
    return (dateEnd > dateCreate) ? {backgroundColor: 'Green'} : {backgroundColor: 'red'}
  }

  let statusTab = (tab) =>
    props.task
      .filter((item) => item.tab === tab)
      .map((task) => {
        return (
          <div className={styles.containerTask}
               onDragOver={(e) => dragOverHandler(e)}
               onDragLeave={(e) => dragLeaveHandler(e)}
               onDragStart={(e) => dragStartHandler(e, tab)}
               onDragEnd={(e) => dragEndHandler(e)}
               onDrop={(e) => dropHandler(e, tab, props.task.indexOf(task))}
               draggable={true}
               onClick={viewTask}
               key={task.id}
               id={task.id}>
          <span className={styles.item}>
            {task.title}
          </span>
            <span className={`${styles.statusCompletionTask}`}
                  style={Overdue(task.id, task.dateCompletionTask)}/>
          </div>
        );
      });
  //
  return (
    <div className={styles.todoTask}>
      <div className={styles.TabQueue} onDrop={e => dropCard(e, 'Queue')} onDragOver={e => dragOverHandler(e)}>
        <div className={styles.Queue}>Queue</div>
        {statusTab('Queue')}
      </div>

      <div className={styles.TabDevelopment} onDrop={e => dropCard(e, 'Development')}
           onDragOver={e => dragOverHandler(e)}>
        <div className={styles.Development}>Development
        </div>
        {statusTab('Development')}
      </div>

      <div className={styles.TabDone} onDrop={e => dropCard(e, 'Done')} onDragOver={e => dragOverHandler(e)}>
        <div className={styles.Done}>Done</div>
        {statusTab('Done')}
      </div>
      <ModalViewTask isViewed={isViewed} task={props.task} id={id} closeModelViewTask={setIsViewed}/>
    </div>
  );
};
