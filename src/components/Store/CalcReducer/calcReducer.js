import { SET_NEW_VALUES, FORSED_UPDATE_VALUE } from "./calcActions";

const initialState = {
  first: { triggered: false, value: 0, name: "first" },
  second: { triggered: false, value: 0, name: "second" },
  third: { triggered: false, value: 0, name: "third" },
  fourth: { triggered: false, value: 0, name: "fourth" },
  maxValue: 100,
  generalSum: 0,
};

const calcReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEW_VALUES:
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export { calcReducer };
