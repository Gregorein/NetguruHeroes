import React, {
	useState,
	useEffect,
	useCallback,
} from "react"
import {Route} from "react-router-dom"
import {
	useQuery,
	gql,
} from "@apollo/client"

import View from "components/View"
import Button from "components/Button"
import HeroList from "components/HeroList"

import Add from "routes/Add"

import style from "./style.module.scss"

const HEROES = gql`
	query Heroes(
		$limit: Int
		$offset: Int
	) {
		heroes: heroes(first: $limit, skip: $offset) {
			total_count
			data {
				avatar_url
				full_name
				type {
					name
				}
				description
			}
		}
	}
	`

const Home = () => {
	const [heroes, setHeroes] = useState([])
	const limit = 5
	const [offset, setOffset] = useState(0)
	const {data, refetch} = useQuery(HEROES, {
		variables: {limit, offset},
		fetchPolicy: "cache-and-network"
	})
	useEffect(() => {
		if (data) setHeroes(heroes => [...heroes, ...data.heroes.data])
	}, [data])

	const handleLoadMore = useCallback(
		() => setOffset(offset +limit),
		[offset]
	)

	const handleRefetch = () => refetch()

	const visible = heroes.length > 0 && (data && data.heroes.total_count > heroes.length)
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
				<Button onClick={handleRefetch} children={"refetch"} />
				<Route path="/add" component={Add } />
			</header>
			<main className={style.list}>
				<HeroList list={heroes} fakeItem={1} />
				{visible && (
					<footer className={style.footer}>
						<Button onClick={handleLoadMore} children={"Load more"} />
					</footer>
				)}
			</main>
		</View>
	)
}

export default Home