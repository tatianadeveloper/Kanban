import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import { getTask } from './actions';

export const TaskModal = ({ handleShow, handleClose, id }) => {
  const task = useSelector((state) => state.task.task);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTask(id));
    return () => {};
  }, [dispatch, id]);

  if (!task) return <>loading</>;

  return (
    <Modal
      show={handleShow}
      onHide={handleClose}
      dialogClassName='modal-90w'
      backdrop='static'
      keyboard={false}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>{task.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{task.description}</Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
