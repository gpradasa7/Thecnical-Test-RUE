import { types } from "../types/types";

const initialState = {
  httpRequest: [],
};

export const httpReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.post:
      return {
        httpRequest: [...state.httpRequest, action.payload],
      };
    case types.delete:
      return {
        httpRequest: state.httpRequest.filter(c => c._id !== action.payload),
      };
    case types.get:
      return {
        httpRequest: [...action.payload],
      };
    case types.put:
      return {
        ...state,
      };
    default:
      return state;
  }
};
