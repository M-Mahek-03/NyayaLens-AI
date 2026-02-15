"use client"

import { Card } from "@/components/Card"
import { StatusBadge } from "@/components/StatusBadge"
import Navbar from "@/components/Navbar"
import { CheckCircle2, Circle, Clock, FileText, Download, Upload } from "lucide-react"

const timeline = [
  { step: "Application Submitted", date: "Feb 12, 2026", completed: true },
  { step: "Document Verification", date: "Feb 13, 2026", completed: true },
  { step: "Under Review", date: "In Progress", completed: false },
  { step: "Final Approval", date: "Pending", completed: false }
]

const documents = [
  { name: "Aadhaar Card", status: "uploaded", required: true },
  { name: "Income Certificate", status: "uploaded", required: true },
  { name: "Bank Passbook", status: "pending", required: true },
  { name: "Address Proof", status: "uploaded", required: false }
]

const actionPlan = [
  { action: "Upload bank passbook copy", priority: "high", deadline: "Feb 16, 2026" },
  { action: "Verify mobile number", priority: "medium", deadline: "Feb 18, 2026" },
  { action: "Check application status", priority: "low", deadline: "Feb 20, 2026" }
]

export default function ApplicationDetailPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Ayushman Bharat Application</h1>
              <p className="text-gray-600">Application ID: #AB-2026-45678</p>
            </div>
            <StatusBadge status="pending" />
          </div>
          <div className="flex items-center gap-6 text-sm">
            <div>
              <span className="text-gray-600">Applied on:</span>
              <span className="font-semibold ml-2">Feb 12, 2026</span>
            </div>
            <div>
              <span className="text-gray-600">Benefit Amount:</span>
              <span className="font-semibold ml-2 text-green-600">₹5,00,000</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-600" />
              <span className="font-semibold text-amber-600">3 days until deadline</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Timeline */}
            <Card>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Application Timeline</h2>
              <div className="space-y-6">
                {timeline.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      {item.completed ? (
                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                      ) : (
                        <Circle className="w-6 h-6 text-gray-300" />
                      )}
                      {i < timeline.length - 1 && (
                        <div className={`w-0.5 h-12 ${item.completed ? "bg-green-600" : "bg-gray-300"}`}></div>
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <h3 className={`font-semibold ${item.completed ? "text-gray-900" : "text-gray-500"}`}>
                        {item.step}
                      </h3>
                      <p className="text-sm text-gray-600">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Documents */}
            <Card>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Document Checklist</h2>
              <div className="space-y-3">
                {documents.map((doc, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-gray-600" />
                      <div>
                        <h3 className="font-semibold text-gray-900">{doc.name}</h3>
                        {doc.required && <span className="text-xs text-red-600">Required</span>}
                      </div>
                    </div>
                    {doc.status === "uploaded" ? (
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                        <span className="text-sm text-green-600 font-medium">Uploaded</span>
                      </div>
                    ) : (
                      <button className="px-4 py-2 bg-blue-900 text-white rounded-lg text-sm font-semibold hover:bg-blue-800 flex items-center gap-2">
                        <Upload className="w-4 h-4" /> Upload
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Action Plan */}
            <Card>
              <h2 className="text-lg font-bold text-gray-900 mb-4">Action Plan</h2>
              <div className="space-y-3">
                {actionPlan.map((item, i) => (
                  <div key={i} className={`p-3 rounded-lg ${
                    item.priority === "high" ? "bg-red-50 border border-red-200" :
                    item.priority === "medium" ? "bg-amber-50 border border-amber-200" :
                    "bg-blue-50 border border-blue-200"
                  }`}>
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="text-sm font-semibold text-gray-900">{item.action}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded ${
                        item.priority === "high" ? "bg-red-200 text-red-800" :
                        item.priority === "medium" ? "bg-amber-200 text-amber-800" :
                        "bg-blue-200 text-blue-800"
                      }`}>
                        {item.priority}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600">Due: {item.deadline}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Actions */}
            <Card>
              <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h2>
              <div className="space-y-2">
                <button className="w-full py-2 px-4 bg-blue-900 text-white rounded-lg text-sm font-semibold hover:bg-blue-800 flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" /> Download Letter
                </button>
                <button className="w-full py-2 px-4 border border-gray-300 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-50">
                  Contact Support
                </button>
                <button className="w-full py-2 px-4 border border-gray-300 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-50">
                  Share Status
                </button>
              </div>
            </Card>

            {/* AI Tip */}
            <Card className="bg-indigo-50 border-indigo-200">
              <h3 className="font-semibold text-indigo-900 mb-2">💡 AI Tip</h3>
              <p className="text-sm text-indigo-800">
                Applications with complete bank details are approved 40% faster. Upload your passbook today!
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
