import { types } from "../types/types";

export const teamReducer = (state = [], action) => {
  switch (action.type) {
    case types.add:
      return [...state, action.payload];
    case types.remove:
      return state.filter((hero) => hero.id !== action.payload.id);
    default:
      return state;
  }
};
