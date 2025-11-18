'use client'

import { useState } from 'react'

export default function BeginButton() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`
        px-10 py-3 md:px-12 md:py-3
        bg-amber-400 hover:bg-amber-500
        text-black font-semibold text-base md:text-lg
        transition-colors duration-200
        flex items-center gap-2
        rounded-none
        active:scale-95 transform transition-transform
      `}
      aria-label="Begin security verification"
    >
      Begin
      <span className={`text-lg transition-transform duration-200 ${isHovered ? 'translate-x-1' : ''}`}>
        {'›'}
      </span>
    </button>
  )
}
