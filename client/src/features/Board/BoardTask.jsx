import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { TaskModal } from '../Task/TaskModal';

export const Task = ({ task }) => {
  const [name, setName] = useState(task.name);
  const [openModal, setOpenModal] = useState(false);
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      <Card onClick={handleShow} className='my-2 column-card'>
        <Card.Body>
          <Card.Title>{task.name}</Card.Title>
          <Card.Text>{task.description}</Card.Text>
        </Card.Body>
      </Card>

      {show ? (
        <TaskModal
          handleShow={handleShow}
          handleClose={handleClose}
          id={task._id}
        />
      ) : null}
    </>
  );
};
