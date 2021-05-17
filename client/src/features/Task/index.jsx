import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getTask } from './actions';
import { TaskTitle } from './TaskTitle';

export const Task = ({ match }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const task = useSelector((state) => state.task.task);

  useEffect(() => {
    dispatch(getTask(id));
  }, [dispatch, id]);

  if (!task) return <>loading</>;

  return (
    <>
      Task
      <TaskTitle task={task} />
      <div> {task.description}</div>
    </>
  );
};
