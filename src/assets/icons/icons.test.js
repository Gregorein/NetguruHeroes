import React from "react"
import {render} from "@testing-library/react"

import ErrorIcon from "./Error"
import TrashIcon from "./Trash"

const icons = [ErrorIcon, TrashIcon]
const randomString = () => Math.random().toString(36).substring(8)

test("icons receive props", () => {
  icons.forEach(Icon => {
    const prop = randomString()
    const {getByTestId} = render(<Icon data-testid={prop} />)

    const foundProp = getByTestId(prop)

    expect(foundProp).toBeInTheDocument()
  })
})