import React from "react"

import HeroListItem from "./HeroListItem"
import HeroFakeItem from "./HeroFakeItem"

import cn from "classnames"

import style from "./style.module.scss"

const HeroList = ({list=[], fakeItem=false}) => {
	const renderFakes = () => {
		const fakes = []

		for (let i = 0; i < fakeItem; i++) {
			fakes.push(<HeroFakeItem key={i} />)
		}

		return fakes
	}
	const renderList = () => {
		const heroes = []

		for (let i = 0; i < list.length; i++) {
			heroes.push(<HeroListItem {...list[i]} key={i} />)
		}

		return heroes
	}

	return (
		<div className={style.list}>
			<header className={style.header}>
				<div className={style.title}>Heros</div>
				<div className={cn(style.title, style.narrow)}>Type</div>
				<div className={style.title}>Description</div>
			</header>
			{list.length !== 0 && renderList()}
			{list.length === 0 && fakeItem && renderFakes()}
		</div>
	)
}

export default HeroList