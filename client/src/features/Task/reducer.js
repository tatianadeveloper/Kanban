import { GET_TASK, CREATE_TASK } from '../../app/actionType.js';

const initialState = {
  task: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_TASK:
      return {
        ...state,
        task: payload,
      };
    default:
      return state;
  }
}
