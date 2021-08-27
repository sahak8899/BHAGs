import store from "../store";
import { stepDataSelector } from "../store/selectors/stepSelector";
const Utils = {};

Utils.setStepsCount = (title) => {
  const steps = stepDataSelector(store.getState());
  const newData = [...steps];
  newData.push({
    id: steps.length + 1,
    title,
  });

  return newData;
};

export default Utils;
