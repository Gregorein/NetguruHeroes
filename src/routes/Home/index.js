import React from "react"

import style from "./style.module.scss"

import View from "../../components/View"
import Button from "../../components/Button"
import HeroList from "../../components/HeroList"

const Home = () => {
	const handleAddHero = () => console.log("click")
	const handleLoadMore = () => console.log("more")

	return (
		<View title="Netguru Heroes" className={style.container}>
			<header className={style.header}>
				<Button
					onClick={handleAddHero}
					color="green"
					autoWidth
					>
					<span className={style.icon}>+</span> Add hero
				</Button>
			</header>
			<main className={style.list}>
				<HeroList list={[]} fakeCount={3} />
			</main>
			<footer className={style.footer}>
				<Button
					onClick={handleLoadMore}
					>
					Load more
				</Button>
			</footer>
		</View>
	)
}

export default Home