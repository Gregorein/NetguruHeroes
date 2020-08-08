import React from "react"
import {Link} from "react-router-dom"

import LoaderImage from "components/LoaderImage"

import cn from "classnames"
import style from "./style.module.scss"

const HeroListItem = ({id, avatar_url, full_name, type:{name}, description}) => (
	<Link
		className={cn(style.item, style.link)}
		to={`/details/${id}`}
		>
		<div className={style.user}>
      <LoaderImage
        className={style.avatar}
        url={avatar_url}
        alt={`${full_name}'s avatar`}
        />
			{full_name}
		</div>
		<div className={style.type}>{name}</div>
		<div className={style.description}>{description}</div>			
	</Link>
)

export default HeroListItem