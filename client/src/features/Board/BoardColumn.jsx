import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { Task } from './BoardTask';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export const Column = ({ column }) => {
  const [name, setName] = useState(column.name);
  const dispatch = useDispatch();

  useEffect(() => {
    setName(column.name);
  }, [dispatch, name]);

  const onChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  if (!column) return <></>;
  return (
    <>
      <Card>
        <Card.Header
          as='h3'
          style={{
            fontSize: '20px',
          }}
        >
          {name}
        </Card.Header>
        <Card.Body className='mx-0 my-0 px-2 py-2'>
          {column.tasks.map((task) => (
            <Task key={task._id} task={task} />
          ))}
        </Card.Body>
        <Card.Footer className='text-muted'>add card</Card.Footer>
      </Card>
    </>
  );
};

/*<>
          <Link key={task._id} to={`/task/${task._id}`}>
            <TaskCard key={task._id} task={task} />
          </Link>
        </>
        */
