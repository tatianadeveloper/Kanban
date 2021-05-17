import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Navbar from 'react-bootstrap/Navbar';

export const BoardHeader = ({ board }) => {
  const [name, setName] = useState(board.name);
  const dispatch = useDispatch();

  useEffect(() => {
    setName(board.name);
  }, [dispatch, board]);

  const onChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  if (!board) return <></>;
  return (
    <>
      <Navbar>
        <h2>{name}</h2>
      </Navbar>
    </>
  );
};
