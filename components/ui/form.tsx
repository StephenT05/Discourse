"use client"

import React from "react"

export function Form({ children, ...props }: React.FormHTMLAttributes<HTMLFormElement>) {
  return (
    <form {...props}>
      {children}
    </form>
  )
}

export function FormControl({ children }: { children: React.ReactNode }) {
  return <div className="form-control">{children}</div>
}

export function FormField({ name, children }: { name?: string; children: React.ReactNode }) {
  return <div data-field={name}>{children}</div>
}

export function FormItem({ children }: { children: React.ReactNode }) {
  return <div className="form-item">{children}</div>
}

export function FormLabel({ children }: { children: React.ReactNode }) {
  return <label className="form-label">{children}</label>
}

export function FormMessage({ children }: { children?: React.ReactNode }) {
  return <p className="form-message">{children}</p>
}

export default Form
