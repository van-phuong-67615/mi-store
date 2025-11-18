'use client'

import { useState } from 'react'

const LANGUAGES = ['English', 'Spanish', 'French', 'German', 'Chinese', 'Japanese']

export default function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = useState('English')

  return (
    <div>
      <select
        value={selectedLanguage}
        onChange={(e) => setSelectedLanguage(e.target.value)}
        className={`
          px-3 py-2 md:px-4 md:py-2
          border border-gray-300
          bg-white text-gray-800
          rounded-sm
          text-sm md:text-base
          cursor-pointer
          hover:border-gray-400
          focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-0
          transition-colors
        `}
        aria-label="Select language"
      >
        {LANGUAGES.map((lang) => (
          <option key={lang} value={lang}>
            {lang}
          </option>
        ))}
      </select>
    </div>
  )
}
