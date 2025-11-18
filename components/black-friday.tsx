'use client'

import { useTranslation } from '@/i18n/use-translation'

export default function BlackFriday() {
  const { t } = useTranslation()

  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="section-title mb-8">{t('section.blackFriday.title')}</h2>

        {/* Featured Banner */}
        <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-lg overflow-hidden p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <p className="text-yellow-400 font-black italic text-sm mb-2">
              {t('section.blackFriday.brand')}
            </p>
            <h3 className="text-3xl md:text-5xl font-black text-white mb-4">
              {t('section.blackFriday.product')}
            </h3>
            <p className="text-gray-300 mb-6">
              {t('section.blackFriday.description')}
            </p>
            <button className="btn-primary">{t('section.blackFriday.cta')}</button>
          </div>

          {/* Image Area */}
          <div className="flex-1 h-48 md:h-64 bg-gradient-to-br from-purple-800 to-black rounded flex items-center justify-center">
            <div className="text-6xl font-black text-purple-400 opacity-30">◆</div>
          </div>
        </div>
      </div>
    </section>
  )
}
