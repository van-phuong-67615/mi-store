'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useTranslation } from '@/i18n/use-translation'

export default function TopProducts() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const { t } = useTranslation()

  const products = [
    { id: 1, name: 'Product 1', category: 'Helen' },
    { id: 2, name: 'Product 2', category: 'Helen' },
    { id: 3, name: 'Product 3', category: 'Helen' },
    { id: 4, name: 'Product 4', category: 'Helen' },
    { id: 5, name: 'Product 5', category: 'Helen' },
    { id: 6, name: 'Product 6', category: 'Helen' },
  ]

  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="section-title mb-8">{t('section.topProducts.title')}</h2>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-4 md:gap-6 pb-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex-shrink-0 w-48 md:w-64 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg overflow-hidden group cursor-pointer"
                >
                  <div className="h-48 md:h-64 bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                    <div className="text-white text-4xl font-black opacity-20">◆</div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-400 text-xs mb-1">{product.category}</p>
                    <p className="text-white font-semibold text-sm">{product.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-700 hover:bg-gray-600 p-2 rounded-full hidden md:flex items-center justify-center">
            <ChevronRight size={20} className="text-white" />
          </button>
          <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-700 hover:bg-gray-600 p-2 rounded-full hidden md:flex items-center justify-center z-10">
            <ChevronLeft size={20} className="text-white" />
          </button>
        </div>
      </div>
    </section>
  )
}
