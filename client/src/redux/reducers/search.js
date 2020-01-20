import { SEARCH_SUCCESS, SEARCH_FAIL, CLEAR_SOLUTIONS } from "../actions/types";

const initialState = {
  solutions: [],
  clue: "",
  length: "",
  isDone: false
};

export default function(state = initialState, action) {
  const { payload, type } = action;
  switch (type) {
    case SEARCH_SUCCESS:
      return {
        ...state,
        solutions: payload.data,
        clue: payload.clue,
        length: payload.length,
        isDone: true
      };

    case SEARCH_FAIL:
    case CLEAR_SOLUTIONS:
      return { ...state, solutions: [], isDone: false };

    default:
      return state;
  }
}
