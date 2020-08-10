import React from "react"
import {render} from "@testing-library/react"
import {JSDOM} from "jsdom"

import View from "components/View"

const dom = new JSDOM()
global.document = dom.window.document

const randomString = () => Math.random().toString(36).substring(8)
test("changes title", () => {
  const oldTitle = randomString()
  const newTitle = randomString() 
  document.title = oldTitle

  render(<View title={newTitle} />)
  expect(document.title).not.toBe(oldTitle)
  expect(document.title).toBe(newTitle)
})