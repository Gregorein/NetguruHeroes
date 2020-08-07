import React, {
  useState,
  useEffect,
} from "react"
import Select from "react-select" // using deprecated API, watch https://github.com/JedWatson/react-select/issues/4094
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

const TextInput = ({name, label, value, onChange}) => (
  <>
    <label
      className={style.label}
      htmlFor={name}
      children={label}
      />
    <input 
      className={style.textInput}
      type="text"
      name={name}
      value={value}
      onChange={e => onChange(e.target.value)}
      />    
  </>
)
const SelectInput = ({name, label, onChange, ...otherProps}) => (
  <>
    <label
      className={style.label}
      htmlFor={name}
      children={label}
      />
    <Select
      className={style.selectInput}
      classNamePrefix="selectInput"
      name={name}
      onChange={e => onChange(e.value)}
      {...otherProps}
      />    
  </>
)
const TextArea = ({name, label, value, onChange}) => (
  <>
    <label
      className={style.label}
      htmlFor={name}
      children={label}
      />
    <textarea 
      className={style.textInput}
      type="text"
      name={name}
      value={value}
      onChange={e => onChange(e.target.value)}
      />    
  </>
)

const Add = () => {
  const [avatar_url, setAvatarUrl] = useState("")
  const [full_name, setFullName] = useState("")
  const [type_id, setType] = useState(undefined)
  const [types, setTypes] = useState([])
  const [description, setDescription] = useState("")

  const {data} = useQuery(TYPES, {
    fetchPolicy: "cache-and-network",
  })
  useEffect(() => {
    if (data) setTypes([...data.types])
  }, [data])

  const [addHero] = useMutation(ADD_HERO)
  const handleSubmit = e => {
    e.preventDefault()
    addHero({variables: {
      avatar_url,
      full_name,
      type_id,
      description
    }})
  }

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
          options={types}
          onChange={setType}
          placeholder="Select type"
          />

        <TextArea
          name="description"
          label="Description"
          value={description}
          onChange={setDescription}
          />

        <Button
          color="green"
          type="submit"
          children="Save"
          autoWidth
          />
      </form>
    </Modal>
  )
}

export default Add