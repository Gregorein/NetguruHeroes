import React from "react"

import style from "./style.module.scss"

const HeroListItem = ({avatar, name, type, description}) => (
	<div className={style.item}>
		<div className={style.user}>
			<div className={style.avatar}>{avatar}</div>
			{name}
		</div>
		<div className={style.type}>{type}</div>
		<div className={style.description}>{description}</div>			
	</div>
)

export default HeroListItem