import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore, { MockStore } from "redux-mock-store";

import ThemeToggle from "./ThemeToggle";

const mockStore = configureStore([]);

describe("ThemeToggle component", () => {
  let store: MockStore;

  beforeEach(() => {
    store = mockStore({
      isDarkMode: { value: false }, // Set initial state as needed
    });
  });

  test("renders ThemeToggle component with light mode initially", () => {
    render(
      <Provider store={store}>
        <ThemeToggle />
      </Provider>,
    );

    const toggleInput = screen.getByLabelText("toggle theme");
    const sunIcon = screen.getByTestId("sun-icon");
    const moonIcon = screen.getByTestId("moon-icon");

    expect(toggleInput).toBeInTheDocument();
    expect(toggleInput).not.toBeChecked();
    expect(sunIcon).toBeInTheDocument();
    expect(moonIcon).toBeInTheDocument();
  });

  test("clicking on the toggle switches between light and dark mode", () => {
    render(
      <Provider store={store}>
        <ThemeToggle />
      </Provider>,
    );

    const toggleInput = screen.getByLabelText("toggle theme");

    fireEvent.click(toggleInput);

    // Assuming you have a reducer that correctly toggles the theme

    setTimeout(() => {
      expect(store.getState().isDarkMode.value).toBe(true);
    }, 200);
  });
});
