import { render, screen, fireEvent } from "@testing-library/react";
import { test, expect, describe } from "vitest";
import { router } from "../App";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../components";
import { theme } from "../util";
import { Fragment } from "react";

beforeEach(() => {
  render(
    <Fragment>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Fragment>
  );
});

test("renders app succesfully", () => {
  const linkElement = screen.getByText(/Task Management/);
  expect(linkElement).toBeInTheDocument();
});

describe("Add Task", () => {
  test("Test form elements", () => {
    const title = screen.getByPlaceholderText("Title");
    const description = screen.getByPlaceholderText("Description");
    const addButton = screen.getByText("Add");
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });
});

describe("Test Task display", () => {
  test("Test empty state when no task has been added", () => {
    const emptyStateText = screen.getByText(
      "You have nothing to do. Go get some sleep."
    );
    expect(emptyStateText).toBeInTheDocument();

    const taskListContainer = screen.getByTestId("taskListContainer");
    const taskList = taskListContainer.getElementsByClassName("task");
    expect(taskList.length).toBe(0);
  });

  test("Test task is added successfully", () => {
    const title = screen.getByPlaceholderText("Title");
    const description = screen.getByPlaceholderText("Description");
    const addButton = screen.getByText("Add");
    //add task
    fireEvent.change(title, {
      target: { value: "Complete assignment" },
    });
    fireEvent.change(description, {
      target: {
        value: "Research the rules and regulation regarding space travels",
      },
    });
    fireEvent.click(addButton);

    //add task
    fireEvent.change(title, {
      target: { value: "Complete assignment" },
    });
    fireEvent.change(description, {
      target: {
        value: "Research the rules and regulation regarding space travels",
      },
    });
    fireEvent.click(addButton);

    const emptyStateText = screen.queryByText(
      "You have nothing to do. Go get some sleep."
    );
    expect(emptyStateText).toBe(null);

    const taskListContainer = screen.getByTestId("taskListContainer");
    const taskList = taskListContainer.getElementsByClassName("task");
    expect(taskList.length).toBe(2);
  });
});
