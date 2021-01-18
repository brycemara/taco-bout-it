import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'
import Nav from './Nav';

describe("App", () => {

  it("should render correctly", () => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    )
    const homeButton = screen.getByAltText("home-icon")

    expect(homeButton).toBeInTheDocument()
  })

})