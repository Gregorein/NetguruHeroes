import React from "react"
import {Route} from "react-router-dom"
import {
	useQuery,
	gql,
} from "@apollo/client"

import View from "components/View"
import Button from "components/Button"
import Loader from "components/Loader"
import HeroList from "components/HeroList"

import ErrorIcon from "icons/Error"

import Add from "routes/Add"
import Details from "routes/Details"

import style from "./style.module.scss"

export const GET_HEROES = gql`
	query Heroes(
		$first: Int
		$skip: Int
	) {
		heroes(first: $first, skip: $skip) {
			total_count
			data {
				id
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
	const {loading, error, data, fetchMore, refetch} = useQuery(GET_HEROES, {
		variables: {
			first: 10,
			skip: 0
		},
	})
	const handleLoadMore = () => fetchMore({
		variables: {
			skip: data.heroes.data.length
		},
		updateQuery: (existing, {fetchMoreResult: incoming}) => {
			if (!incoming) return existing
			return {
				heroes: {
					...existing.heroes,
					...incoming.heroes,
					data: [
						...existing.heroes.data,
						...incoming.heroes.data,
					],
				}
			}
		},
	})
	const handleRefetch = () => {
		refetch({
			variables: {
				skip: 0
			}
		})
	}

	const visible = data && data.heroes.total_count > data.heroes.data.length

	return (
		<View title="Netguru Heroes" className={style.container}>
			<header className={style.header}>
				{loading && (
					<p className={style.loading}>
						<Loader />
						<span className={style.text}>Connecting to API...</span>
					</p>
				)}
				{error && (
					<p className={style.error}>
						<ErrorIcon className={style.icon} />
						<span className={style.text}>Can't connect to API – please try again later...</span>
					</p>
				)}
				{!(loading || error) && (
					<Button
						type="link"
						to="/add"
						color="green"
						autoWidth
						disabled={loading || error}
						>
						<span className={style.icon}>+</span>Add hero
					</Button>
				)}
				{!error && <Route path="/add" component={(props) => <Add handleRefetch={handleRefetch} {...props} />} />}
			</header>
			<main className={style.list}>
				<HeroList list={data ? data.heroes.data : []} fakeItem={3} />
				{visible && (
					<footer className={style.footer}>
						<Button onClick={handleLoadMore} children={"Load more"} />
					</footer>
				)}
				{!error && <Route path="/details/:id"  component={(props) => <Details handleRefetch={handleRefetch} {...props} />} />}
			</main>
		</View>
	)
}

export default Home