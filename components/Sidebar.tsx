"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, 
  Search, 
  FileText, 
  FileCheck, 
  AlertCircle, 
  Users, 
  Settings 
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/contexts/LanguageContext"
import { t } from "@/lib/i18n"

const menuItems = [
  { icon: LayoutDashboard, labelKey: "dashboardOverview", href: "/dashboard" },
  { icon: Search, labelKey: "schemeEligibility", href: "/schemes" },
  { icon: FileText, labelKey: "myApplications", href: "/applications" },
  { icon: FileCheck, labelKey: "documentGenerator", href: "/documents" },
  { icon: AlertCircle, labelKey: "rtiAppeals", href: "/rti" },
  { icon: Users, labelKey: "communityAlerts", href: "/community" },
  { icon: Settings, labelKey: "settings", href: "/settings" }
]

export default function Sidebar() {
  const pathname = usePathname()
  const { language } = useLanguage()

  return (
    <aside className="hidden lg:flex lg:flex-col lg:w-64 bg-white border-r border-gray-200 h-screen sticky top-0">
      <div className="flex-1 overflow-y-auto py-6">
        <nav className="px-3 space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-blue-50 text-blue-900 border-l-4 border-blue-900"
                    : "text-gray-700 hover:bg-gray-50 hover:text-blue-900"
                )}
              >
                <item.icon className="w-5 h-5" />
                {t(item.labelKey, language)}
              </Link>
            )
          })}
        </nav>
      </div>
      
      {/* AWS Badge */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs font-semibold text-gray-700">
            {t("awsSecured", language)}
          </span>
        </div>
      </div>
    </aside>
  )
}
