import React from 'react';
import Card from 'react-bootstrap/Card';

export const BoardCard = ({ board }) => {
  return (
    <Card
      border='Light'
      className='mx-2 my-3 '
      style={{
        borderRadius: '3px',
        width: '18rem',
        height: '10rem',
      }}
    >
      <Card.Body
        style={{
          padding: '4px 8px',
        }}
      >
        <Card.Title
          style={{
            fontSize: '16px',
            fontWeight: '700',
          }}
        >
          {board.name}
        </Card.Title>
      </Card.Body>
    </Card>
  );
};
