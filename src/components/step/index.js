import React from "react";
import Step from "@material-ui/core/Step";
import Stepper from '@material-ui/core/Stepper';
import StepLabel from "@material-ui/core/StepLabel";

export default function Steps({ steps, activeStep }) {
  return (
    <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((elem) => (
          <Step key={elem.id}>
            <StepLabel>{elem.title}</StepLabel>
          </Step>
        ))}
      </Stepper>
  );
}
