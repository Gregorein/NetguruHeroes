import React from "react"
import {MockedProvider} from "@apollo/client/testing"
import {BrowserRouter as Router} from "react-router-dom"
import ReactDOM from "react-dom"
import {act} from "react-dom/test-utils"

import Details, {
  GET_HERO,
  // DELETE_HERO,
} from "./"

const mocks = [
  {
    request: {
      query: GET_HERO,
      variables: {
        id: "ckdo8ussw00ib0719nli1l9vu",
      },
    },
    result: {
      "id": "ckdo8ussw00ib0719nli1l9vu",
      "full_name": "Albert Einstain",
      "avatar_url": "http://localhost:4000/assets/einstein.png",
      "type": {
        "name": "Human",
      },
      "description": "Sed nec venenatis felis. Aenean efficitur et massa auctor auctor.",
    },
  },
]

ReactDOM.createPortal = jest.fn(modal => modal)
test("renders hero data", () => {
  const div = document.createElement("div");
  const match = {
    params: {
      id: "ckdo8ussw00ib0719nli1l9vu"
    }
  }
  const handleRefetch = jest.fn()

  act(() => {
    ReactDOM.render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Router>
          <Details match={match} handleRefetch={handleRefetch} />
        </Router>
      </MockedProvider>
    , div)
  })

  console.log(div.innerHTML)
})