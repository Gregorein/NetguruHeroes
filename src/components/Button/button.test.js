import React from "react"
import {
  render,
  fireEvent,
  screen,
} from "@testing-library/react"
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom"


import Button from "."

test("supports link and button", () => {
  render(
    <Router>
      <Button type="link">Link</Button>
    </Router>
  )
  expect(screen.getByText("Link").tagName).toBe("A")

  render(<Button>Button</Button>)
  expect(screen.getByText("Button").tagName).toBe("BUTTON")
})

test("performs assigned action", async () => {
  render(
    <Router>
      <Route exact path="/" render={() => (
        <Button
          type="link"
          to="/url"
          >
          Link
        </Button>
      )} />
      <Route path="/url" render={() => (
        <div>url</div>
      )} />
    </Router>
  )
  fireEvent.click(screen.getByText("Link"))
  expect(screen.getByText("url")).toBeInTheDocument()

  const handleClick = jest.fn()
  render(<Button onClick={handleClick}>Button</Button>)
  fireEvent.click(screen.getByText("Button"))
  expect(handleClick).toHaveBeenCalled() 
})

test("can be disabled", () => {
  render(<Button disabled>Button</Button>)

  expect(screen.getByText(/Button/i)).toBeDisabled()
})