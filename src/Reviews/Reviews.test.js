import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Reviews from "./Reviews";


describe("Reviews", () => {
  it("should render header", () => {
    render(
      <MemoryRouter>
        <Reviews />
      </MemoryRouter>
    )
    const reviewsHeader = screen.getByText("Customer Reviews")

    expect(reviewsHeader).toBeInTheDocument()
  })
  
  it("should render reviews", () => {
    render(
      <MemoryRouter>
        <Reviews />
      </MemoryRouter>
    )
    const letaReview = screen.getByText("From: Leta Keane")
    const willsReview = screen.getByText("From: Will Mitchell")
    const shawnsReview = screen.getByText("From: Shawn Truesdale")

    expect(letaReview).toBeInTheDocument()
    expect(willsReview).toBeInTheDocument()
    expect(shawnsReview).toBeInTheDocument()
    })
})


