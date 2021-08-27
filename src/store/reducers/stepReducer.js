import * as actionTypes from "../action-types/step";

const initialState = {
  stepList: [],
};

const StepReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SAVE_STEPS:
      return {
        ...state,
        stepList: payload,
      };
    default:
      return state;
  }
};
export default StepReducer;
