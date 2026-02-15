"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Card } from "@/components/Card"

export default function LoginPage() {
  const [phone, setPhone] = useState("")
  const [otp, setOtp] = useState("")
  const [step, setStep] = useState<"phone" | "otp">("phone")
  const router = useRouter()

  const handleSendOTP = (e: React.FormEvent) => {
    e.preventDefault()
    setStep("otp")
  }

  const handleVerifyOTP = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-blue-900 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Login to access your dashboard</p>
        </div>

        {step === "phone" ? (
          <form onSubmit={handleSendOTP} className="space-y-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98765 43210"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800"
            >
              Send OTP
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerifyOTP} className="space-y-4">
            <div>
              <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-2">
                Enter OTP
              </label>
              <input
                id="otp"
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="6-digit code"
                maxLength={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent text-center text-2xl tracking-widest"
                required
              />
              <p className="text-sm text-gray-600 mt-2">Sent to {phone}</p>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800"
            >
              Verify & Login
            </button>
            <button
              type="button"
              onClick={() => setStep("phone")}
              className="w-full text-sm text-blue-900 hover:underline"
            >
              Change phone number
            </button>
          </form>
        )}

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link href="/signup" className="text-blue-900 font-semibold hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </Card>
    </div>
  )
}
