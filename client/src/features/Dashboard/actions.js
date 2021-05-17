import axios from 'axios';
import { GET_BOARDS, CREATE_BOARD } from '../../app/actionType.js';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const getBoards = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/boards');

    dispatch({
      type: GET_BOARDS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: 'BOARD_ERROR',
      payload: err.response.data.error,
    });
  }
};

export const createBoard = (payload) => async (dispatch) => {
  try {
    const body = JSON.stringify(payload);
    const res = await axios.post('/api/boards', body, config);

    dispatch({
      type: CREATE_BOARD,
      payload: res.data,
    });
  } catch (err) {
    console.log(err.response.statusText, err.response.status);
  }
};
