import en from './en.json'
import vi from './vi.json'

export type Language = 'en' | 'vi'

export const dictionary: Record<Language, Record<string, string>> = {
  en: en as Record<string, string>,
  vi: vi as Record<string, string>,
}
