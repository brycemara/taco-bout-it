import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
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

    it.skip("should be able to fill out form", async () => {
      const mockHandleSubmit = jest.fn()
      render(
        <MemoryRouter>
          <ReviewForm />
        </MemoryRouter>
      )
      const nameInput = screen.getByPlaceholderText("Name")
      const descriptionInput = screen.getByPlaceholderText("Description")
      const addReviewButton = screen.getByText("Add Review")


      userEvent.type(nameInput, "Bob")
      userEvent.type(descriptionInput, "So good!!")
      userEvent.click(addReviewButton)

      // need to expect something to happen with the form is submitted, unsure what yet
      // what if a success! review submitted! little tag/alert comes up. then we could test that that happens.
    })
})