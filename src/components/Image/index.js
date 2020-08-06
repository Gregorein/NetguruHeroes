import React, {
	useState,
	useEffect,
} from "react"

import Loader from "../Loader"

import cn from "classnames"

import style from "./style.module.scss"

const Image = ({className, url}) => {
	const img = new Image()
	const [loaded, toggleLoaded] = useState(false)

	useEffect(() => {
		toggleLoaded(false)
		img.src = src
		img.onload = () => toggleLoaded(true)
	}, [url])

	return (
		<div className={cn(style.container, className)}>
			{loaded ? (
				<img className={style.image} src={img.src} />
			) : (
				<Loader />
			)}
		</div>
	)
}