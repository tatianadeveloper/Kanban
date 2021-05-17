import axios from 'axios';
import { CREATE_TASK, GET_TASK } from '../../app/actionType.js';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const getTask = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/tasks/${id}`);

    dispatch({
      type: GET_TASK,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
