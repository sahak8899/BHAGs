import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Utils from "../../utils";
import { saveSteps } from "../../store/actions/step";
import { useDispatch } from "react-redux";

export default function AddStep() {
  const dispatch = useDispatch();
  const [stepName, setStepName] = useState("");
  const [error, setError] = useState(false)

  const handleChange = (event) => {
    setStepName(event.target.value);
  };

  const handleAddStep = () => {
    if(Utils.setStepsCount(stepName).length > 5) {
      setError(true)
    } else {
      dispatch(saveSteps(Utils.setStepsCount(stepName)));
    }
    setStepName("")
  };

  return (
    <div>
      <TextField
        id="standard-textarea"
        label="add new step name"
        placeholder="Placeholder"
        multiline
        onChange={handleChange}
        value={!error ? stepName : ""}
      />
      <Button variant="contained" color="primary" onClick={handleAddStep} disabled={error}>
        Add Step
      </Button>
      {
        error && <p style={{color: "orange"}}>Steps must be min 2 and max 5</p>
      }
    </div>
  );
}
