import React from "react"

import cn from "classnames"

import style from "./style.module.scss"

const Button =({color="default", type="button", onClick, autoWidth=false, children}) => {
	console.log()

	return (
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
}

export default Button