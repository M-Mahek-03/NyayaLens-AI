"use client"

import { Card } from "@/components/Card"
import { StatusBadge } from "@/components/StatusBadge"
import DashboardNavbar from "@/components/DashboardNavbar"
import Sidebar from "@/components/Sidebar"
import { FileText, Calendar, TrendingUp } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { t, formatCurrency, formatDate, toHindiNumerals } from "@/lib/i18n"

const applications = [
  { 
    id: 1, 
    schemeKey: "schemes.pmKisan",
    status: "approved" as const, 
    date: "2026-02-10", 
    amount: "₹6,000",
    categoryKey: "categories.agriculture",
    icon: "🌾"
  },
  { 
    id: 2, 
    schemeKey: "schemes.ayushman",
    status: "pending" as const, 
    date: "2026-02-12", 
    amount: "₹5,00,000",
    categoryKey: "categories.healthcare",
    icon: "🏥"
  },
  { 
    id: 3, 
    schemeKey: "schemes.sukanya",
    status: "in-progress" as const, 
    date: "2026-02-08", 
    amount: "₹1,50,000",
    categoryKey: "categories.womenWelfare",
    icon: "👧"
  },
  { 
    id: 4, 
    schemeKey: "schemes.pmAwas",
    status: "rejected" as const, 
    date: "2026-01-28", 
    amount: "₹2,50,000",
    categoryKey: "categories.housing",
    icon: "🏠"
  }
]

export default function ApplicationsPage() {
  const { language } = useLanguage()
  const displayNumber = (num: number) => language === "hi" ? toHindiNumerals(num) : num.toString()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50">
      <DashboardNavbar />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-6 lg:p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{t("myApplicationsTitle", language)}</h1>
            <p className="text-gray-600">{t("myApplicationsSubtitle", language)}</p>
          </div>

          {/* Summary Cards */}
          <div className="grid sm:grid-cols-4 gap-6 mb-8">
            <Card className="text-center">
              <div className="text-2xl font-bold text-blue-900 mb-1">{displayNumber(4)}</div>
              <p className="text-sm text-gray-600">{t("totalApplications", language)}</p>
            </Card>
            <Card className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">{displayNumber(1)}</div>
              <p className="text-sm text-gray-600">{t("approved", language)}</p>
            </Card>
            <Card className="text-center">
              <div className="text-2xl font-bold text-amber-600 mb-1">{displayNumber(2)}</div>
              <p className="text-sm text-gray-600">{t("inProgress", language)}</p>
            </Card>
            <Card className="text-center">
              <div className="text-2xl font-bold text-red-600 mb-1">{displayNumber(1)}</div>
              <p className="text-sm text-gray-600">{t("status.rejected", language)}</p>
            </Card>
          </div>

          {/* Applications List */}
          <div className="space-y-4">
            {applications.map((app) => (
              <Card key={app.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
                    {app.icon}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">{t(app.schemeKey, language)}</h3>
                        <span className="inline-block px-2 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded mt-1">
                          {t(app.categoryKey, language)}
                        </span>
                      </div>
                      <StatusBadge status={app.status} />
                    </div>
                    
                    <div className="grid sm:grid-cols-3 gap-4 mt-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <div>
                          <p className="text-xs text-gray-500">{t("appliedOn", language)}</p>
                          <p className="text-sm font-semibold text-gray-900">{formatDate(app.date, language)}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-gray-500" />
                        <div>
                          <p className="text-xs text-gray-500">{t("benefitAmount", language)}</p>
                          <p className="text-sm font-semibold text-green-600">{formatCurrency(app.amount, language)}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-gray-500" />
                        <div>
                          <p className="text-xs text-gray-500">{t("applicationId", language)}</p>
                          <p className="text-sm font-semibold text-gray-900">#{displayNumber(app.id)}2026</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100 flex gap-3">
                      <button className="px-4 py-2 bg-blue-900 text-white rounded-lg text-sm font-semibold hover:bg-blue-800">
                        {t("viewDetails", language)}
                      </button>
                      {app.status === "rejected" && (
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-50">
                          {t("reapply", language)}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
