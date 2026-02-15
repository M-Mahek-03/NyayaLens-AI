"use client"

import { Card } from "@/components/Card"
import Navbar from "@/components/Navbar"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { TrendingDown, AlertTriangle, Users } from "lucide-react"

const rejectionData = [
  { scheme: "PM Awas", rate: 45 },
  { scheme: "Ayushman", rate: 28 },
  { scheme: "Scholarship", rate: 35 },
  { scheme: "PM Kisan", rate: 18 }
]

const districtData = [
  { name: "Mumbai", value: 450 },
  { name: "Pune", value: 320 },
  { name: "Nagpur", value: 280 },
  { name: "Nashik", value: 210 }
]

const COLORS = ["#1E3A8A", "#3B82F6", "#60A5FA", "#93C5FD"]

const commonIssues = [
  { issue: "Missing income certificate", count: 234, trend: "up" },
  { issue: "Incomplete address proof", count: 189, trend: "down" },
  { issue: "Bank account mismatch", count: 156, trend: "up" },
  { issue: "Age eligibility confusion", count: 142, trend: "stable" }
]

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Community Insights</h1>
          <p className="text-gray-600">Learn from collective experiences and patterns</p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <div className="flex items-center gap-4">
              <Users className="w-12 h-12 text-blue-900" />
              <div>
                <div className="text-2xl font-bold text-gray-900">12,450</div>
                <div className="text-sm text-gray-600">Active Users</div>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-center gap-4">
              <TrendingDown className="w-12 h-12 text-green-600" />
              <div>
                <div className="text-2xl font-bold text-gray-900">32%</div>
                <div className="text-sm text-gray-600">Avg. Rejection Rate</div>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex items-center gap-4">
              <AlertTriangle className="w-12 h-12 text-amber-600" />
              <div>
                <div className="text-2xl font-bold text-gray-900">721</div>
                <div className="text-sm text-gray-600">Issues Reported</div>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Rejection Patterns */}
          <Card>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Rejection Patterns by Scheme</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={rejectionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="scheme" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="rate" fill="#1E3A8A" />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          {/* District Distribution */}
          <Card>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Applications by District</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={districtData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {districtData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Common Issues */}
        <Card>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Common Issues & Solutions</h2>
          <div className="space-y-4">
            {commonIssues.map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className={`w-2 h-2 rounded-full ${
                    item.trend === "up" ? "bg-red-500" : item.trend === "down" ? "bg-green-500" : "bg-gray-400"
                  }`}></div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.issue}</h3>
                    <p className="text-sm text-gray-600">{item.count} reports this month</p>
                  </div>
                </div>
                <button className="px-4 py-2 text-sm bg-blue-900 text-white rounded-lg hover:bg-blue-800">
                  View Solution
                </button>
              </div>
            ))}
          </div>
        </Card>

        {/* Escalation Box */}
        <Card className="mt-8 bg-amber-50 border-amber-200">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-8 h-8 text-amber-600 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Need Help with Your Application?</h3>
              <p className="text-gray-700 mb-4">
                If you're facing repeated rejections or unclear requirements, our community support team can help escalate your case.
              </p>
              <button className="px-6 py-2 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700">
                Request Escalation
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
