import React from "react"
import {Route} from "react-router-dom"

import View from "components/View"
import Button from "components/Button"
import HeroList from "components/HeroList"

import Add from "routes/Add"

import style from "./style.module.scss"

const Home = () => {
	const handleLoadMore = () => console.log("more")

	return (
		<View title="Netguru Heroes" className={style.container}>
			<header className={style.header}>
				<Button
					type="link"
					to="/add"
					color="green"
					autoWidth
					>
					<span className={style.icon}>+</span> Add hero
				</Button>
				<Route path="/add" component={Add} />
			</header>
			<main className={style.list}>
				<HeroList list={[]} fakeCount={3} />
			</main>
			<footer className={style.footer}>
				<Button onClick={handleLoadMore} children={"Load more"} />
			</footer>
		</View>
	)
}

export default Home