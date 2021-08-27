import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import Steps from "../../components/step";
import StepController from "../../controllers/stepController";
import { stepDataSelector } from "../../store/selectors/stepSelector";
import AddStep from "../../components/addStep";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export default function StepContainer() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = useSelector(stepDataSelector, shallowEqual);

  useEffect(() => {
    StepController.init();
  }, []);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  return (
    <div className={classes.root}>
      <AddStep />
      <Steps steps={steps} activeStep={activeStep} />
      <div>
        {activeStep === steps.length ? (
          <div>
            <Button onClick={handleReset} className={classes.button}>
              Reset
            </Button>
          </div>
        ) : (
          <div>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.button}
              >
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
