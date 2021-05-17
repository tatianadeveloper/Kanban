import axios from 'axios';
import {
  CREATE_BOARD,
  GET_BOARD,
  GET_COLUMNS,
  ADD_COLUMN,
} from '../../app/actionType.js';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const getBoard = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/boards/${id}`);
    console.log('getBoard', res.data);
    dispatch({
      type: GET_BOARD,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getColumns = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/boards/${id}/columns`);
    dispatch({
      type: GET_COLUMNS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
