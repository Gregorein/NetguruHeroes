import React from "react"
import {useHistory} from "react-router-dom"
import {
	useQuery,
	useMutation,
	gql,
} from "@apollo/client"

import Modal from "components/Modal"
import Loader from "components/Loader"
import LoaderImage from "components/LoaderImage"

import TrashIcon from "icons/Trash"

import cn from "classnames"
import style from "./style.module.scss"

const ADD_HERO = gql`
	query Hero($id: ID!) {
	  hero: hero(id: $id) {
			avatar_url
	    full_name
	    type {
	      name
	    }
	    description
	  }
	}
	`
const DELETE_HERO = gql`
	mutation deleteHero($id: ID!) {
		deleteHero(id: $id) {
			id
		}
	}
	`

const Details = ({match, handleRefetch}) => {
  const history = useHistory()
	const {data} = useQuery(ADD_HERO, {
		variables: {
			id: match.params.id,
		},
	})
	const [deleteHero] = useMutation(DELETE_HERO)
	const handleDelete = () => {
		deleteHero({
			variables: {
				id: match.params.id,
			},
		})
		handleRefetch()
    history.push("/")
	}

	if (!data) return (
		<Modal returnTo="/">
			<div className={cn(style.container, style.center)}>
				<Loader />
			</div>
		</Modal>
	)

	const {
		avatar_url,
		full_name,
		type: {
			name,
		},
		description,
	} = data.hero

	return (
		<Modal returnTo="/">
			<div className={style.container}>
		    <LoaderImage
		      className={style.avatar}
		      url={avatar_url}
		      alt={`${full_name}'s avatar`}
		      />
		    <h2 className={style.name}>{full_name}</h2>
		    <h3 className={style.type}>{name}</h3>

		    <p className={style.description}>{description}</p>

		    <button
			    className={style.deleteAction}
			    onClick={handleDelete}
			    >
		    	<TrashIcon className={style.icon} />Delete hero
	    	</button>
		  </div>
		</Modal>
	)
}

export default Details