'use client'
import { useState, useEffect } from 'react'
import { format } from 'date-fns'

export function useTime(formatString: string = 'hh:mm:ss') {
  const [time, setTime] = useState<string>('')

  useEffect(() => {
    // Set initial time
    setTime(format(new Date(), formatString))

    // Update every second
    const interval = setInterval(() => {
      setTime(format(new Date(), formatString))
    }, 1000)

    return () => clearInterval(interval)
  }, [formatString])

  return time
}