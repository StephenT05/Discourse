"use client"

import React from "react"

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>

export default function Button({ children, className = "btn", ...props }: Props) {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  )
}
