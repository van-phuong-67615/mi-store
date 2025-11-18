import { useLanguageContext } from './language-provider'

export function useTranslation() {
  const { t, lang, setLang } = useLanguageContext()
  return { t, lang, setLang }
}
