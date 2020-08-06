import React from "react"

import style from "./style.scss"

const View = ({children, title}) => {
	document.title = title

	return (
		<div class={style.view}>
			{children}
		</div>
	)
}

export default View