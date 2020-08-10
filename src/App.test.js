import React from "react"
import ReactDOM from "react-dom"
import {MockedProvider} from "@apollo/client/testing"

import App from "./App"
import {GET_HEROES} from "routes/Home"

test("math works as intended", () => {
  expect(1+1).toEqual(2)
})

const mocks = [
  {
    request: {
      query: GET_HEROES,
    },
  },
]

test("renders without crashing", () => {
  const div = document.createElement("div")
  ReactDOM.render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>
  , div)
})