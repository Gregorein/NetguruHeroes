import React from "react"
import {createPortal} from "react-dom"
import {Link} from "react-router-dom"


import style from "./style.module.scss"

const Modal = ({returnTo="/", title, children}) => createPortal(
  <div className={style.container}>
    <div className={style.modal}>
      {title && <h2 className={style.title}>{title}</h2>}
      <Link
        className={style.close}
        to={returnTo}
        >
        &times;
      </Link>
      <div className={style.body}>
        {children}
      </div>
    </div>
  </div>,
  document.getElementById("modal_root"),
)

export default Modal