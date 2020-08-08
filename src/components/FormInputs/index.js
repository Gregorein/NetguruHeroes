import React, {
  useState,
  useEffect,
} from "react"
import Select from "react-select" // using deprecated API, watch https://github.com/JedWatson/

import {useDebounce} from "globals"

import cn from "classnames"
import style from "./style.module.scss"

const GenericInput = ({value, name, label, input: Input, onChange, ...otherProps}) => {
  const [error, setError] = useState(false)
  const [canDebounce, setCanDebounce] = useState(false)
  const debouncedValue = useDebounce(value, 500)
  useEffect(() => {
    if (!debouncedValue && canDebounce) {
      setError("This field cannot be empty")
    } else {
      setError(false)
    }
  }, [debouncedValue])
  const permitDebounce = () => setCanDebounce(true)

  return (
    <div className={style.input}>
      <label
        className={cn(style.label, {
          [style.error]: error,
        })}
        htmlFor={name}
        children={label}
        />
      <Input
        error={error}
        name={name}
        value={value}
        onChange={onChange}
        onClick={permitDebounce}
        {...otherProps}
        />
      {error && <p className={style.errorText}>{error}</p>}
    </div>
  )
}

const RawTextInput = ({error, name, value, onChange, onClick}) => (
  <input
    className={cn(style.textInput, {
      [style.error]: error,
    })}
    type="text"
    name={name}
    value={value}
    onChange={e => onChange(e.target.value)}
    onClick={onClick}
    />
)
export const TextInput = ({name, label, value, onChange}) => (
  <GenericInput
    value={value}
    name={name}
    label={label}
    onChange={onChange}
    input={RawTextInput}
    />
)

const RawTextArea = ({error, name, label, value, onChange, onClick}) => (
  <textarea 
    className={cn(style.textArea, {
      [style.error]: error,
    })}
    type="text"
    name={name}
    value={value}
    onChange={e => onChange(e.target.value)}
    onClick={onClick}
    />
)
export const TextArea = ({name, label, value, onChange}) => (
  <GenericInput
    value={value}
    name={name}
    label={label}
    onChange={onChange}
    input={RawTextArea}
    />
)

export const SelectInput = ({name, label, onChange, ...otherProps}) => (
  <div className={style.input}>
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
  </div>
)