import { render, screen } from '@testing-library/react';
import { Router, MemoryRouter } from 'react-router-dom'
import App from './App';

describe("App", () => {

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
