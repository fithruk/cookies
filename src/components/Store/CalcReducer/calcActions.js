const SET_GENERAL_VALUE = "set_general_value";
const FORSED_UPDATE_VALUE = "forsed_update_value";
const SET_NEW_VALUES = "set_new_values";

const calculateNewValues = (name, value) => {
  return function (dispatch, getState) {
    const state = Object.entries(getState().calculator);
    const maxValue = state.find((item) => item[0] === "maxValue");
    let newState = state.map((calc) =>
      calc[0] === name
        ? [
            calc[0],
            { name: calc[0], triggered: !calc.triggered, value: +value },
          ]
        : calc
    );
    const generalSum = newState.reduce((acc, item) => {
      if (item[1].value) {
        return +acc + +item[1].value;
      }
      return +acc;
    }, 0);

    const triggered = newState.filter((calc) => calc[1].triggered);
    if (triggered.length === 3) {
      const commonValue = triggered.reduce(
        (acc, item) => acc + item[1].value,
        0
      );
      const lastInput = newState.find((calc) => !calc[1].triggered);
      let finalValue = maxValue[1] - commonValue;
      finalValue < 0 && (finalValue = 0);
      lastInput[1].value = finalValue;
    }
    newState = Object.fromEntries(newState);
    newState.generalSum = generalSum;
    dispatch({ type: SET_NEW_VALUES, payload: newState });
  };
};

const setForsedUpdate = ({ name }) => {
  return function (dispatch, getState) {
    const state = Object.entries(getState().calculator);
    const triggeredExeption = state
      .filter((calc) => calc[1].triggered)
      .filter((item) => item[0] !== name)
      .reduce((acc, item) => acc + item[1].value, 0);

    const maxValue = state.find((item) => item[0] === "maxValue");
    let newState = state.map((calc) =>
      calc[0] === name
        ? [
            calc[0],
            {
              name: calc[0],
              triggered: calc[1].triggered,
              value: maxValue[1] - triggeredExeption,
            },
          ]
        : calc
    );

    newState = Object.fromEntries(newState);
    dispatch({ type: SET_NEW_VALUES, payload: newState });
  };
};

export {
  SET_GENERAL_VALUE,
  SET_NEW_VALUES,
  FORSED_UPDATE_VALUE,
  calculateNewValues,
  setForsedUpdate,
};
