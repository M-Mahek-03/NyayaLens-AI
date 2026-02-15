"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">N</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-blue-900">NyayaLens AI</h1>
              <p className="text-xs text-gray-600">From Rights to Results</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/schemes" className="text-gray-700 hover:text-blue-900">Schemes</Link>
            <Link href="/dashboard" className="text-gray-700 hover:text-blue-900">Dashboard</Link>
            <Link href="/community" className="text-gray-700 hover:text-blue-900">Community</Link>
            <Link href="/login" className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800">Login</Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            <Link href="/schemes" className="block text-gray-700">Schemes</Link>
            <Link href="/dashboard" className="block text-gray-700">Dashboard</Link>
            <Link href="/community" className="block text-gray-700">Community</Link>
            <Link href="/login" className="block px-4 py-2 bg-blue-900 text-white rounded-lg text-center">Login</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
