import { Sparkles, BarChart2, Mail, FileText, LayoutDashboard ,Plus,Users, Home,LineChart, Brain, Search, TrendingUp } from "lucide-react";


export const FEATURES = [
  {
    icon: LineChart,
    title: "AI Chart Analysis",
    description:
      "Upload any stock or crypto chart, and let ChartMind instantly identify patterns, trends, and key price levels with precision.",
  },
  {
    icon: Brain,
    title: "Smart Trade Setups",
    description:
      "Get AI-generated trade ideas with entry, stop loss, and target levels based on real technical indicators and market sentiment.",
  },
  {
    icon: Search,
    title: "Pattern Recognition",
    description:
      "ChartMind scans your charts for formations like triangles, wedges, and channels, giving you clear, actionable interpretations.",
  },
  {
    icon: TrendingUp,
    title: "Market Insights Dashboard",
    description:
      "Track live market data, volatility, and trend shifts in one place — powered by ChartMind’s continuous AI market analysis.",
  },
];



export const FAQS = [
  {
    question: "What is ChartMind?",
    answer:
      "ChartMind is an AI-powered chart analysis assistant that interprets stock, crypto, and forex charts to provide professional-level insights, trade setups, and key technical levels within seconds.",
  },
  {
    question: "How does ChartMind analyze charts?",
    answer:
      "When you upload a chart, ChartMind uses advanced AI vision and technical analysis models to detect patterns, trends, support/resistance levels, and trade opportunities based on indicators like RSI, MACD, and moving averages.",
  },
  {
    question: "Can ChartMind suggest trade entries and targets?",
    answer:
      "Yes. ChartMind provides complete trade setups — including potential entry points, stop loss (SL), and take profit (TP) levels — for both bullish and bearish scenarios, based purely on the uploaded chart data.",
  },
  {
    question: "Does ChartMind support live market data?",
    answer:
      "Yes, ChartMind can integrate with live market feeds to analyze current price action and generate updated insights for stocks, crypto, or forex pairs.",
  },
  {
    question: "Is my uploaded chart data secure?",
    answer:
      "Absolutely. All uploaded charts are processed securely and never shared with third parties. We use encrypted connections to ensure your data privacy.",
  },
  {
    question: "Can I ask ChartMind text-based questions too?",
    answer:
      "Yes! You can chat with ChartMind using text — ask about any stock, market trend, or pattern, and it will respond with intelligent insights or analysis in real time.",
  },
  {
    question: "Do I need trading experience to use ChartMind?",
    answer:
      "Not at all. ChartMind is designed for everyone — from beginners learning chart analysis to experienced traders seeking faster, data-backed insights.",
  },
];




//Navigation items configuration 
export const NAVIGATION_MENU=[
  {id:"dashboard",name:"Home",icon:Home},
  {id:"priceing",name:"Pricing",icon:LayoutDashboard},
  {id:"profile",name:"Profile",icon:Users},
  
]