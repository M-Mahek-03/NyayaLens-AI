"use client"

import { Sparkles, AlertTriangle, FileCheck } from "lucide-react"
import { Card } from "./Card"
import { useLanguage } from "@/contexts/LanguageContext"

interface AIInsightCardProps {
  type: "recommendation" | "document" | "risk"
  title: string
  description: string
  action?: string
}

export function AIInsightCard({ type, title, description, action }: AIInsightCardProps) {
  const { language } = useLanguage()
  
  const config = {
    recommendation: {
      icon: Sparkles,
      bgColor: "bg-gradient-to-br from-indigo-50 to-purple-50",
      iconColor: "text-indigo-600",
      borderColor: "border-indigo-200"
    },
    document: {
      icon: FileCheck,
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200"
    },
    risk: {
      icon: AlertTriangle,
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
      iconColor: "text-amber-600",
      borderColor: "border-amber-200"
    }
  }

  const { icon: Icon, bgColor, iconColor, borderColor } = config[type]

  return (
    <Card className={`${bgColor} border ${borderColor}`}>
      <div className="flex items-start gap-3">
        <div className={`p-2 bg-white rounded-lg ${iconColor}`}>
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
          <p className="text-sm text-gray-700 mb-3">{description}</p>
          {action && (
            <button className="text-sm font-semibold text-blue-900 hover:underline">
              {action} →
            </button>
          )}
        </div>
      </div>
    </Card>
  )
}
