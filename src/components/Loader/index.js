import React from "react"

import cn from "classnames"

import style from "./style.module.scss"

const Loader = ({className}) => (
	<span className={cn(style.loader, className)} />
)

export default Loader