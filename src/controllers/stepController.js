import { stepsData } from "../data/index";
import store from "../store";
import { saveSteps } from "../store/actions/step";

const getData = () => {
  store.dispatch(saveSteps(stepsData));
};

const StepController = {};

StepController.init = () => {
  getData();
};

export default StepController;
