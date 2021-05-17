import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getColumns } from './actions';
import { Column } from './BoardColumn';

import CardGroup from 'react-bootstrap/CardGroup';
import CardColumns from 'react-bootstrap/CardColumns';
import CardDeck from 'react-bootstrap/CardDeck';

export const BoardColumns = (props) => {
  const { id } = useParams();
  const columns = useSelector((state) => state.board.columns);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getColumns(id));
  }, [dispatch, id]);

  return (
    <>
      <section className='flex-container mx-3 my-3'>
        {columns.map((column) => (
          <div className='column'>
            <Column key={column._id} column={column} />
          </div>
        ))}
      </section>
    </>
  );
};
