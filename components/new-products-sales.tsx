'use client'

import { useTranslation } from '@/i18n/use-translation'

export default function NewProductsSales() {
  const { t } = useTranslation()

  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        {/* Two Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* New Products */}
          <div>
            <h2 className="section-title mb-6">{t('section.newProducts.title')}</h2>
            <div className="bg-gradient-to-br from-green-900 to-black rounded-lg p-8 h-64 flex items-center justify-center">
              <div className="text-center">
                <p className="text-yellow-400 font-black italic mb-2">
                  {t('section.newProducts.brand')}
                </p>
                <p className="text-2xl font-black text-white">
                  {t('section.newProducts.collection')}
                </p>
              </div>
            </div>
          </div>

          {/* Sales */}
          <div>
            <h2 className="section-title mb-6">{t('section.sales.title')}</h2>
            <div className="bg-gradient-to-br from-red-900 to-black rounded-lg p-8 h-64 flex flex-col items-center justify-center">
              <p className="text-5xl font-black text-yellow-400 mb-2">
                {t('section.sales.discount')}
              </p>
              <p className="text-white font-semibold">{t('section.sales.note')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
