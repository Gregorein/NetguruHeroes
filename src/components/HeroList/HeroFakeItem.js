import React from "react"

import Loader from "../../components/Loader"

import style from "./style.module.scss"

const HeroFakeItem = ({avatar, name, type, description}) => (
	<div className={style.item}>
		<div className={style.user}>
			<div className={style.avatar}><Loader /></div>
			<span className={style.fakeText}>Hello World</span>
		</div>
		<div className={style.type}><span className={style.fakeText}>I mean it</span></div>
		<div className={style.description}><span className={style.fakeText}>I just want to say hello</span></div>
	</div>
)

export default HeroFakeItem