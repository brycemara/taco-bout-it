import { render, screen } from '@testing-library/react';
import { Router, MemoryRouter } from 'react-router-dom'
import ReviewForm from './ReviewForm';

describe("ReviewForm", () => {

    it("should render correctly", () => {
      render(
        <MemoryRouter>
          <ReviewForm />
        </MemoryRouter>
      )
      const nameInput = screen.getByPlaceholderText("Name")
      const imageInput = screen.getByPlaceholderText("Image (optional)")

      expect(nameInput).toBeInTheDocument()
      expect(imageInput).toBeInTheDocument()
    })

    it("should be able to fill out form", () => {

    })

    it('should be able to submit a new reservation', () => {
      const mockHandleSubmit = jest.fn()
      render(
        <MemoryRouter>
          <ReviewForm />
        </MemoryRouter>
      )
  
      fireEvent.click(screen.getByText("Add Review"))
  
      expect(mockHandleSubmit).toBeCalled()
    })

})