import axios from "axios";
import { SEARCH_SUCCESS, SEARCH_FAIL } from "./types";
import { setAlert } from "./alert";

export const searchClue = (clue, length) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  const body = JSON.stringify({ clue, length });
  try {
    const res = await axios.post("/api/solve", body, config);

    const data = res.data;

    dispatch({
      type: SEARCH_SUCCESS,
      payload: { data, clue, length }
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => {
        dispatch(setAlert(error.msg, "danger"));
      });
    }
    dispatch({
      type: SEARCH_FAIL
    });
  }
};
