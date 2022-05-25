import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import InputSearch from "./InputSearch";
import userEvent from "@testing-library/user-event";
import configureStore from "redux-mock-store";

test("Test Search  Input loading correct redux and call callback function", async () => {
  const initialState = {
    modelTheme: {
      modeDark: false,
    },
  };
  const mockStore = configureStore();
  let store;

  store = mockStore(initialState);

  const callback = jest.fn().mockImplementation((val) => console.log(val));

  const { getByRole } = render(
    <Provider store={store}>
      <InputSearch searchNameFlag={callback} />
    </Provider>
  );

  const input: HTMLInputElement = getByRole(
    "search-flag-name"
  ) as HTMLInputElement;
  //Simulate Callback has been called
  await userEvent.type(input, "n");

  expect(callback.mock.calls).toHaveLength(1);
});
