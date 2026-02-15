# NyayaLens AI - Professional Government Dashboard

## 🎯 Overview

A production-ready, hackathon-winning government-tech dashboard built with Next.js, TypeScript, and Tailwind CSS. Features a modern SaaS-style interface suitable for national-level civic-tech presentations.

## 🎨 Design Theme

- **Primary**: Deep Blue (#1E3A8A)
- **Accent**: Indigo, Gold
- **Success**: Green
- **Warning**: Amber
- **Background**: Gradient from gray-50 via blue-50/30 to gray-50

## 📱 Dashboard Structure

### Top Navigation Bar
- NyayaLens AI logo (left) - **Place your logo at `public/logo.png`**
- Project tagline: "From Rights to Results"
- Language selector (English/Hindi toggle)
- Notification bell with indicator
- User profile dropdown

### Left Sidebar Menu
1. Dashboard Overview
2. Scheme Eligibility Checker
3. My Applications
4. Document Generator
5. RTI & Appeals
6. Community Alerts
7. Settings

**Bottom Badge**: "AWS Secured & Serverless" with animated pulse indicator

## 🏗️ Main Dashboard Sections

### 1. Stats Cards (Top Row)
- Eligible Schemes (Blue gradient)
- Approved Applications (Green gradient)
- In Progress (Amber gradient)
- Potential Benefits (Indigo-Purple gradient)

### 2. Eligible Government Schemes Section
Each scheme card includes:
- Emoji icon (🌾 Agriculture, 🏥 Healthcare, 🏠 Housing, 👩‍🎓 Education)
- Scheme name and description
- Category badge
- Eligibility status badge (✓ Eligible / Not Eligible)
- Benefit amount in green
- "Apply Now" button (for eligible schemes)
- Hover effects with shadow

**Schemes Included**:
- PM Kisan Samman Nidhi (₹6,000/year)
- Ayushman Bharat (₹5 lakh cover)
- PM Awas Yojana (₹2.5 lakh subsidy)
- National Scholarship (₹50,000/year)

### 3. Application Status Section
Features:
- Application cards with scheme icons
- Status badges (Approved/Pending/In Progress)
- Progress bars with percentage
- AI Approval Prediction (87% probability)
- Document upload indicators

### 4. AI Insights Panel (Right Sidebar)
Three types of insight cards:

**Personalized Recommendations**
- Indigo-purple gradient background
- Sparkles icon
- Shows additional qualifying schemes

**Suggested Documents**
- Blue-cyan gradient background
- FileCheck icon
- Document upload suggestions

**Risk Alerts**
- Amber-orange gradient background
- AlertTriangle icon
- Rejection risk warnings

### 5. Community Escalation Alerts
- Red-orange gradient card
- Group appeal suggestions
- Shows number of affected users
- "Join Group Appeal" CTA button

### 6. Document Status Indicator
- Verified documents (✓ green)
- Pending documents (⚠ amber)
- Upload documents button

## 📄 Additional Pages

### My Applications (`/applications`)
- Complete application list with icons
- Status tracking
- Application ID, dates, amounts
- View details and reapply options

### Document Generator (`/documents`)
- Drag-and-drop upload area
- Document status cards (Verified/Pending/Rejected)
- Document list with download options
- File size and upload date tracking

### RTI & Appeals (`/rti`)
- File new RTI requests
- File appeals
- Track RTI applications
- View responses and download

### Settings (`/settings`)
- Profile information
- Notification preferences
- Language selection
- Security settings

### Community Insights (`/community`)
- Rejection pattern charts
- District distribution
- Common issues list
- Escalation options

## 🚀 Getting Started

1. **Add Your Logo**
   ```
   Save your logo as: public/logo.png
   Recommended size: 400x100px (transparent PNG)
   ```

2. **Run Development Server**
   ```bash
   cd nyayalens-ai
   npm run dev
   ```

3. **Access Dashboard**
   ```
   Open: http://localhost:3000/dashboard
   ```

## 🎯 Key Features

✅ Professional government-grade UI
✅ Sidebar navigation with active states
✅ Responsive mobile design
✅ Gradient backgrounds and cards
✅ Scheme cards with eligibility badges
✅ AI-powered insights and predictions
✅ Progress tracking with animated bars
✅ Community escalation alerts
✅ Document management system
✅ RTI and appeals tracking
✅ Multi-language support (EN/HI)
✅ AWS security badge
✅ Notification system
✅ User profile management

## 🎨 Component Library

- `Card` - Reusable white card with shadow
- `StatusBadge` - Color-coded status indicators
- `ProgressCircle` - Animated circular progress
- `SchemeCard` - Scheme display with eligibility
- `AIInsightCard` - AI recommendation cards
- `DashboardNavbar` - Top navigation
- `Sidebar` - Left menu navigation

## 📊 Data Visualization

- Progress bars with gradients
- Circular progress indicators
- Status badges with icons
- Recharts integration (Community page)
- Pie charts and bar charts

## 🔒 Security Features

- AWS Secured badge
- Document verification status
- Two-factor authentication option
- Secure file uploads

## 🌐 Accessibility

- ARIA labels
- High contrast colors
- Large clickable areas
- Screen reader friendly
- Keyboard navigation support

## 🏆 Hackathon Ready

This dashboard is designed to win hackathons with:
- Professional government-tech aesthetic
- Modern SaaS dashboard design
- Clean, uncluttered layout
- Proper spacing and typography
- Smooth animations and transitions
- Production-ready code structure
- Scalable component architecture

## 📱 Responsive Design

- Desktop: Full sidebar + main content
- Tablet: Collapsible sidebar
- Mobile: Bottom navigation + hamburger menu

## 🎯 Demo Flow

1. Login → Dashboard Overview
2. View eligible schemes with badges
3. Check application status with AI predictions
4. Review AI insights and recommendations
5. Upload documents
6. File RTI/Appeals
7. View community insights
8. Manage settings

---

**Built with**: Next.js 15, TypeScript, Tailwind CSS, Recharts, Lucide Icons
**Status**: Production Ready ✅
**License**: Hackathon Demo
