import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export const TaskTitle = ({ task }) => {
  const [name, setName] = useState(task.name);
  const dispatch = useDispatch();

  useEffect(() => {
    setName(task.name);
  }, [dispatch, name]);

  const onChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  if (!task) return <></>;
  return (
    <>
      <h2>{name} </h2>
    </>
  );
};
