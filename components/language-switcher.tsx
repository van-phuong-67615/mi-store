'use client'

import { useTranslation } from '@/i18n/use-translation'

export default function LanguageSwitcher() {
  const { lang, setLang } = useTranslation()

  const isActive = (code: 'en' | 'vi') =>
    lang === code ? 'font-semibold text-white' : 'text-gray-400'

  const baseBtn =
    'px-2 text-xs uppercase tracking-wide transition-colors hover:text-white'

  return (
    <div className="flex items-center gap-1">
      <button
        type="button"
        className={`${baseBtn} ${isActive('en')}`}
        onClick={() => setLang('en')}
      >
        EN
      </button>
      <span className="text-gray-500">/</span>
      <button
        type="button"
        className={`${baseBtn} ${isActive('vi')}`}
        onClick={() => setLang('vi')}
      >
        VI
      </button>
    </div>
  )
}
