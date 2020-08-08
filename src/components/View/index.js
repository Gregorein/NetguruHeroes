import React, {useEffect} from "react"

import cn from "classnames"
import style from "./style.module.scss"

const View = ({title, className, children}) => {
	useEffect(() => {
		document.title = title
	}, [title])

	return (
		<div className={cn(style.view, className)}>
			{children}
		</div>
	)
}

export default View