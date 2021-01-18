import React from "react";
import HomePage from "./HomePage";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";


describe("HomePage", () => {
  it("should render correctly", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    )
    const homeTitle = screen.getByText("Check out our taco of the day!")
    const viewRecipeButton = screen.getByText("RECIPE")
    
    expect(homeTitle).toBeInTheDocument()
    expect(viewRecipeButton).toBeInTheDocument()
  })

  it("should be able to favorite a taco", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    )
    const favImage = screen.getByAltText("fav-img")

    userEvent.click(favImage)

    const favParagraph = screen.getByText("Thanks for favoriting our taco!")
    expect(favParagraph).toBeInTheDocument()
  })

  it("should be able to un-favorite a taco", () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    )
    const favImage = screen.getByAltText("fav-img")

    userEvent.click(favImage)

    userEvent.click(favImage)

    const unFavParagraph = screen.getByText("Favorite the taco if you want to see it again!")

    expect(unFavParagraph).toBeInTheDocument()
  })

})
