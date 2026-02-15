"use client"

import { Bell, User, Globe } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { t } from "@/lib/i18n"

export default function DashboardNavbar() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Title */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              {/* Logo */}
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-900 to-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">🔍</span>
                </div>
                <div>
                  <h1 className="text-lg font-bold text-blue-900">
                    {language === "hi" ? "न्यायलेंस" : "NyayaLens"} <span className="text-amber-500">{language === "hi" ? "एआई" : "AI"}</span>
                  </h1>
                  <p className="text-xs text-gray-600 font-medium -mt-1">
                    {language === "hi" ? "अधिकारों से परिणामों तक" : "From Rights to Results"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors border border-gray-200"
              aria-label={t("language", language)}
            >
              <Globe className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">
                {t("language", language)}
              </span>
            </button>

            {/* Notifications */}
            <button 
              className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label={t("notifications", language)}
            >
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* User Profile */}
            <button 
              className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label={t("profile", language)}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-900 to-indigo-600 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <span className="hidden sm:block text-sm font-medium text-gray-700">
                {language === "hi" ? "महेक" : "Mahek"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
