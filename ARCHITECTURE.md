# NyayaLens AI - System Architecture

## 🏗️ Architecture Overview

NyayaLens AI is a modern, scalable civic-tech platform built with Next.js 15, TypeScript, and Tailwind CSS, designed to connect citizens with government schemes through AI-powered recommendations.

## 📊 High-Level Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Client Layer (Browser)                   │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │   React UI   │  │  i18n System │  │ LocalStorage │     │
│  │  Components  │  │  (EN/HI)     │  │  Persistence │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                  Next.js App Router Layer                    │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │   Routing    │  │     SSR      │  │   API Routes │     │
│  │   System     │  │   Rendering  │  │   (Future)   │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                    Business Logic Layer                      │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │ Translation  │  │  Formatting  │  │   Utilities  │     │
│  │   Engine     │  │   Functions  │  │   (cn, etc)  │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                    Data Layer (Future)                       │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │   Database   │  │   AWS APIs   │  │  External    │     │
│  │   (MongoDB)  │  │   (Lambda)   │  │  Services    │     │
│  └──────────────┘  └──────────────┘  └──────────────┘     │
└─────────────────────────────────────────────────────────────┘
```

## 🗂️ Project Structure

```
nyayalens-ai/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with LanguageProvider
│   ├── page.tsx                 # Landing page
│   ├── globals.css              # Global styles
│   ├── dashboard/               # Dashboard page
│   ├── schemes/                 # Scheme discovery
│   ├── applications/            # Application tracking
│   ├── documents/               # Document management
│   ├── rti/                     # RTI & Appeals
│   ├── community/               # Community insights
│   ├── settings/                # User settings
│   ├── login/                   # Authentication
│   └── signup/                  # Registration
│
├── components/                   # Reusable React components
│   ├── Card.tsx                 # Base card component
│   ├── StatusBadge.tsx          # Status indicator
│   ├── ProgressCircle.tsx       # Circular progress
│   ├── SchemeCard.tsx           # Scheme display card
│   ├── AIInsightCard.tsx        # AI recommendation card
│   ├── DashboardNavbar.tsx      # Top navigation
│   └── Sidebar.tsx              # Left sidebar menu
│
├── contexts/                     # React Context providers
│   └── LanguageContext.tsx      # i18n state management
│
├── lib/                          # Utility functions
│   ├── i18n.ts                  # Translation engine
│   └── utils.ts                 # Helper functions
│
├── public/                       # Static assets
│   └── logo.png                 # Application logo
│
└── Configuration files
    ├── package.json             # Dependencies
    ├── tsconfig.json            # TypeScript config
    ├── tailwind.config.ts       # Tailwind CSS config
    └── next.config.js           # Next.js config
```

## 🔧 Technology Stack

### Frontend Framework
- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **Custom CSS** - Animations and gradients

### State Management
- **React Context API** - Language state management
- **LocalStorage** - Persistence layer

### Data Visualization
- **Recharts** - Charts and graphs (Community page)

### Icons & UI
- **Lucide React** - Icon library
- **Custom Components** - Reusable UI elements

### Forms (Ready for integration)
- **React Hook Form** - Form handling
- **Zod** - Schema validation

## 🌐 Internationalization (i18n) Architecture

### Translation System
```typescript
// Translation structure
translations = {
  en: { key: "English text" },
  hi: { key: "हिंदी पाठ" }
}

// Usage
t("key", language) // Returns translated text
```

### Features
- **200+ translation keys**
- **Hindi numeral conversion** (0-9 → ०-९)
- **Currency formatting** (₹6,000 → ₹६,०००)
- **Date localization**
- **Dynamic switching** (no reload)
- **LocalStorage persistence**

### Context Flow
```
User clicks toggle
    ↓
LanguageContext updates
    ↓
All components re-render
    ↓
New language displayed
    ↓
Saved to LocalStorage
```

## 📱 Component Architecture

### Component Hierarchy
```
App Layout (LanguageProvider)
    ↓
Page Layout (Navbar + Sidebar)
    ↓
Page Content
    ↓
Reusable Components (Cards, Badges, etc.)
```

### Component Types

**1. Layout Components**
- `DashboardNavbar` - Top navigation with language toggle
- `Sidebar` - Left menu navigation
- `Card` - Base container component

**2. Data Display Components**
- `StatusBadge` - Status indicators
- `ProgressCircle` - Circular progress bars
- `SchemeCard` - Scheme information cards
- `AIInsightCard` - AI recommendation cards

**3. Page Components**
- Dashboard - Main overview
- Applications - Application tracking
- Documents - Document management
- RTI - RTI and appeals
- Community - Analytics and insights
- Settings - User preferences

## 🔐 Security Architecture

### Current Implementation
- Client-side validation
- Type safety with TypeScript
- Secure component patterns

### Future Enhancements
- JWT authentication
- Role-based access control (RBAC)
- API rate limiting
- Data encryption
- HTTPS enforcement
- CSRF protection

## 🚀 Deployment Architecture

### Recommended Stack
```
┌─────────────────────────────────────┐
│         Vercel / AWS Amplify        │
│         (Frontend Hosting)          │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│         AWS API Gateway             │
│         (API Management)            │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│         AWS Lambda                  │
│         (Serverless Functions)      │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│         MongoDB Atlas               │
│         (Database)                  │
└─────────────────────────────────────┘
```

### Deployment Options

**Option 1: Vercel (Recommended)**
- Automatic deployments from GitHub
- Edge network CDN
- Serverless functions
- Environment variables
- Preview deployments

**Option 2: AWS Amplify**
- Full AWS integration
- CI/CD pipeline
- Custom domain support
- SSL certificates
- Monitoring and analytics

## 📊 Data Flow Architecture

### Current (Static Data)
```
Component → Static Data → Render
```

### Future (API Integration)
```
User Action
    ↓
Component Event
    ↓
API Call (fetch/axios)
    ↓
AWS Lambda Function
    ↓
Database Query
    ↓
Response Processing
    ↓
State Update
    ↓
UI Re-render
```

## 🎨 Design System Architecture

### Color Palette
```typescript
Primary: #1E3A8A (Deep Blue)
Accent: #4F46E5 (Indigo)
Gold: #EAB308 (Amber)
Success: #10B981 (Green)
Warning: #F59E0B (Amber)
Error: #EF4444 (Red)
```

### Typography
- Font Family: Inter
- Headings: Bold, 24-48px
- Body: Regular, 14-16px
- Labels: Medium, 12-14px

### Spacing System
- Base unit: 4px
- Scale: 4, 8, 12, 16, 24, 32, 48, 64px

## 🔄 State Management Architecture

### Current Implementation
```typescript
// Language State
LanguageContext
    ├── language: "en" | "hi"
    ├── setLanguage()
    └── toggleLanguage()
```

### Future State Management
```typescript
// User State
UserContext
    ├── user: User | null
    ├── isAuthenticated: boolean
    └── logout()

// Application State
ApplicationContext
    ├── applications: Application[]
    ├── schemes: Scheme[]
    └── documents: Document[]
```

## 📈 Scalability Considerations

### Performance Optimization
- **Code Splitting** - Dynamic imports
- **Lazy Loading** - Components on demand
- **Image Optimization** - Next.js Image component
- **Caching** - Static generation where possible
- **CDN** - Static asset delivery

### Database Scaling
- **Indexing** - Efficient queries
- **Caching Layer** - Redis for frequent data
- **Read Replicas** - Distribute read load
- **Sharding** - Horizontal scaling

## 🧪 Testing Architecture (Future)

### Testing Layers
```
Unit Tests (Jest)
    ↓
Component Tests (React Testing Library)
    ↓
Integration Tests (Playwright)
    ↓
E2E Tests (Cypress)
```

## 📱 Responsive Design Architecture

### Breakpoints
```typescript
sm: 640px   // Mobile landscape
md: 768px   // Tablet
lg: 1024px  // Desktop
xl: 1280px  // Large desktop
```

### Layout Strategy
- Mobile-first approach
- Flexible grid system
- Responsive typography
- Touch-friendly interactions

## 🔌 API Architecture (Future)

### Endpoint Structure
```
/api/v1/
    ├── /auth
    │   ├── POST /login
    │   ├── POST /signup
    │   └── POST /logout
    ├── /schemes
    │   ├── GET /schemes
    │   ├── GET /schemes/:id
    │   └── POST /schemes/match
    ├── /applications
    │   ├── GET /applications
    │   ├── POST /applications
    │   └── GET /applications/:id
    └── /documents
        ├── POST /documents/upload
        └── GET /documents/:id
```

## 🎯 Performance Metrics

### Target Metrics
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Lighthouse Score**: > 90
- **Bundle Size**: < 200KB (gzipped)

## 🔒 Data Privacy Architecture

### Compliance
- GDPR ready
- Data encryption at rest
- Secure data transmission
- User consent management
- Right to deletion

## 📊 Monitoring & Analytics (Future)

### Tools
- **Vercel Analytics** - Performance monitoring
- **Sentry** - Error tracking
- **Google Analytics** - User behavior
- **AWS CloudWatch** - Infrastructure monitoring

## 🚀 CI/CD Pipeline (Future)

```
GitHub Push
    ↓
GitHub Actions
    ↓
Run Tests
    ↓
Build Application
    ↓
Deploy to Staging
    ↓
Manual Approval
    ↓
Deploy to Production
```

## 📝 Documentation Architecture

### Documentation Types
- **README.md** - Project overview
- **ARCHITECTURE.md** - System design (this file)
- **I18N_IMPLEMENTATION.md** - i18n details
- **DASHBOARD_GUIDE.md** - Dashboard features
- **API_DOCS.md** - API documentation (future)

## 🎓 Learning Resources

### For Developers
- Next.js Documentation
- React Documentation
- Tailwind CSS Documentation
- TypeScript Handbook

### For Contributors
- Contributing Guidelines
- Code Style Guide
- Git Workflow
- Issue Templates

---

**Version**: 1.0.0  
**Last Updated**: February 15, 2026  
**Maintained By**: NyayaLens AI Team  
**Contact**: mnmukadam04@gmail.com
