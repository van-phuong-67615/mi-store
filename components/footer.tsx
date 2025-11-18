'use client'

import { Mail, Shield } from 'lucide-react'
import { useTranslation } from '@/i18n/use-translation'

export default function Footer() {
  const { t } = useTranslation()

  const footerSections = [
    {
      title: t('footer.about'),
      links: t('footer.aboutLinks').split(','),
    },
    {
      title: t('footer.products'),
      links: t('footer.productsLinks').split(','),
    },
    {
      title: t('footer.help'),
      links: t('footer.helpLinks').split(','),
    },
    {
      title: t('footer.contact'),
      links: t('footer.contactLinks').split(','),
    },
  ]

  return (
    <footer className="bg-black border-t border-gray-800 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-black text-sm mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.trim()}>
                    <a href="#" className="text-gray-400 text-sm hover:text-yellow-400 transition-colors">
                      {link.trim()}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Security & Downloads */}
        <div className="py-8 border-t border-gray-800 space-y-6">
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <Shield size={16} />
            <span>{t('footer.warranty')}</span>
          </div>
          <div className="text-xs text-gray-500 leading-relaxed">
            {t('footer.warranty2')}
          </div>
          <div className="bg-gray-900 px-4 py-3 rounded-lg inline-block">
            <button className="flex items-center gap-2 text-white font-semibold text-sm hover:text-yellow-400">
              📱 {t('footer.installApp')}
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
            <p className="text-gray-500 text-xs">{t('footer.copyright')}</p>
            <div className="flex gap-4">
              <span className="text-gray-400 text-sm">💳 VISA</span>
              <span className="text-gray-400 text-sm">🔴 Mastercard</span>
              <span className="text-gray-400 text-sm">🔘 AstroPay</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
