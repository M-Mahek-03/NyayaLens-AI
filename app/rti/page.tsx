"use client"

import { Card } from "@/components/Card"
import DashboardNavbar from "@/components/DashboardNavbar"
import Sidebar from "@/components/Sidebar"
import { FileText, Send, Clock, CheckCircle } from "lucide-react"

const rtiApplications = [
  { 
    id: "RTI-2026-001", 
    subject: "Status of PM Awas Yojana Application", 
    department: "Housing & Urban Affairs",
    status: "responded",
    filedOn: "2026-01-25",
    responseOn: "2026-02-10"
  },
  { 
    id: "RTI-2026-002", 
    subject: "Reason for Scholarship Rejection", 
    department: "Education Department",
    status: "pending",
    filedOn: "2026-02-08",
    responseOn: null
  }
]

const appeals = [
  {
    id: "APL-2026-001",
    originalRTI: "RTI-2026-001",
    reason: "Incomplete information provided",
    status: "under-review",
    filedOn: "2026-02-12"
  }
]

export default function RTIPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50">
      <DashboardNavbar />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-6 lg:p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">RTI & Appeals</h1>
            <p className="text-gray-600">File RTI requests and track appeals for your applications</p>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-gradient-to-br from-blue-900 to-indigo-700 text-white border-0 cursor-pointer hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                  <FileText className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">File New RTI</h3>
                  <p className="text-blue-100 text-sm">Request information about your application</p>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-amber-500 to-orange-500 text-white border-0 cursor-pointer hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                  <Send className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">File Appeal</h3>
                  <p className="text-amber-100 text-sm">Appeal against rejection or delay</p>
                </div>
              </div>
            </Card>
          </div>

          {/* RTI Applications */}
          <Card className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Your RTI Applications</h2>
            <div className="space-y-4">
              {rtiApplications.map((rti) => (
                <div key={rti.id} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{rti.subject}</h3>
                      <p className="text-sm text-gray-600">{rti.department}</p>
                    </div>
                    {rti.status === "responded" ? (
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" /> Responded
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-semibold rounded-full flex items-center gap-1">
                        <Clock className="w-3 h-3" /> Pending
                      </span>
                    )}
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">RTI ID</p>
                      <p className="font-semibold text-gray-900">{rti.id}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Filed On</p>
                      <p className="font-semibold text-gray-900">{rti.filedOn}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Response Date</p>
                      <p className="font-semibold text-gray-900">{rti.responseOn || "Awaiting"}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200 flex gap-3">
                    <button className="px-4 py-2 bg-blue-900 text-white rounded-lg text-sm font-semibold hover:bg-blue-800">
                      View Details
                    </button>
                    {rti.status === "responded" && (
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-semibold hover:bg-gray-50">
                        Download Response
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Appeals */}
          <Card>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Your Appeals</h2>
            {appeals.length > 0 ? (
              <div className="space-y-4">
                {appeals.map((appeal) => (
                  <div key={appeal.id} className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">Appeal for {appeal.originalRTI}</h3>
                        <p className="text-sm text-gray-600">{appeal.reason}</p>
                      </div>
                      <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-semibold rounded-full">
                        Under Review
                      </span>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Appeal ID</p>
                        <p className="font-semibold text-gray-900">{appeal.id}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Filed On</p>
                        <p className="font-semibold text-gray-900">{appeal.filedOn}</p>
                      </div>
                    </div>
                    
                    <button className="mt-4 px-4 py-2 bg-amber-600 text-white rounded-lg text-sm font-semibold hover:bg-amber-700">
                      Track Appeal
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <p>No appeals filed yet</p>
              </div>
            )}
          </Card>
        </main>
      </div>
    </div>
  )
}
