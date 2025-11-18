'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { useTranslation } from '@/i18n/use-translation'

export default function IntroModal() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    setIsOpen(true)
  }, [])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-lg max-w-sm w-full relative overflow-hidden">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
        >
          <X size={24} />
        </button>

        {/* Image Area */}
        <div className="h-64 bg-gradient-to-br from-yellow-900 via-black to-black flex items-center justify-center relative">
          <div className="text-8xl font-black text-yellow-400 opacity-20">◆</div>
        </div>

        {/* Content */}
        <div className="p-8 text-center">
          <h2 className="text-2xl font-black text-white mb-2">
            {t('modal.title')}
          </h2>
          <p className="text-gray-400 text-sm mb-6">
            {t('modal.subtitle')}
          </p>
          <button className="btn-primary w-full">
            {t('modal.cta')}
          </button>
        </div>
      </div>
    </div>
  )
}
