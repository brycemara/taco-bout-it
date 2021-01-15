import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ReviewForm from "./ReviewForm";

describe("ReviewForm", () => {
  it("should render form correctly", () => {
    render(
      <MemoryRouter>
        <ReviewForm />
      </MemoryRouter>
    );
    const nameInput = screen.getByPlaceholderText("Name");
    const imageInput = screen.getByPlaceholderText("Image (optional)");

    expect(nameInput).toBeInTheDocument();
    expect(imageInput).toBeInTheDocument();
  });
});
