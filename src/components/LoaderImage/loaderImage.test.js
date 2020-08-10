import React from "react"
import {
  render,
  screen,
} from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

import LoaderImage from "./"

// const redDot = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4
  //8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==`

test("displays spinner when no image is provided", () => {
  render(<LoaderImage alt="empty" />)

  expect(screen.queryByAltText("empty")).not.toBeInTheDocument()
})