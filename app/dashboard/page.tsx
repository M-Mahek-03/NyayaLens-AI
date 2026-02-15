"use client"

import { Card } from "@/components/Card"
import { StatusBadge } from "@/components/StatusBadge"
import { ProgressCircle } from "@/components/ProgressCircle"
import { SchemeCard } from "@/components/SchemeCard"
import { AIInsightCard } from "@/components/AIInsightCard"
import DashboardNavbar from "@/components/DashboardNavbar"
import Sidebar from "@/components/Sidebar"
import { TrendingUp, FileText, Users } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { t, formatCurrency, formatDate, toHindiNumerals } from "@/lib/i18n"

export default function DashboardPage() {
  const { language } = useLanguage()
  const currentHour = new Date().getHours()
  const greetingKey = currentHour < 12 ? "morning" : currentHour < 18 ? "afternoon" : "evening"

  const eligibleSchemes = [
    { 
      icon: "🌾", 
      name: t("schemes.pmKisan", language), 
      description: t("schemes.pmKisanDesc", language),
      eligible: true,
      category: t("categories.agriculture", language),
      benefit: "₹6,000/year"
    },
    { 
      icon: "🏥", 
      name: t("schemes.ayushman", language), 
      description: t("schemes.ayushmanDesc", language),
      eligible: true,
      category: t("categories.healthcare", language),
      benefit: "₹5 lakh cover"
    },
    { 
      icon: "🏠", 
      name: t("schemes.pmAwas", language), 
      description: t("schemes.pmAwasDesc", language),
      eligible: true,
      category: t("categories.housing", language),
      benefit: "₹2.5 lakh subsidy"
    },
    { 
      icon: "👩‍🎓", 
      name: t("schemes.scholarship", language), 
      description: t("schemes.scholarshipDesc", language),
      eligible: false,
      category: t("categories.education", language),
      benefit: "₹50,000/year"
    }
  ]

  const applications = [
    { id: 1, scheme: t("schemes.pmKisan", language), status: "approved" as const, date: "2026-02-10", progress: 100 },
    { id: 2, scheme: t("schemes.ayushman", language), status: "pending" as const, date: "2026-02-12", progress: 65 },
    { id: 3, scheme: t("schemes.sukanya", language), status: "in-progress" as const, date: "2026-02-08", progress: 45 }
  ]

  const displayNumber = (num: number) => language === "hi" ? toHindiNumerals(num) : num.toString()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50">
      <DashboardNavbar />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-6 lg:p-8">
          {/* Welcome Header */}
          <div className="mb-8 animate-fade-in">
            <h1 className="text-3xl font-bold text-gray-900 mb-1">
              {t(`greeting.${greetingKey}`, language)}, {language === "hi" ? "महेक" : "Mahek"}
            </h1>
            <p className="text-gray-600">{t("dashboardSubtitle", language)}</p>
          </div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-blue-900 to-blue-700 text-white border-0">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm mb-1">{t("eligibleSchemes", language)}</p>
                  <div className="text-3xl font-bold">{displayNumber(12)}</div>
                </div>
                <TrendingUp className="w-12 h-12 text-blue-300 opacity-80" />
              </div>
            </Card>
            
            <Card className="bg-gradient-to-br from-green-600 to-green-500 text-white border-0">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm mb-1">{t("approved", language)}</p>
                  <div className="text-3xl font-bold">{displayNumber(1)}</div>
                </div>
                <FileText className="w-12 h-12 text-green-300 opacity-80" />
              </div>
            </Card>
            
            <Card className="bg-gradient-to-br from-amber-500 to-amber-400 text-white border-0">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-amber-100 text-sm mb-1">{t("inProgress", language)}</p>
                  <div className="text-3xl font-bold">{displayNumber(2)}</div>
                </div>
                <FileText className="w-12 h-12 text-amber-200 opacity-80" />
              </div>
            </Card>
            
            <Card className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white border-0">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-indigo-100 text-sm mb-1">{t("potentialBenefits", language)}</p>
                  <div className="text-2xl font-bold">{formatCurrency("₹6.5L", language)}</div>
                </div>
                <TrendingUp className="w-12 h-12 text-indigo-300 opacity-80" />
              </div>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Eligible Schemes Section */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">{t("eligibleGovernmentSchemes", language)}</h2>
                  <button className="text-sm text-blue-900 font-semibold hover:underline">
                    {t("viewAll", language)} →
                  </button>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {eligibleSchemes.map((scheme, i) => (
                    <SchemeCard key={i} {...scheme} />
                  ))}
                </div>
              </div>

              {/* Application Status Section */}
              <Card>
                <h2 className="text-xl font-bold text-gray-900 mb-6">{t("applicationStatus", language)}</h2>
                <div className="space-y-6">
                  {applications.map((app) => (
                    <div key={app.id} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <FileText className="text-blue-900 w-5 h-5" />
                          <div>
                            <h3 className="font-semibold text-gray-900">{app.scheme}</h3>
                            <p className="text-xs text-gray-600">
                              {t("appliedOn", language)} {formatDate(app.date, language)}
                            </p>
                          </div>
                        </div>
                        <StatusBadge status={app.status} />
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-gray-600">{t("progress", language)}</span>
                          <span className="font-semibold text-gray-900">{displayNumber(app.progress)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-blue-900 to-indigo-600 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${app.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      {/* AI Approval Probability */}
                      {app.status === "pending" && (
                        <div className="flex items-center gap-2 p-3 bg-green-50 rounded-lg border border-green-200">
                          <div className="flex-1">
                            <p className="text-sm font-semibold text-green-900">{t("aiApprovalPrediction", language)}</p>
                            <p className="text-xs text-green-700">{t("highProbability", language)}</p>
                          </div>
                          <div className="text-2xl font-bold text-green-600">{displayNumber(87)}%</div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* AI Insights Section */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">{t("aiInsights", language)}</h2>
                <div className="space-y-4">
                  <AIInsightCard
                    type="recommendation"
                    title={t("personalizedRecommendation", language)}
                    description={`${t("recommendationDesc", language)} ${formatCurrency("₹8.5 lakhs", language)}`}
                    action={t("exploreSchemes", language)}
                  />
                  
                  <AIInsightCard
                    type="document"
                    title={t("suggestedDocuments", language)}
                    description={t("documentsDesc", language)}
                    action={t("uploadNow", language)}
                  />
                  
                  <AIInsightCard
                    type="risk"
                    title={t("riskAlert", language)}
                    description={t("riskDesc", language)}
                    action={t("fixNow", language)}
                  />
                </div>
              </div>

              {/* Community Escalation */}
              <Card className="bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">{t("communityEscalation", language)}</h3>
                    <p className="text-sm text-gray-700 mb-3">
                      {displayNumber(23)} {t("communityDesc", language)}
                    </p>
                    <button className="w-full py-2 px-4 bg-red-600 text-white rounded-lg text-sm font-semibold hover:bg-red-700">
                      {t("joinGroupAppeal", language)}
                    </button>
                  </div>
                </div>
              </Card>

              {/* Document Upload Indicator */}
              <Card>
                <h3 className="font-semibold text-gray-900 mb-4">{t("documentStatus", language)}</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">
                      {language === "hi" ? "आधार कार्ड" : "Aadhaar Card"}
                    </span>
                    <span className="text-xs text-green-600 font-semibold">✓ {t("verified", language)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">
                      {language === "hi" ? "आय प्रमाण पत्र" : "Income Certificate"}
                    </span>
                    <span className="text-xs text-green-600 font-semibold">✓ {t("verified", language)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">
                      {language === "hi" ? "बैंक पासबुक" : "Bank Passbook"}
                    </span>
                    <span className="text-xs text-amber-600 font-semibold">⚠ {t("pending", language)}</span>
                  </div>
                  <button className="w-full mt-2 py-2 px-4 border-2 border-blue-900 text-blue-900 rounded-lg text-sm font-semibold hover:bg-blue-50">
                    {t("uploadDocuments", language)}
                  </button>
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
