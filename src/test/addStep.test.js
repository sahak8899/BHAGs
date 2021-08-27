import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import AddStep from "../components/addStep";
import store from "../store";
describe("Test AddStep component", () => {
  it("captures clicks", (done) => {
    function handleClick() {
      done();
    }
    const { getByText } = render(
      <Provider store={store}>
        <AddStep />
      </Provider>
    );

    const node = getByText("Add Step");

    console.log("SteList", store.getState().steps.stepList);
    node.onclick = handleClick;
    fireEvent.click(node);
    console.log("SteList", store.getState().steps.stepList);
  });
});
