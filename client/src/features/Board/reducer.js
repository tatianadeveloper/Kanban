import { GET_BOARD, GET_COLUMNS, ADD_COLUMN } from '../../app/actionType.js';

const initialState = {
  board: null,
  columns: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_BOARD:
      return {
        ...state,
        board: payload,
      };
    case GET_COLUMNS:
      return {
        ...state,
        columns: payload,
      };
    default:
      return state;
  }
}
