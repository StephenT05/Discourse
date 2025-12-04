"use client"

import { useEffect, useState } from "react"
import { Toaster } from "sonner"

export function Sonner() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <Toaster
      position={isMobile ? "top-center" : "bottom-right"}
      richColors
      closeButton
      expand
    />
  )
}
