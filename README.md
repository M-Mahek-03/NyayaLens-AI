# NyayaLens AI - From Rights to Results

A production-ready, government-grade civic-tech platform built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **AI-Powered Scheme Discovery**: Conversational questionnaire to match citizens with eligible schemes
- **Smart Dashboard**: Real-time tracking of applications with eligibility scores and AI recommendations
- **Community Insights**: Data visualization showing rejection patterns and common issues
- **Document Management**: Upload and track required documents with smart validation
- **Application Tracking**: Step-by-step timeline with action plans and deadlines
- **Mobile-First Design**: Fully responsive and accessible interface

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React

## 📦 Installation

```bash
cd nyayalens-ai
npm install
```

## 🏃 Running the App

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
nyayalens-ai/
├── app/
│   ├── page.tsx              # Landing page
│   ├── login/                # Authentication
│   ├── signup/               # Registration
│   ├── dashboard/            # User dashboard
│   ├── schemes/              # Scheme discovery
│   ├── application/[id]/     # Application details
│   └── community/            # Community insights
├── components/
│   ├── Navbar.tsx            # Navigation
│   ├── Card.tsx              # Reusable card
│   ├── StatusBadge.tsx       # Status indicators
│   └── ProgressCircle.tsx    # Circular progress
└── lib/
    └── utils.ts              # Utility functions
```

## 🎨 Design System

- **Primary Color**: Deep Blue (#1E3A8A)
- **Accent**: Indigo
- **Success**: Green
- **Warning**: Amber
- **Background**: Soft Gray/White

## 🔑 Key Pages

1. **Landing (/)**: Hero section, features, how it works
2. **Login/Signup**: OTP-based authentication
3. **Dashboard**: Eligibility score, active applications, AI recommendations
4. **Schemes**: AI questionnaire and matching results
5. **Application Detail**: Timeline, documents, action plan
6. **Community**: Analytics dashboard with charts

## 🚢 Deployment

```bash
npm run build
npm start
```

## 📄 License

Built for hackathon demonstration purposes.
