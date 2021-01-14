import React from "react";
import App from "./App";
import { screen, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { Router, MemoryRouter } from "react-router-dom";
import { createMemoryHistory } from "history";
import { fetchTaco } from "../APIcalls";
jest.mock("../APIcalls");


describe("App Rendering", () => {

  it("should render Nav correctly", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    const navBar = screen.getByText("Home")

    expect(navBar).toBeInTheDocument()
  })

})

describe("Routes", () => {
   it("should route to homepage", () => {
    const history = createMemoryHistory();
    history.push("/");
     render(
       <Router history={history}>
         <App />
       </Router>
     )
      const homePageTitle = screen.getByText("Random Taco of the Day!")
      const viewRecipeButton = screen.getByText("View Recipe")

      expect(homePageTitle).toBeInTheDocument()
      expect(viewRecipeButton).toBeInTheDocument()
   })

   it("should route to about page", () => {
    const history = createMemoryHistory();
    history.push("/about");
     render(
       <Router history={history}>
         <App />
       </Router>
     )
     const aboutTitle = screen.getByText("About Us")
     const locations = screen.getByText("Come Visit Us!")

     expect(aboutTitle).toBeInTheDocument()
     expect(locations).toBeInTheDocument()
     
   })

   it("should route to reviews page", () => {
    const history = createMemoryHistory();
    history.push("/reviews");
     render(
       <Router history={history}>
         <App />
       </Router>
     )
     const reviewTitle = screen.getByText("Customer Reviews")
     const willsReview = screen.getByText("From: Will Mitchell")
     const reviewForm = screen.getByText("Taco bout your experience!")

     expect(reviewTitle).toBeInTheDocument()
     expect(willsReview).toBeInTheDocument()
     expect(reviewForm).toBeInTheDocument()
   })

   it("should handle a bad path", () => {
    const history = createMemoryHistory();
    history.push("/some/bad/path");
     render(
       <Router history={history}>
         <App />
       </Router>
     )
     const error = screen.getByText("Page does not exist")

     expect(error).toBeInTheDocument()
   })
})
