"use client"

import { Card } from "@/components/Card"
import DashboardNavbar from "@/components/DashboardNavbar"
import Sidebar from "@/components/Sidebar"
import { User, Bell, Shield, Globe, Mail, Phone } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50">
      <DashboardNavbar />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-6 lg:p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
            <p className="text-gray-600">Manage your account and preferences</p>
          </div>

          <div className="max-w-4xl space-y-6">
            {/* Profile Settings */}
            <Card>
              <div className="flex items-center gap-3 mb-6">
                <User className="w-6 h-6 text-blue-900" />
                <h2 className="text-xl font-bold text-gray-900">Profile Information</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    defaultValue="Mahek Mukadam"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-1" /> Phone Number
                    </label>
                    <input
                      type="tel"
                      defaultValue="+91 98765 43210"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-1" /> Email
                    </label>
                    <input
                      type="email"
                      defaultValue="mahek@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <button className="px-6 py-3 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800">
                  Save Changes
                </button>
              </div>
            </Card>

            {/* Notification Settings */}
            <Card>
              <div className="flex items-center gap-3 mb-6">
                <Bell className="w-6 h-6 text-blue-900" />
                <h2 className="text-xl font-bold text-gray-900">Notifications</h2>
              </div>
              
              <div className="space-y-4">
                {[
                  { label: "Application Status Updates", checked: true },
                  { label: "New Scheme Recommendations", checked: true },
                  { label: "Document Verification Alerts", checked: true },
                  { label: "Community Alerts", checked: false },
                  { label: "Email Notifications", checked: true }
                ].map((item, i) => (
                  <label key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
                    <span className="text-gray-900 font-medium">{item.label}</span>
                    <input
                      type="checkbox"
                      defaultChecked={item.checked}
                      className="w-5 h-5 text-blue-900 rounded focus:ring-2 focus:ring-blue-900"
                    />
                  </label>
                ))}
              </div>
            </Card>

            {/* Language Settings */}
            <Card>
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-6 h-6 text-blue-900" />
                <h2 className="text-xl font-bold text-gray-900">Language Preference</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <button className="p-4 border-2 border-blue-900 bg-blue-50 text-blue-900 rounded-lg font-semibold">
                  English
                </button>
                <button className="p-4 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50">
                  हिंदी (Hindi)
                </button>
              </div>
            </Card>

            {/* Security */}
            <Card>
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-blue-900" />
                <h2 className="text-xl font-bold text-gray-900">Security</h2>
              </div>
              
              <div className="space-y-3">
                <button className="w-full p-4 text-left border border-gray-300 rounded-lg hover:bg-gray-50 font-medium text-gray-900">
                  Change Password
                </button>
                <button className="w-full p-4 text-left border border-gray-300 rounded-lg hover:bg-gray-50 font-medium text-gray-900">
                  Two-Factor Authentication
                </button>
                <button className="w-full p-4 text-left border border-red-300 rounded-lg hover:bg-red-50 font-medium text-red-600">
                  Delete Account
                </button>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
