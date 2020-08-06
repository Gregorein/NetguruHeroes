import React from "react"

// import HeroListItem from "./HeroListItem"
import HeroFakeItem from "./HeroFakeItem"

import cn from "classnames"

import style from "./style.module.scss"

const HeroList = ({list=[], fakeCount=false}) => {
	const renderFakes = () => {
		const fakes = []

		for (let i = 0; i < fakeCount; i++) {
			fakes.push(<HeroFakeItem key={i} />)
		}

		return fakes
	}

	return (
		<div className={style.list}>			<header className={style.header}>
				<div className={style.title}>Heros</div>
				<div className={cn(style.title, style.narrow)}>Type</div>
				<div className={style.title}>Description</div>
			</header>
			{list.length !== 0 && "list"}
			{list.length === 0 && fakeCount && renderFakes()}
		</div>
	)
}

export default HeroList