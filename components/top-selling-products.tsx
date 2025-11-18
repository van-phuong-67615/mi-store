'use client'

import { useTranslation } from '@/i18n/use-translation'

export default function TopSellingProducts() {
  const { t } = useTranslation()

  const products = [
    {
      id: 1,
      name: 'XIAOMI MAX 24',
      quantity: '1,424,042',
      price: '₹7,090,099',
      icon: '①',
    },
    {
      id: 2,
      name: 'XIAOMI MAX 24',
      quantity: '1,424,042',
      price: '₹7,090,099',
      icon: '②',
    },
    {
      id: 3,
      name: 'XIAOMI MAX 24',
      quantity: '1,424,042',
      price: '₹7,090,099',
      icon: '③',
    },
    {
      id: 4,
      name: 'XIAOMI MAX 24',
      quantity: '1,424,042',
      price: '₹7,090,099',
      icon: '⚡',
    },
    {
      id: 5,
      name: 'XIAOMI MAX 24',
      quantity: '1,424,042',
      price: '₹7,090,099',
      icon: '⑤',
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="section-title mb-12">{t('section.topSelling.title')}</h2>

        {/* Table - Desktop */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-4 px-4 text-gray-400 font-semibold text-sm">{t('section.topSelling.no')}</th>
                <th className="text-left py-4 px-4 text-gray-400 font-semibold text-sm">{t('section.topSelling.products')}</th>
                <th className="text-left py-4 px-4 text-gray-400 font-semibold text-sm">{t('section.topSelling.quantity')}</th>
                <th className="text-left py-4 px-4 text-gray-400 font-semibold text-sm">{t('section.topSelling.price')}</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product.id} className="border-b border-gray-800 hover:bg-gray-900/50">
                  <td className="py-6 px-4">
                    <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-black font-black">
                      {product.icon}
                    </div>
                  </td>
                  <td className="py-6 px-4 text-white font-semibold">{product.name}</td>
                  <td className="py-6 px-4 text-gray-300">{product.quantity}</td>
                  <td className="py-6 px-4 text-yellow-400 font-black">{product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-900 p-4 rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black font-black text-xs">
                  {product.icon}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{product.name}</p>
                  <p className="text-gray-400 text-xs">{product.quantity}</p>
                </div>
              </div>
              <p className="text-yellow-400 font-black">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
