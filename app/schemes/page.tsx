"use client"

import { useState } from "react"
import { Card } from "@/components/Card"
import Navbar from "@/components/Navbar"
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react"

const questions = [
  { id: 1, question: "What is your age?", type: "number", placeholder: "Enter your age" },
  { id: 2, question: "What is your annual family income?", type: "select", options: ["Below ₹1 lakh", "₹1-3 lakhs", "₹3-5 lakhs", "Above ₹5 lakhs"] },
  { id: 3, question: "Do you belong to SC/ST/OBC category?", type: "select", options: ["General", "SC", "ST", "OBC"] },
  { id: 4, question: "Are you a farmer or agricultural worker?", type: "select", options: ["Yes", "No"] },
  { id: 5, question: "Do you have a BPL card?", type: "select", options: ["Yes", "No"] }
]

const schemes = [
  { name: "PM Kisan Samman Nidhi", match: 95, benefit: "₹6,000/year", category: "Agriculture" },
  { name: "Ayushman Bharat", match: 88, benefit: "₹5 lakh health cover", category: "Healthcare" },
  { name: "Pradhan Mantri Awas Yojana", match: 82, benefit: "₹2.5 lakh subsidy", category: "Housing" },
  { name: "National Scholarship Portal", match: 78, benefit: "₹50,000/year", category: "Education" }
]

export default function SchemesPage() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)

  const currentQuestion = questions[step]
  const progress = ((step + 1) / questions.length) * 100

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1)
    } else {
      setShowResults(true)
    }
  }

  const handleBack = () => {
    if (step > 0) setStep(step - 1)
  }

  if (showResults) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-5xl mx-auto px-4 py-8">
          <div className="text-center mb-8 animate-fade-in">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">We Found {schemes.length} Schemes For You!</h1>
            <p className="text-gray-600">Based on your profile, here are your best matches</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {schemes.map((scheme, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{scheme.name}</h3>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">{scheme.category}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-900">{scheme.match}%</div>
                    <div className="text-xs text-gray-600">Match</div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="text-sm text-gray-600 mb-1">Benefit Amount</div>
                  <div className="text-xl font-semibold text-green-600">{scheme.benefit}</div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div className="bg-blue-900 h-2 rounded-full" style={{ width: `${scheme.match}%` }}></div>
                </div>
                <button className="w-full py-2 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800">
                  Apply Now
                </button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navbar />
      
      <div className="max-w-2xl mx-auto px-4 py-12">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Question {step + 1} of {questions.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-900 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <Card className="animate-fade-in">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{currentQuestion.question}</h2>
          
          {currentQuestion.type === "number" && (
            <input
              type="number"
              placeholder={currentQuestion.placeholder}
              value={answers[currentQuestion.id] || ""}
              onChange={(e) => setAnswers({ ...answers, [currentQuestion.id]: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent text-lg"
            />
          )}

          {currentQuestion.type === "select" && (
            <div className="space-y-3">
              {currentQuestion.options?.map((option) => (
                <button
                  key={option}
                  onClick={() => setAnswers({ ...answers, [currentQuestion.id]: option })}
                  className={`w-full p-4 rounded-lg border-2 text-left font-medium transition-all ${
                    answers[currentQuestion.id] === option
                      ? "border-blue-900 bg-blue-50 text-blue-900"
                      : "border-gray-200 hover:border-blue-300"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}

          {/* Navigation */}
          <div className="flex gap-4 mt-8">
            {step > 0 && (
              <button
                onClick={handleBack}
                className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50"
              >
                <ArrowLeft size={20} /> Back
              </button>
            )}
            <button
              onClick={handleNext}
              disabled={!answers[currentQuestion.id]}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {step === questions.length - 1 ? "Find My Schemes" : "Next"} <ArrowRight size={20} />
            </button>
          </div>
        </Card>
      </div>
    </div>
  )
}
