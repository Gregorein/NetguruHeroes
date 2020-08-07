import React from "react"

import View from "components/View"
import Button from "components/Button"

import style from "./style.module.scss"

const Page404 = () => (
  <View
    className={style.view}
    title="NetguruHeroes | 404"
    >
    <h1 className={style.title}>OOPS!</h1>

    <p className={style.description}>
      We can't find the page you're looking for.
    </p>

    <Button
      type="link"
      to="/"
      children="Visit homepage"
      bordered
      autoWidth
      />
  </View>
)

export default Page404