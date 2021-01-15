import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'
import {fetchTaco} from '../APIcalls'
import Recipe from './Recipe';
jest.mock("../APIcalls");

const expectedReturn = 
  {
    shell: {
        name: "bad-ass tortillas"
    },
    seasoning: {        
        name: "Sriracha Marinade"
    },
    mixin: {
        name: "Traditional Taco Mixins"
    },
    base_layer: {
        name: "North Carolina Battered Catfish"
    },
    condiment: {
        name: "Vindaloo Sauce"
    }
}


describe("Recipe", () => {

  it("should render correctly", () => {
    fetchTaco.mockResolvedValue(expectedReturn)
    render(
      <MemoryRouter>
        <Recipe />
      </MemoryRouter>
    )
    const title = screen.getByText("RANDOM TACO RECIPE");

    expect(title).toBeInTheDocument()
  })

  it("should render seasoning correctly", async () => {
    fetchTaco.mockResolvedValue(expectedReturn)
    render(
      <MemoryRouter>
        <Recipe />
      </MemoryRouter>
    )
    const seasonings = await waitFor(() => screen.getByText("Seasoning: Sriracha Marinade"))

    expect(seasonings).toBeInTheDocument()
  })

  it("should render shell correctly", async () => {
    fetchTaco.mockResolvedValue(expectedReturn)
    render(
      <MemoryRouter>
        <Recipe />
      </MemoryRouter>
    )
    const shell = await waitFor(() => screen.getByText("Shell: bad-ass tortillas"))

    expect(shell).toBeInTheDocument()
  })

  it("should render base layer correctly", async () => {
    fetchTaco.mockResolvedValue(expectedReturn)
    render(
      <MemoryRouter>
        <Recipe />
      </MemoryRouter>
    )
    const baseLayer = await waitFor(() => screen.getByText("Base Layer: North Carolina Battered Catfish"))

    expect(baseLayer).toBeInTheDocument()
  })

  it("should render mixin correctly", async () => {
    fetchTaco.mockResolvedValue(expectedReturn)
    render(
      <MemoryRouter>
        <Recipe />
      </MemoryRouter>
    )
    const mixin = await waitFor(() => screen.getByText("Mixin: Traditional Taco Mixins"))

    expect(mixin).toBeInTheDocument()
  })

  it("should render condiment correctly", async () => {
    fetchTaco.mockResolvedValue(expectedReturn)
    render(
      <MemoryRouter>
        <Recipe />
      </MemoryRouter>
    )
    const condiment = await waitFor(() => screen.getByText("Condiment: Vindaloo Sauce"))

    expect(condiment).toBeInTheDocument()
  })
})