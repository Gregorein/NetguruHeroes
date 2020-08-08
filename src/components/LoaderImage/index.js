import React, {
	useState,
	useEffect,
} from "react"

import Loader from "components/Loader"

import cn from "classnames"
import style from "./style.module.scss"

const LoaderImage = ({className, url, alt=""}) => {
	const img = new Image()
	const [loaded, toggleLoaded] = useState(false)

	useEffect(() => {
		toggleLoaded(false)
		img.src = url
		img.onload = () => toggleLoaded(true)

		return () => {
			img.src = null
		}
	}, [url, img.onload, img.src])

	return (
		<div className={cn(style.container, className)}>
			{loaded ? (
				<img
					className={style.image}
					src={url}
					alt={alt}
					/>
			) : (
				<Loader />
			)}
		</div>
	)
}

export default LoaderImage