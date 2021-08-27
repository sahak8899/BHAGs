import * as actionTypes from '../action-types/step';

export const saveSteps = (payload) => ({
    type: actionTypes.SAVE_STEPS,
    payload,
  });