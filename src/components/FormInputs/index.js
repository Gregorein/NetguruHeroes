import React, {
  useState,
  useEffect,
} from "react"
import Select from "react-select" // using deprecated API, watch https://github.com/JedWatson/react-select/issues/4094#issuecomment-651170749also

import {useDebounce} from "globals"

import cn from "classnames"
import style from "./style.module.scss"

const GenericInput = ({value, name, label, input: Input, onChange, ...otherProps}) => {
  const [error, setError] = useState(false)
  const [canDebounce, setCanDebounce] = useState(false)
  const debouncedValue = useDebounce(value, 200)
  useEffect(() => {
    if (!debouncedValue && canDebounce) {
      setError("This field cannot be empty")
    } else {
      setError(false)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps    
  }, [debouncedValue]) // ignoring exhaustive-deps, input will now wait until change comes from value prop
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

export const SelectInput = ({name, label, onChange, value, ...otherProps}) => {
  const [error, setError] = useState(false)
  const [canDebounce, setCanDebounce] = useState(false)
  const debouncedValue = useDebounce(value, 200)
  useEffect(() => {
    if (!debouncedValue && canDebounce) {
      setError("This field cannot be empty")
    } else {
      setError(false)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps    
  }, [debouncedValue]) // ignoring exhaustive-deps, input will now wait until change comes from value prop
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
      <Select
        className={cn(style.selectInput, {
          [style.error]: error,
        })}
        classNamePrefix="selectInput"
        name={name}
        onChange={e => onChange(e ? e.value : undefined)}
        onBlur={permitDebounce}
        isClearable
        {...otherProps}
        />
      {error && <p className={style.errorText}>{error}</p>}
    </div>
  )
}