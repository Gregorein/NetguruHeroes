import React from "react"
import {
	useQuery,
	gql,
} from "@apollo/client"

import style from "./style.module.scss"

import Modal from "components/Modal"
import LoaderImage from "components/LoaderImage"



const Details = () => {
	const {data} = useQuery(HERO)

	return (
		<Modal returnTo="/">
	    <LoaderImage
	      className={style.avatar}
	      url={avatar_url}
	      alt={`${full_name}'s avatar`}
	      />

		</Modal>
	)
}

export default Details