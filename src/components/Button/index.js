import React from "react"
import {Link} from "react-router-dom"

import cn from "classnames"
import style from "./style.module.scss"

const Button =({color="default", type="button", bordered, autoWidth=false, to="/", onClick, children, disabled}) => type === "link" ? (
	<Link
		className={cn(style.button, {
			[style[color]]: color !== "default",
			[style.bordered]: bordered,
			[style.setWidth]: !autoWidth,
			[style.disabled]: disabled,
		})}
		to={!disabled && to}
		>
		{children}
	</Link>
) : (
	<button
		className={cn(style.button, {
			[style[color]]: color !== "default",
			[style.setWidth]: !autoWidth,
			[style.disabled]: disabled,
		})}
		type={type}
		onClick={onClick}
		disabled={disabled}
		>
		{children}
	</button>
)

export default Button