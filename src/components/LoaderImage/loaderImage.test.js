import React from "react"
import {
  render,
  screen,
} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import LoaderImage from "./"

test("displays spinner when no image is provided", () => {
  render(<LoaderImage alt="empty" />)

  expect(screen.queryByAltText("empty")).not.toBeInTheDocument()
})