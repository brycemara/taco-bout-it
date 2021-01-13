import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AboutUs from "./AboutUs";

describe("About Us", () => {
  
  it("should render correctly", () => {
    render(
      <MemoryRouter>
        <AboutUs />
      </MemoryRouter>
    );
    const title = screen.getByText("About Us");

    expect(title).toBeInTheDocument();
  });

  it("should render the taco truck image", () => {
    render(
      <MemoryRouter>
        <AboutUs />
      </MemoryRouter>
    );
    const image = screen.getByAltText("taco truck")

    expect(image).toBeInTheDocument()
  })
});
