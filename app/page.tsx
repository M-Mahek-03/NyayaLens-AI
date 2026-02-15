import Link from "next/link"
import { ArrowRight, CheckCircle, Users, TrendingUp, Shield } from "lucide-react"
import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Turn Your Rights<br />Into <span className="text-blue-900">Results</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            AI-powered platform connecting citizens to government schemes. 
            Get personalized guidance, track applications, and access your benefits faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/schemes" className="px-8 py-4 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800 flex items-center justify-center gap-2">
              Check My Eligibility <ArrowRight size={20} />
            </Link>
            <Link href="#how-it-works" className="px-8 py-4 border-2 border-blue-900 text-blue-900 rounded-lg font-semibold hover:bg-blue-50">
              How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">The Challenge We Solve</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">67%</div>
              <p className="text-gray-700">Citizens unaware of eligible schemes</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">45%</div>
              <p className="text-gray-700">Applications rejected due to errors</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">3-6 months</div>
              <p className="text-gray-700">Average processing time</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: "1", title: "Answer Simple Questions", desc: "Our AI asks you easy questions about your situation" },
            { step: "2", title: "Get Matched Schemes", desc: "Instantly see all schemes you qualify for with eligibility scores" },
            { step: "3", title: "Apply with Guidance", desc: "Step-by-step help with documents, deadlines, and tracking" }
          ].map((item) => (
            <div key={item.step} className="bg-white rounded-xl p-6 shadow-sm border">
              <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                {item.step}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Powerful Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: CheckCircle, title: "AI Eligibility Check", desc: "Instant matching with 500+ schemes" },
              { icon: Shield, title: "Document Verification", desc: "Smart validation before submission" },
              { icon: TrendingUp, title: "Success Prediction", desc: "Know your approval probability" },
              { icon: Users, title: "Community Insights", desc: "Learn from others' experiences" }
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border text-center">
                <feature.icon className="w-12 h-12 text-blue-900 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4">Ready to Access Your Benefits?</h2>
          <p className="text-xl mb-8 text-blue-100">Join thousands of citizens already using NyayaLens AI</p>
          <Link href="/signup" className="inline-block px-8 py-4 bg-white text-blue-900 rounded-lg font-semibold hover:bg-gray-100">
            Get Started Free
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2026 NyayaLens AI. Empowering citizens through technology.</p>
        </div>
      </footer>
    </div>
  )
}
