import React from "react"
import {Link} from "react-router-dom"

import cn from "classnames"

import style from "./style.module.scss"

const Button =({color="default", type="button", onClick, autoWidth=false, to="/", children}) => type === "link" ? (
	<Link
		className={cn(style.button, {
			[style[color]]: color !== "default",
			[style.setWidth]: !autoWidth,
		})}
		to={to}
		onClick={onClick}
		>
		{children}
	</Link>
) : (
	<button
		className={cn(style.button, {
			[style[color]]: color !== "default",
			[style.setWidth]: !autoWidth,
		})}
		type={type}
		onClick={onClick}
		>
		{children}
	</button>
)

export default Button