import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import CardDeck from 'react-bootstrap/CardDeck';

import { BoardCard } from './BoardCard';
import { getBoards } from './actions';

export const Boards = () => {
  const boards = useSelector((state) => state.dashboard.boards);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBoards());
  }, [dispatch]);

  return (
    <>
      <CardDeck>
        {boards.map((board) => (
          <>
            <Link key={board._id} to={`/boards/${board._id}`}>
              <BoardCard key={board._id} board={board} />
            </Link>
          </>
        ))}
      </CardDeck>
    </>
  );
};
