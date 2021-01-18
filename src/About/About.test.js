import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import About from "./About";

describe("About", () => {
  it("should render correctly", () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
    const title = screen.getByText("About Taquero Mucho");

    expect(title).toBeInTheDocument();
  });

  it("should render the taco truck image", () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
    const image = screen.getByAltText("taco truck");

    expect(image).toBeInTheDocument();
  });
});
