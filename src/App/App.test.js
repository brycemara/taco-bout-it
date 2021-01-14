import React from "react";
import App from "./App";
import { screen, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { Router, MemoryRouter } from "react-router-dom";
import { createMemoryHistory } from "history";
import { fetchTaco } from "../APIcalls";
jest.mock("../APIcalls");

const expectedReturn = {
  shell: {
    name: "bad-ass tortillas",
  },
  seasoning: {
    name: "Sriracha Marinade",
  },
  mixin: {
    name: "Traditional Taco Mixins",
  },
  base_layer: {
    name: "North Carolina Battered Catfish",
  },
  condiment: {
    name: "Vindaloo Sauce",
  },
};

describe("App Rendering", () => {
  it("should render Nav correctly", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const navBar = screen.getByText("Home");

    expect(navBar).toBeInTheDocument();
  });

  it("should render HomePage correctly", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const homePage = screen.getByText("Random Taco of the Day!");

    expect(homePage).toBeInTheDocument();
  })
});

describe("Routes", () => {
  it("should route to homepage", () => {
    const history = createMemoryHistory();
    history.push("/");
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    const homePageTitle = screen.getByText("Random Taco of the Day!");
    const viewRecipeButton = screen.getByText("View Recipe");

    expect(homePageTitle).toBeInTheDocument();
    expect(viewRecipeButton).toBeInTheDocument();
  });

  it("should route to recipe page", async () => {
    fetchTaco.mockResolvedValue(expectedReturn);

    const history = createMemoryHistory();
    history.push("/recipe");
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    const tacoSeasonings = await waitFor(() =>
      screen.getByText("Seasoning: Sriracha Marinade")
    );
    const tacoShell = await waitFor(() =>
      screen.getByText("Shell: bad-ass tortillas")
    );

    expect(tacoSeasonings).toBeInTheDocument();
    expect(tacoShell).toBeInTheDocument();
  });

  it("should route to about page", () => {
    const history = createMemoryHistory();
    history.push("/about");
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    const aboutTitle = screen.getByText("About Us");
    const locations = screen.getByText("Come Visit Us!");

    expect(aboutTitle).toBeInTheDocument();
    expect(locations).toBeInTheDocument();
  });

  it("should route to reviews page", () => {
    const history = createMemoryHistory();
    history.push("/reviews");
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    const reviewTitle = screen.getByText("Customer Reviews");
    const willsReview = screen.getByText("From: Will Mitchell");
    const reviewForm = screen.getByText("Taco bout your experience!");

    expect(reviewTitle).toBeInTheDocument();
    expect(willsReview).toBeInTheDocument();
    expect(reviewForm).toBeInTheDocument();
  });

  it("should handle a bad path", () => {
    const history = createMemoryHistory();
    history.push("/some/bad/path");
    render(
      <Router history={history}>
        <App />
      </Router>
    );
    const error = screen.getByText("Page does not exist");

    expect(error).toBeInTheDocument();
  });
});

describe("View Recipe interaction", () => {
  it("should be able to click view recipe and see the recipe", async () => {
    fetchTaco.mockResolvedValue(expectedReturn);
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const viewRecipeButton = screen.getByText("View Recipe");

    userEvent.click(viewRecipeButton);

    const recipeView = await waitFor(() =>
      screen.getByText("Random Taco Recipe")
    );
    const seasoning = await waitFor(() =>
      screen.getByText("Seasoning: Sriracha Marinade")
    );

    expect(recipeView).toBeInTheDocument();
    expect(seasoning).toBeInTheDocument();
  });
});

describe("Review Form interaction", () => {
  it("should be able to fill out the form", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    userEvent.click(screen.getByText("Reviews"));

    const reviewsHeader = await waitFor(() =>
      screen.getByText("Customer Reviews")
    );

    expect(reviewsHeader).toBeInTheDocument();

    const nameInput = screen.getByPlaceholderText("Name");
    const descriptionInput = screen.getByPlaceholderText("Description");
    const addReviewButton = screen.getByText("Add Review");

    userEvent.type(nameInput, "Bob");
    userEvent.type(descriptionInput, "So good!!");
    userEvent.click(addReviewButton);

    const bobReview = screen.getByText("From: Bob");

    expect(bobReview).toBeInTheDocument();
  });

  it("should not be able to fill out the form if it's blank", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    userEvent.click(screen.getByText("Reviews"));

    const reviewsHeader = await waitFor(() =>
      screen.getByText("Customer Reviews")
    );

    expect(reviewsHeader).toBeInTheDocument();

    const addReviewButton = screen.getByText("Add Review");

    userEvent.click(addReviewButton);

    const bobReview = screen.queryByText("From: Bob");

    expect(bobReview).not.toBeInTheDocument();
  });

  it("should not be able to fill out the form if name is blank", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    userEvent.click(screen.getByText("Reviews"));

    const reviewsHeader = await waitFor(() =>
      screen.getByText("Customer Reviews")
    );

    expect(reviewsHeader).toBeInTheDocument();

    const descriptionInput = screen.getByPlaceholderText("Description");
    const addReviewButton = screen.getByText("Add Review");

    userEvent.type(descriptionInput, "So good!!");
    userEvent.click(addReviewButton);

    const bobReview = screen.queryByText("So good!!");

    expect(bobReview).not.toBeInTheDocument();
  });

  it("should not be able to fill out the form if description is blank", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    userEvent.click(screen.getByText("Reviews"));

    const reviewsHeader = await waitFor(() =>
      screen.getByText("Customer Reviews")
    );

    expect(reviewsHeader).toBeInTheDocument();

    const nameInput = screen.getByPlaceholderText("Name");
    const addReviewButton = screen.getByText("Add Review");

    userEvent.type(nameInput, "Bob");
    userEvent.click(addReviewButton);

    const bobReview = screen.queryByText("From: Bob");

    expect(bobReview).not.toBeInTheDocument();
  });
});

describe;
