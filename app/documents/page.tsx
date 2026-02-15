"use client"

import { Card } from "@/components/Card"
import DashboardNavbar from "@/components/DashboardNavbar"
import Sidebar from "@/components/Sidebar"
import { Upload, FileText, CheckCircle, AlertCircle, Download } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { t, formatDate, toHindiNumerals } from "@/lib/i18n"

const documents = [
  { nameKey: "aadhaar", status: "verified", uploadedOn: "2026-01-15", size: "2.3 MB" },
  { nameKey: "income", status: "verified", uploadedOn: "2026-01-20", size: "1.8 MB" },
  { nameKey: "bankPassbook", status: "pending", uploadedOn: null, size: null },
  { nameKey: "address", status: "verified", uploadedOn: "2026-01-18", size: "1.5 MB" },
  { nameKey: "caste", status: "rejected", uploadedOn: "2026-01-22", size: "2.1 MB" },
  { nameKey: "ration", status: "pending", uploadedOn: null, size: null }
]

const docNames: Record<string, { en: string; hi: string }> = {
  aadhaar: { en: "Aadhaar Card", hi: "आधार कार्ड" },
  income: { en: "Income Certificate", hi: "आय प्रमाण पत्र" },
  bankPassbook: { en: "Bank Passbook", hi: "बैंक पासबुक" },
  address: { en: "Address Proof", hi: "पता प्रमाण" },
  caste: { en: "Caste Certificate", hi: "जाति प्रमाण पत्र" },
  ration: { en: "Ration Card", hi: "राशन कार्ड" }
}

export default function DocumentsPage() {
  const { language } = useLanguage()
  const displayNumber = (num: number) => language === "hi" ? toHindiNumerals(num) : num.toString()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50">
      <DashboardNavbar />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-6 lg:p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{t("documentGeneratorTitle", language)}</h1>
            <p className="text-gray-600">{t("documentGeneratorSubtitle", language)}</p>
          </div>

          {/* Upload Area */}
          <Card className="mb-8 border-2 border-dashed border-blue-300 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="text-center py-8">
              <Upload className="w-16 h-16 text-blue-900 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">{t("uploadDocumentsTitle", language)}</h3>
              <p className="text-sm text-gray-600 mb-4">{t("dragDropText", language)}</p>
              <button className="px-6 py-3 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800">
                {t("chooseFiles", language)}
              </button>
              <p className="text-xs text-gray-500 mt-3">{t("supportedFormats", language)}</p>
            </div>
          </Card>

          {/* Document Status */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="text-center bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
              <CheckCircle className="w-10 h-10 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-900 mb-1">{displayNumber(3)}</div>
              <p className="text-sm text-gray-700">{t("verifiedDocuments", language)}</p>
            </Card>
            <Card className="text-center bg-gradient-to-br from-amber-50 to-yellow-50 border-amber-200">
              <AlertCircle className="w-10 h-10 text-amber-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-amber-900 mb-1">{displayNumber(2)}</div>
              <p className="text-sm text-gray-700">{t("pendingReview", language)}</p>
            </Card>
            <Card className="text-center bg-gradient-to-br from-red-50 to-rose-50 border-red-200">
              <AlertCircle className="w-10 h-10 text-red-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-red-900 mb-1">{displayNumber(1)}</div>
              <p className="text-sm text-gray-700">{t("needsReupload", language)}</p>
            </Card>
          </div>

          {/* Documents List */}
          <Card>
            <h2 className="text-xl font-bold text-gray-900 mb-6">{t("yourDocuments", language)}</h2>
            <div className="space-y-4">
              {documents.map((doc, i) => (
                <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      doc.status === "verified" ? "bg-green-100" :
                      doc.status === "pending" ? "bg-amber-100" :
                      "bg-red-100"
                    }`}>
                      <FileText className={`w-6 h-6 ${
                        doc.status === "verified" ? "text-green-600" :
                        doc.status === "pending" ? "text-amber-600" :
                        "text-red-600"
                      }`} />
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900">{docNames[doc.nameKey][language]}</h3>
                      <div className="flex items-center gap-3 mt-1">
                        {doc.uploadedOn && (
                          <span className="text-xs text-gray-600">
                            {t("uploaded", language)}: {formatDate(doc.uploadedOn, language)}
                          </span>
                        )}
                        {doc.size && (
                          <span className="text-xs text-gray-600">• {doc.size}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    {doc.status === "verified" && (
                      <>
                        <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" /> {t("verified", language)}
                        </span>
                        <button className="p-2 hover:bg-gray-200 rounded-lg" aria-label={t("download", language)}>
                          <Download className="w-4 h-4 text-gray-600" />
                        </button>
                      </>
                    )}
                    {doc.status === "pending" && (
                      <button className="px-4 py-2 bg-blue-900 text-white rounded-lg text-sm font-semibold hover:bg-blue-800">
                        {t("upload", language)}
                      </button>
                    )}
                    {doc.status === "rejected" && (
                      <>
                        <span className="px-3 py-1 bg-red-100 text-red-800 text-xs font-semibold rounded-full">
                          {t("rejected", language)}
                        </span>
                        <button className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-semibold hover:bg-red-700">
                          {t("reupload", language)}
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </main>
      </div>
    </div>
  )
}
