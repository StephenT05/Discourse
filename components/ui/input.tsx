"use client"

import React from "react"

type Props = React.InputHTMLAttributes<HTMLInputElement>

const Input = React.forwardRef<HTMLInputElement, Props>(function Input(props, ref) {
  return <input ref={ref} {...props} className={props.className ?? "input"} />
})

export default Input
