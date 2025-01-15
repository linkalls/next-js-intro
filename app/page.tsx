"use client"

import { useState } from "react"

export default function Page() {
  const [count, setCount] = useState<number>(0)
  const handler = () => {
    setCount((prevCount) => prevCount + 1)
  }
  return (
    <div className="flex justify-center  items-center min-h-screen">
      <div className="text-center">
        <h1>Hello, Next.js!</h1>
        <p className="bg-indigo-50 text-right mr-2">hello p</p>
        <p>{count}</p>
        <button onClick={handler}>+</button>
      </div>
    </div>
  )
}
