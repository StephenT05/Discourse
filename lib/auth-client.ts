"use client"

import { useState, useEffect } from "react"

type Session = { user: { id: string; name?: string } } | null

export function useSession() {
  const [data, setData] = useState<Session>(null)

  useEffect(() => {
    try {
      // @ts-ignore
      const s = typeof window !== "undefined" ? (window as any).__NEXT_AUTH_SESSION : null
      setData(s || null)
    } catch (e) {
      setData(null)
    }
  }, [])

  return { data }
}

const authClient = { useSession }
export default authClient
