import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ReviewCard from "./ReviewCard";

describe("ReviewCard", () => {
  it("should render card", () => {
    render(
      <MemoryRouter>
        <ReviewCard
          id={2}
          key={2}
          name="Bob"
          review="This place is dank"
          image=""
        />
      </MemoryRouter>
    );
    const reviewName = screen.getByText("From: Bob")
    const reviewDescription = screen.getByText("This place is dank")

    expect(reviewName).toBeInTheDocument()
    expect(reviewDescription).toBeInTheDocument()
  });
});
