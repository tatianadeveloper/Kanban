import { GET_BOARDS, CREATE_BOARD } from '../../app/actionType.js';

const initialState = {
  boards: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_BOARDS:
      return {
        ...state,
        boards: payload,
      };
    case CREATE_BOARD:
      return {
        ...state,
        boards: [payload, ...state.boards],
      };
    default:
      return state;
  }
}
