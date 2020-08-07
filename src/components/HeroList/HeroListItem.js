import React from "react"

import LoaderImage from "components/LoaderImage"

import style from "./style.module.scss"

const HeroListItem = ({avatar_url, full_name, type:{name}, description}) => (
	<div className={style.item}>
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
	</div>
)

export default HeroListItem