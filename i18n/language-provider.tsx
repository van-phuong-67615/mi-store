'use client'

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { dictionary, type Language } from './dictionary'

type LanguageContextValue = {
  lang: Language
  setLang: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

const STORAGE_KEY = 'lang'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (typeof window === 'undefined') return
    const stored = window.localStorage.getItem(STORAGE_KEY) as Language | null
    if (stored === 'en' || stored === 'vi') {
      setLangState(stored)
    }
  }, [])

  const setLang = (next: Language) => {
    setLangState(next)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, next)
    }
  }

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang,
      t: (key: string) => {
        const table = dictionary[lang] || {}
        return table[key] ?? key
      },
    }),
    [lang],
  )

  // This prevents the "used outside provider" error during hydration
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguageContext() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguageContext must be used within LanguageProvider')
  return ctx
}
