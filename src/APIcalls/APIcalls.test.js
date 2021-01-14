import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Recipe from "../Recipe/Recipe";
import { fetchTaco } from "./APIcalls";

describe("API call", () => {
  it("should fetch correct data", () => {
    render(
      <MemoryRouter>
        <Recipe />
      </MemoryRouter>
      // should we be using chai spies here
    )
  })
})