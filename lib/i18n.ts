export type Language = "en" | "hi"

export const translations = {
  en: {
    // Navbar
    language: "English",
    notifications: "Notifications",
    profile: "Profile",
    
    // Sidebar
    dashboardOverview: "Dashboard Overview",
    schemeEligibility: "Scheme Eligibility Checker",
    myApplications: "My Applications",
    documentGenerator: "Document Generator",
    rtiAppeals: "RTI & Appeals",
    communityAlerts: "Community Alerts",
    settings: "Settings",
    awsSecured: "AWS Secured & Serverless",
    
    // Dashboard
    greeting: {
      morning: "Good morning",
      afternoon: "Good afternoon",
      evening: "Good evening"
    },
    dashboardSubtitle: "Here's your personalized benefits dashboard",
    eligibleSchemes: "Eligible Schemes",
    approved: "Approved",
    inProgress: "In Progress",
    potentialBenefits: "Potential Benefits",
    
    // Schemes Section
    eligibleGovernmentSchemes: "Eligible Government Schemes",
    viewAll: "View All",
    eligible: "Eligible",
    notEligible: "Not Eligible",
    benefit: "Benefit",
    applyNow: "Apply Now",
    
    // Application Status
    applicationStatus: "Application Status",
    appliedOn: "Applied on",
    progress: "Progress",
    aiApprovalPrediction: "AI Approval Prediction",
    highProbability: "High probability based on your profile",
    
    // AI Insights
    aiInsights: "AI Insights",
    personalizedRecommendation: "Personalized Recommendation",
    recommendationDesc: "Based on your profile, you qualify for 3 additional schemes worth",
    exploreSchemes: "Explore Schemes",
    suggestedDocuments: "Suggested Documents",
    documentsDesc: "Upload your income certificate to unlock 5 more schemes",
    uploadNow: "Upload Now",
    riskAlert: "Risk Alert",
    riskDesc: "Your Ayushman Bharat application needs bank passbook to avoid rejection",
    fixNow: "Fix Now",
    
    // Community
    communityEscalation: "Community Escalation Alert",
    communityDesc: "users in your district faced similar rejections. Join group appeal for faster resolution.",
    joinGroupAppeal: "Join Group Appeal",
    
    // Document Status
    documentStatus: "Document Status",
    verified: "Verified",
    pending: "Pending",
    uploadDocuments: "Upload Documents",
    
    // Status badges
    status: {
      approved: "Approved",
      pending: "Pending",
      rejected: "Rejected",
      inProgress: "In Progress"
    },
    
    // Categories
    categories: {
      agriculture: "Agriculture",
      healthcare: "Healthcare",
      housing: "Housing",
      education: "Education",
      womenWelfare: "Women Welfare"
    },
    
    // Schemes
    schemes: {
      pmKisan: "PM Kisan Samman Nidhi",
      pmKisanDesc: "Direct income support to farmers with cultivable land",
      ayushman: "Ayushman Bharat",
      ayushmanDesc: "Health insurance coverage for secondary and tertiary care",
      pmAwas: "PM Awas Yojana",
      pmAwasDesc: "Housing subsidy for economically weaker sections",
      scholarship: "National Scholarship",
      scholarshipDesc: "Financial assistance for students from economically weaker sections",
      sukanya: "Sukanya Samriddhi Yojana"
    },
    
    // Applications Page
    myApplicationsTitle: "My Applications",
    myApplicationsSubtitle: "Track all your scheme applications in one place",
    totalApplications: "Total Applications",
    applicationId: "Application ID",
    benefitAmount: "Benefit Amount",
    viewDetails: "View Details",
    reapply: "Reapply",
    
    // Documents Page
    documentGeneratorTitle: "Document Generator",
    documentGeneratorSubtitle: "Upload and manage your documents for scheme applications",
    uploadDocumentsTitle: "Upload Documents",
    dragDropText: "Drag and drop files here or click to browse",
    chooseFiles: "Choose Files",
    supportedFormats: "Supported formats: PDF, JPG, PNG (Max 5MB)",
    verifiedDocuments: "Verified Documents",
    pendingReview: "Pending Review",
    needsReupload: "Needs Reupload",
    yourDocuments: "Your Documents",
    uploaded: "Uploaded",
    rejected: "Rejected",
    reupload: "Reupload",
    upload: "Upload",
    download: "Download",
    
    // RTI Page
    rtiTitle: "RTI & Appeals",
    rtiSubtitle: "File RTI requests and track appeals for your applications",
    fileNewRTI: "File New RTI",
    fileNewRTIDesc: "Request information about your application",
    fileAppeal: "File Appeal",
    fileAppealDesc: "Appeal against rejection or delay",
    yourRTIApplications: "Your RTI Applications",
    yourAppeals: "Your Appeals",
    rtiId: "RTI ID",
    filedOn: "Filed On",
    responseDate: "Response Date",
    awaiting: "Awaiting",
    responded: "Responded",
    underReview: "Under Review",
    downloadResponse: "Download Response",
    trackAppeal: "Track Appeal",
    appealFor: "Appeal for",
    appealId: "Appeal ID",
    noAppeals: "No appeals filed yet",
    
    // Settings Page
    settingsTitle: "Settings",
    settingsSubtitle: "Manage your account and preferences",
    profileInformation: "Profile Information",
    fullName: "Full Name",
    phoneNumber: "Phone Number",
    email: "Email",
    saveChanges: "Save Changes",
    notificationSettings: "Notifications",
    applicationUpdates: "Application Status Updates",
    schemeRecommendations: "New Scheme Recommendations",
    documentAlerts: "Document Verification Alerts",
    communityAlertsSettings: "Community Alerts",
    emailNotifications: "Email Notifications",
    languagePreference: "Language Preference",
    security: "Security",
    changePassword: "Change Password",
    twoFactor: "Two-Factor Authentication",
    deleteAccount: "Delete Account",
    
    // Community Page
    communityInsights: "Community Insights",
    communitySubtitle: "Learn from collective experiences and patterns",
    activeUsers: "Active Users",
    avgRejectionRate: "Avg. Rejection Rate",
    issuesReported: "Issues Reported",
    rejectionPatterns: "Rejection Patterns by Scheme",
    applicationsByDistrict: "Applications by District",
    commonIssues: "Common Issues & Solutions",
    reportsThisMonth: "reports this month",
    viewSolution: "View Solution",
    needHelp: "Need Help with Your Application?",
    needHelpDesc: "If you're facing repeated rejections or unclear requirements, our community support team can help escalate your case.",
    requestEscalation: "Request Escalation",
    
    // Auth Pages
    welcomeBack: "Welcome Back",
    loginSubtitle: "Login to access your dashboard",
    sendOTP: "Send OTP",
    enterOTP: "Enter OTP",
    digitCode: "6-digit code",
    sentTo: "Sent to",
    verifyLogin: "Verify & Login",
    changePhone: "Change phone number",
    dontHaveAccount: "Don't have an account?",
    signUp: "Sign up",
    createAccount: "Create Account",
    createAccountSubtitle: "Start your journey to benefits",
    getStartedFree: "Get Started Free",
    alreadyHaveAccount: "Already have an account?",
    login: "Login",
    
    // Landing Page
    heroTitle: "Turn Your Rights",
    heroTitleHighlight: "Into Results",
    heroSubtitle: "AI-powered platform connecting citizens to government schemes. Get personalized guidance, track applications, and access your benefits faster.",
    checkEligibility: "Check My Eligibility",
    howItWorks: "How It Works",
    challengeTitle: "The Challenge We Solve",
    citizensUnaware: "Citizens unaware of eligible schemes",
    applicationsRejected: "Applications rejected due to errors",
    avgProcessingTime: "Average processing time",
    months: "months",
    howItWorksTitle: "How It Works",
    step1Title: "Answer Simple Questions",
    step1Desc: "Our AI asks you easy questions about your situation",
    step2Title: "Get Matched Schemes",
    step2Desc: "Instantly see all schemes you qualify for with eligibility scores",
    step3Title: "Apply with Guidance",
    step3Desc: "Step-by-step help with documents, deadlines, and tracking",
    powerfulFeatures: "Powerful Features",
    aiEligibilityCheck: "AI Eligibility Check",
    aiEligibilityDesc: "Instant matching with 500+ schemes",
    documentVerification: "Document Verification",
    documentVerificationDesc: "Smart validation before submission",
    successPrediction: "Success Prediction",
    successPredictionDesc: "Know your approval probability",
    communityInsightsFeature: "Community Insights",
    communityInsightsDesc: "Learn from others' experiences",
    readyToAccess: "Ready to Access Your Benefits?",
    joinThousands: "Join thousands of citizens already using NyayaLens AI",
    
    // Schemes Discovery
    schemesTitle: "Find Your Schemes",
    questionOf: "Question {current} of {total}",
    complete: "Complete",
    back: "Back",
    next: "Next",
    findMySchemes: "Find My Schemes",
    foundSchemes: "We Found {count} Schemes For You!",
    foundSchemesDesc: "Based on your profile, here are your best matches",
    match: "Match"
  },
  hi: {
    // Navbar
    language: "हिंदी",
    notifications: "सूचनाएं",
    profile: "प्रोफ़ाइल",
    
    // Sidebar
    dashboardOverview: "डैशबोर्ड अवलोकन",
    schemeEligibility: "योजना पात्रता जांचकर्ता",
    myApplications: "मेरे आवेदन",
    documentGenerator: "दस्तावेज़ जनरेटर",
    rtiAppeals: "आरटीआई और अपील",
    communityAlerts: "सामुदायिक अलर्ट",
    settings: "सेटिंग्स",
    awsSecured: "AWS सुरक्षित और सर्वररहित",
    
    // Dashboard
    greeting: {
      morning: "सुप्रभात",
      afternoon: "नमस्ते",
      evening: "शुभ संध्या"
    },
    dashboardSubtitle: "यहाँ आपका व्यक्तिगत लाभ डैशबोर्ड है",
    eligibleSchemes: "पात्र योजनाएं",
    approved: "स्वीकृत",
    inProgress: "प्रगति में",
    potentialBenefits: "संभावित लाभ",
    
    // Schemes Section
    eligibleGovernmentSchemes: "पात्र सरकारी योजनाएं",
    viewAll: "सभी देखें",
    eligible: "पात्र",
    notEligible: "अपात्र",
    benefit: "लाभ",
    applyNow: "अभी आवेदन करें",
    
    // Application Status
    applicationStatus: "आवेदन स्थिति",
    appliedOn: "आवेदन तिथि",
    progress: "प्रगति",
    aiApprovalPrediction: "एआई स्वीकृति पूर्वानुमान",
    highProbability: "आपकी प्रोफ़ाइल के आधार पर उच्च संभावना",
    
    // AI Insights
    aiInsights: "एआई अंतर्दृष्टि",
    personalizedRecommendation: "व्यक्तिगत सिफारिश",
    recommendationDesc: "आपकी प्रोफ़ाइल के आधार पर, आप ३ अतिरिक्त योजनाओं के लिए योग्य हैं जिनकी कीमत है",
    exploreSchemes: "योजनाएं देखें",
    suggestedDocuments: "सुझाए गए दस्तावेज़",
    documentsDesc: "५ और योजनाओं को अनलॉक करने के लिए अपना आय प्रमाण पत्र अपलोड करें",
    uploadNow: "अभी अपलोड करें",
    riskAlert: "जोखिम चेतावनी",
    riskDesc: "अस्वीकृति से बचने के लिए आपके आयुष्मान भारत आवेदन में बैंक पासबुक की आवश्यकता है",
    fixNow: "अभी ठीक करें",
    
    // Community
    communityEscalation: "सामुदायिक वृद्धि अलर्ट",
    communityDesc: "आपके जिले में उपयोगकर्ताओं को समान अस्वीकृति का सामना करना पड़ा। तेज़ समाधान के लिए समूह अपील में शामिल हों।",
    joinGroupAppeal: "समूह अपील में शामिल हों",
    
    // Document Status
    documentStatus: "दस्तावेज़ स्थिति",
    verified: "सत्यापित",
    pending: "लंबित",
    uploadDocuments: "दस्तावेज़ अपलोड करें",
    
    // Status badges
    status: {
      approved: "स्वीकृत",
      pending: "लंबित",
      rejected: "अस्वीकृत",
      inProgress: "प्रगति में"
    },
    
    // Categories
    categories: {
      agriculture: "कृषि",
      healthcare: "स्वास्थ्य सेवा",
      housing: "आवास",
      education: "शिक्षा",
      womenWelfare: "महिला कल्याण"
    },
    
    // Schemes
    schemes: {
      pmKisan: "पीएम किसान सम्मान निधि",
      pmKisanDesc: "खेती योग्य भूमि वाले किसानों को प्रत्यक्ष आय सहायता",
      ayushman: "आयुष्मान भारत",
      ayushmanDesc: "द्वितीयक और तृतीयक देखभाल के लिए स्वास्थ्य बीमा कवरेज",
      pmAwas: "पीएम आवास योजना",
      pmAwasDesc: "आर्थिक रूप से कमजोर वर्गों के लिए आवास सब्सिडी",
      scholarship: "राष्ट्रीय छात्रवृत्ति",
      scholarshipDesc: "आर्थिक रूप से कमजोर वर्गों के छात्रों के लिए वित्तीय सहायता",
      sukanya: "सुकन्या समृद्धि योजना"
    },
    
    // Applications Page
    myApplicationsTitle: "मेरे आवेदन",
    myApplicationsSubtitle: "एक ही स्थान पर अपने सभी योजना आवेदनों को ट्रैक करें",
    totalApplications: "कुल आवेदन",
    applicationId: "आवेदन आईडी",
    benefitAmount: "लाभ राशि",
    viewDetails: "विवरण देखें",
    reapply: "पुनः आवेदन करें",
    
    // Documents Page
    documentGeneratorTitle: "दस्तावेज़ जनरेटर",
    documentGeneratorSubtitle: "योजना आवेदनों के लिए अपने दस्तावेज़ अपलोड और प्रबंधित करें",
    uploadDocumentsTitle: "दस्तावेज़ अपलोड करें",
    dragDropText: "फ़ाइलें यहाँ खींचें और छोड़ें या ब्राउज़ करने के लिए क्लिक करें",
    chooseFiles: "फ़ाइलें चुनें",
    supportedFormats: "समर्थित प्रारूप: PDF, JPG, PNG (अधिकतम ५MB)",
    verifiedDocuments: "सत्यापित दस्तावेज़",
    pendingReview: "समीक्षा लंबित",
    needsReupload: "पुनः अपलोड आवश्यक",
    yourDocuments: "आपके दस्तावेज़",
    uploaded: "अपलोड किया गया",
    rejected: "अस्वीकृत",
    reupload: "पुनः अपलोड करें",
    upload: "अपलोड करें",
    download: "डाउनलोड करें",
    
    // RTI Page
    rtiTitle: "आरटीआई और अपील",
    rtiSubtitle: "आरटीआई अनुरोध दर्ज करें और अपने आवेदनों के लिए अपील ट्रैक करें",
    fileNewRTI: "नया आरटीआई दर्ज करें",
    fileNewRTIDesc: "अपने आवेदन के बारे में जानकारी का अनुरोध करें",
    fileAppeal: "अपील दर्ज करें",
    fileAppealDesc: "अस्वीकृति या देरी के खिलाफ अपील करें",
    yourRTIApplications: "आपके आरटीआई आवेदन",
    yourAppeals: "आपकी अपील",
    rtiId: "आरटीआई आईडी",
    filedOn: "दर्ज तिथि",
    responseDate: "प्रतिक्रिया तिथि",
    awaiting: "प्रतीक्षारत",
    responded: "उत्तर दिया गया",
    underReview: "समीक्षाधीन",
    downloadResponse: "प्रतिक्रिया डाउनलोड करें",
    trackAppeal: "अपील ट्रैक करें",
    appealFor: "के लिए अपील",
    appealId: "अपील आईडी",
    noAppeals: "अभी तक कोई अपील दर्ज नहीं की गई",
    
    // Settings Page
    settingsTitle: "सेटिंग्स",
    settingsSubtitle: "अपने खाते और प्राथमिकताओं को प्रबंधित करें",
    profileInformation: "प्रोफ़ाइल जानकारी",
    fullName: "पूरा नाम",
    phoneNumber: "फ़ोन नंबर",
    email: "ईमेल",
    saveChanges: "परिवर्तन सहेजें",
    notificationSettings: "सूचनाएं",
    applicationUpdates: "आवेदन स्थिति अपडेट",
    schemeRecommendations: "नई योजना सिफारिशें",
    documentAlerts: "दस्तावेज़ सत्यापन अलर्ट",
    communityAlertsSettings: "सामुदायिक अलर्ट",
    emailNotifications: "ईमेल सूचनाएं",
    languagePreference: "भाषा प्राथमिकता",
    security: "सुरक्षा",
    changePassword: "पासवर्ड बदलें",
    twoFactor: "दो-कारक प्रमाणीकरण",
    deleteAccount: "खाता हटाएं",
    
    // Community Page
    communityInsights: "सामुदायिक अंतर्दृष्टि",
    communitySubtitle: "सामूहिक अनुभवों और पैटर्न से सीखें",
    activeUsers: "सक्रिय उपयोगकर्ता",
    avgRejectionRate: "औसत अस्वीकृति दर",
    issuesReported: "रिपोर्ट की गई समस्याएं",
    rejectionPatterns: "योजना के अनुसार अस्वीकृति पैटर्न",
    applicationsByDistrict: "जिले के अनुसार आवेदन",
    commonIssues: "सामान्य समस्याएं और समाधान",
    reportsThisMonth: "इस महीने रिपोर्ट",
    viewSolution: "समाधान देखें",
    needHelp: "अपने आवेदन में मदद चाहिए?",
    needHelpDesc: "यदि आप बार-बार अस्वीकृति या अस्पष्ट आवश्यकताओं का सामना कर रहे हैं, तो हमारी सामुदायिक सहायता टीम आपके मामले को बढ़ाने में मदद कर सकती है।",
    requestEscalation: "वृद्धि का अनुरोध करें",
    
    // Auth Pages
    welcomeBack: "वापसी पर स्वागत है",
    loginSubtitle: "अपने डैशबोर्ड तक पहुंचने के लिए लॉगिन करें",
    sendOTP: "ओटीपी भेजें",
    enterOTP: "ओटीपी दर्ज करें",
    digitCode: "६-अंकीय कोड",
    sentTo: "को भेजा गया",
    verifyLogin: "सत्यापित करें और लॉगिन करें",
    changePhone: "फ़ोन नंबर बदलें",
    dontHaveAccount: "खाता नहीं है?",
    signUp: "साइन अप करें",
    createAccount: "खाता बनाएं",
    createAccountSubtitle: "लाभों की अपनी यात्रा शुरू करें",
    getStartedFree: "मुफ़्त में शुरू करें",
    alreadyHaveAccount: "पहले से खाता है?",
    login: "लॉगिन",
    
    // Landing Page
    heroTitle: "अपने अधिकारों को",
    heroTitleHighlight: "परिणामों में बदलें",
    heroSubtitle: "एआई-संचालित प्लेटफ़ॉर्म नागरिकों को सरकारी योजनाओं से जोड़ता है। व्यक्तिगत मार्गदर्शन प्राप्त करें, आवेदनों को ट्रैक करें, और अपने लाभों तक तेज़ी से पहुंचें।",
    checkEligibility: "मेरी पात्रता जांचें",
    howItWorks: "यह कैसे काम करता है",
    challengeTitle: "हम जो चुनौती हल करते हैं",
    citizensUnaware: "नागरिक पात्र योजनाओं से अनजान",
    applicationsRejected: "त्रुटियों के कारण आवेदन अस्वीकृत",
    avgProcessingTime: "औसत प्रसंस्करण समय",
    months: "महीने",
    howItWorksTitle: "यह कैसे काम करता है",
    step1Title: "सरल प्रश्नों के उत्तर दें",
    step1Desc: "हमारा एआई आपकी स्थिति के बारे में आसान प्रश्न पूछता है",
    step2Title: "मिलान योजनाएं प्राप्त करें",
    step2Desc: "पात्रता स्कोर के साथ तुरंत सभी योजनाएं देखें जिनके लिए आप योग्य हैं",
    step3Title: "मार्गदर्शन के साथ आवेदन करें",
    step3Desc: "दस्तावेज़ों, समय सीमा और ट्रैकिंग के साथ चरण-दर-चरण सहायता",
    powerfulFeatures: "शक्तिशाली सुविधाएँ",
    aiEligibilityCheck: "एआई पात्रता जांच",
    aiEligibilityDesc: "५००+ योजनाओं के साथ तत्काल मिलान",
    documentVerification: "दस्तावेज़ सत्यापन",
    documentVerificationDesc: "सबमिशन से पहले स्मार्ट सत्यापन",
    successPrediction: "सफलता पूर्वानुमान",
    successPredictionDesc: "अपनी स्वीकृति संभावना जानें",
    communityInsightsFeature: "सामुदायिक अंतर्दृष्टि",
    communityInsightsDesc: "दूसरों के अनुभवों से सीखें",
    readyToAccess: "अपने लाभों तक पहुंचने के लिए तैयार हैं?",
    joinThousands: "पहले से ही न्यायलेंस एआई का उपयोग कर रहे हजारों नागरिकों में शामिल हों",
    
    // Schemes Discovery
    schemesTitle: "अपनी योजनाएं खोजें",
    questionOf: "प्रश्न {current} का {total}",
    complete: "पूर्ण",
    back: "पीछे",
    next: "आगे",
    findMySchemes: "मेरी योजनाएं खोजें",
    foundSchemes: "हमें आपके लिए {count} योजनाएं मिलीं!",
    foundSchemesDesc: "आपकी प्रोफ़ाइल के आधार पर, यहाँ आपके सर्वोत्तम मिलान हैं",
    match: "मिलान"
  }
}

// Convert English numbers to Hindi numerals
export function toHindiNumerals(num: number | string): string {
  const hindiNumerals = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९']
  return String(num).replace(/\d/g, (digit) => hindiNumerals[parseInt(digit)])
}

// Format currency based on language
export function formatCurrency(amount: string, lang: Language): string {
  if (lang === "hi") {
    // Convert numbers in the amount string to Hindi numerals
    return amount.replace(/\d+/g, (match) => toHindiNumerals(match))
  }
  return amount
}

// Format date based on language
export function formatDate(dateStr: string, lang: Language): string {
  if (lang === "hi") {
    // Convert date numbers to Hindi numerals
    return dateStr.replace(/\d+/g, (match) => toHindiNumerals(match))
  }
  return dateStr
}

// Get translation
export function t(key: string, lang: Language, replacements?: Record<string, string | number>): string {
  const keys = key.split('.')
  let value: any = translations[lang]
  
  for (const k of keys) {
    value = value?.[k]
  }
  
  if (typeof value !== 'string') {
    return key
  }
  
  // Replace placeholders
  if (replacements) {
    Object.entries(replacements).forEach(([placeholder, replacement]) => {
      value = value.replace(`{${placeholder}}`, String(replacement))
    })
  }
  
  return value
}
