import React from "react"
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
		$first: Int
		$skip: Int
	) {
		heroes(first: $first, skip: $skip) {
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
	const {data, fetchMore} = useQuery(HEROES, {
		variables: {
			first: 5,
			skip: 0
		},
		fetchPolicy: "cache-and-network"
	})
	const handleLoadMore = () => fetchMore({
		variables: {
			skip: data.heroes.data.length
		}
	})

	const visible = data && data.heroes.total_count > data.heroes.data.length

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
				<Route path="/add" component={Add } />
			</header>
			<main className={style.list}>
				<HeroList list={data ? data.heroes.data : []} fakeItem={1} />
				{visible && (
					<footer className={style.footer}>
						<Button onClick={(handleLoadMore)} children={"Load more"} />
					</footer>
				)}
			</main>
		</View>
	)
}

export default Home