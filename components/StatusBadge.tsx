"use client"

import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/LanguageContext"
import { t } from "@/lib/i18n"

type Status = "pending" | "approved" | "rejected" | "in-progress"

interface StatusBadgeProps {
  status: Status
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const { language } = useLanguage()
  
  const styles = {
    pending: "bg-amber-100 text-amber-800",
    approved: "bg-green-100 text-green-800",
    rejected: "bg-red-100 text-red-800",
    "in-progress": "bg-blue-100 text-blue-800"
  }

  const statusKey = status === "in-progress" ? "inProgress" : status

  return (
    <span className={cn("px-3 py-1 rounded-full text-xs font-medium", styles[status])}>
      {t(`status.${statusKey}`, language)}
    </span>
  )
}
