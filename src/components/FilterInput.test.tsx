import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import FilterInput from "./FilterInput";
import userEvent from "@testing-library/user-event";
import configureStore from "redux-mock-store";

test("Test Filter loading correct redux and call callback function", async () => {
  const initialState = {
    modelTheme: {
      modeDark: false,
    },
  };
  const mockStore = configureStore();
  let store;

  store = mockStore(initialState);

  const callback = jest.fn().mockImplementation((val) => console.log(val));

  const { getByTitle, getByText } = render(
    <Provider store={store}>
      <FilterInput filterDataCurrently={callback} />
    </Provider>
  );
  expect(getByText("Filter by region")).not.toBeNull();

  const dropdown: HTMLSelectElement = document.querySelector(
    "select"
  ) as HTMLSelectElement;
  //Simulate Callback has been called
  await userEvent.selectOptions(dropdown, ["ame"]);

  expect(callback.mock.calls).toHaveLength(1);
});
