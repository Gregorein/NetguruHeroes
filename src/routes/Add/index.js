import React, {useState} from "react"
import Select from "react-select" // using deprecated API, watch https://github.com/JedWatson/react-select/issues/4094

import Modal from "components/Modal"
import LoaderImage from "components/LoaderImage"
import Button from "components/Button"

import style from "./style.module.scss"

const Add = () => {
  const [url, setUrl] = useState("")
  const [name, setName] = useState("")
  // const [type, setType] = useState(undefined)
  const [description, setDescription] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    console.log("handleSubmit")
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
          url={url}
          />
        <label
          className={style.label}
          htmlFor="avatar"
          children="Avatar URL"
          />
        <input 
          className={style.textInput}
          type="text"
          name="avatar"
          value={url}
          onChange={e => setUrl(e.target.value)}
          />

        <label
          className={style.label}
          htmlFor="name"
          children="Full name"
          />
        <input 
          className={style.textInput}
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          />

        <label
          className={style.label}
          htmlFor="type"
          children="Type"
          />
        <Select
          options={[1,2,3]}
          name="type"
          placeholder="Select type"
          />

        <label
          className={style.label}
          htmlFor="description"
          children="Description"
          />
        <textarea
          className={style.textArea}
          name="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
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