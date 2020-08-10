import React, {useState} from "react"
import {useHistory} from "react-router-dom"
import {
  TextInput,
  SelectInput,
  TextArea,
} from "components/FormInputs"
import {
  useQuery,
  useMutation,
  gql,
} from "@apollo/client"

import Modal from "components/Modal"
import LoaderImage from "components/LoaderImage"
import Button from "components/Button"

import style from "./style.module.scss"

const TYPES = gql`
  query {
    types {
      value: id
      label: name
    }
  }
  `
const ADD_HERO = gql`
  mutation AddHero(
    $avatar_url: String!
    $full_name: String!
    $type_id: ID!
    $description: String!
  ) {
    createNewHero(
      avatar_url: $avatar_url,
      full_name: $full_name,
      type_id: $type_id
      description: $description
    ) {
      avatar_url
      full_name
      description
      type {
        id
      }
    }
  }
  `

const Add = ({handleRefetch}) => {
  const history = useHistory()
  const [avatar_url, setAvatarUrl] = useState("")
  const [full_name, setFullName] = useState("")
  const [type_id, setType] = useState(undefined)
  const [description, setDescription] = useState("")

  const {data} = useQuery(TYPES)

  const [addHero] = useMutation(ADD_HERO)
  const handleSubmit = (e) => {
    e.preventDefault()
    addHero({variables: {
      avatar_url,
      full_name,
      type_id,
      description
    }})
    handleRefetch()
    history.push("/")
  }
  const disabled = (
    avatar_url === "" ||
    full_name === "" ||
    type_id === undefined ||
    description === ""
  )

  return (
    <Modal
      returnTo="/"
      title="Add hero"
      >
      <form
        className={style.form}
        onSubmit={handleSubmit}
        >
        <LoaderImage
          className={style.avatar}
          url={avatar_url}
          />

        <TextInput
          name="avatar"
          label="Avatar URL"
          value={avatar_url}
          onChange={setAvatarUrl}
          />

        <TextInput
          name="full_name"
          label="Full name"
          value={full_name}
          onChange={setFullName}
          />

        <SelectInput
          name="type"
          label="Type"
          options={data ? data.types : []}
          value={type_id}
          onChange={setType}
          placeholder="Select type"
          />

        <TextArea
          name="description"
          label="Description"
          value={description}
          onChange={setDescription}
          />

        <footer className={style.actions}>
          <Button
            color="green"
            type="submit"
            children="Save"
            autoWidth
            disabled={disabled}
            />
        </footer>
      </form>
    </Modal>
  )
}

export default Add