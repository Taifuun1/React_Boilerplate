import React from "react"
import { render } from "react-dom"

import { Provider } from "./Context"
import Router from "./Router"

import "./styles/base.scss"

render(<Provider><Router /></Provider>, document.getElementById("root"))
