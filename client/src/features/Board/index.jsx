import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { getBoard, getColumns } from './actions';
import { BoardHeader } from './BoardHeader';
import { BoardColumns } from './BoardColumns';
import { Column } from './BoardColumn';

export const Board = (props) => {
  const { id } = useParams();
  const board = useSelector((state) => state.board.board);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBoard(id));
  }, [dispatch, id]);

  if (!board) return <>loading</>;
  return (
    <>
      <Container className='mx-3 my-3'>
        <Row>
          <Col>
            <BoardHeader board={board} />
            <BoardColumns board={board} />
          </Col>
        </Row>
      </Container>
    </>
  );
};
