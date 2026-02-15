"use client"

import { ArrowRight } from "lucide-react"
import { Card } from "./Card"
import { useLanguage } from "@/contexts/LanguageContext"
import { t, formatCurrency } from "@/lib/i18n"

interface SchemeCardProps {
  icon: string
  name: string
  description: string
  eligible: boolean
  category: string
  benefit: string
}

export function SchemeCard({ icon, name, description, eligible, category, benefit }: SchemeCardProps) {
  const { language } = useLanguage()
  
  return (
    <Card className="hover:shadow-lg transition-all duration-300 group">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <h3 className="font-bold text-gray-900 text-lg leading-tight">{name}</h3>
            {eligible ? (
              <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full whitespace-nowrap">
                ✓ {t("eligible", language)}
              </span>
            ) : (
              <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full whitespace-nowrap">
                {t("notEligible", language)}
              </span>
            )}
          </div>
          <span className="inline-block px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded mb-2">
            {category}
          </span>
        </div>
      </div>
      
      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{description}</p>
      
      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <div>
          <p className="text-xs text-gray-500">{t("benefit", language)}</p>
          <p className="text-sm font-bold text-green-600">{formatCurrency(benefit, language)}</p>
        </div>
        {eligible && (
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-900 text-white rounded-lg text-sm font-semibold hover:bg-blue-800 transition-colors group-hover:gap-3">
            {t("applyNow", language)} <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </Card>
  )
}
