"use client"

import React from "react"

// Minimal placeholder for Sonner Toaster wrapper used in components
export function Toaster() {
  return null
}

export function toast(message: string) {
  // noop placeholder
  console.log("toast:", message)
}

export default { Toaster, toast }
