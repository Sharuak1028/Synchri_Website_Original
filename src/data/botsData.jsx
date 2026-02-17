const botsData = [
  {
    id: "scalper-pro",
    name: "Scalper Pro EA",
    badge: "MQL5",
    price: "$499",
    image: "/images/tradingbots.jpeg",
    shortDesc: "High-frequency scalping at its finest",

    overview:
      "Scalper Pro EA is a professional-grade high-frequency trading robot designed for volatile market conditions. It executes rapid trades with precision while maintaining strict risk controls.",

    specifications: [
      "Platform: MetaTrader 5 (MT5)",
      "Strategy Type: High-Frequency Scalping",
      "Timeframes Supported: M1, M5",
      "Currency Pairs: EUR/USD, GBP/USD, USD/JPY",
      "Risk Management: Dynamic lot sizing & equity protection",
      "Max Drawdown Control: Yes",
      "News Filter: Enabled",
      "Latency Optimized: Yes",
    ],

    features: [
      "Ultra-fast order execution",
      "Advanced spread & slippage protection",
      "Built-in risk-to-reward optimization",
      "Auto stop-loss & take-profit",
      "Designed for prop firm challenges",
      "24/5 market monitoring logic",
    ],
  },

  {
    id: "trend-master",
    name: "Trend Master EA",
    badge: "MQL4",
    price: "$699",
    image: "/images/tradingbots.jpeg",
    shortDesc: "Ride the trends with precision",

    overview:
      "Trend Master EA is a powerful trend-following algorithm built to capture long and medium-term price movements with high accuracy.",

    specifications: [
      "Platform: MetaTrader 4 (MT4)",
      "Strategy Type: Trend Following",
      "Timeframes Supported: H1, H4, D1",
      "Currency Pairs: All major & minor pairs",
      "Trend Detection: Multi-indicator confirmation",
      "Drawdown Protection: Smart equity trailing",
      "Trade Frequency: Moderate",
    ],

    features: [
      "Multi-timeframe trend confirmation",
      "Trailing stop-loss for profit maximization",
      "Low risk, high consistency logic",
      "Suitable for swing & position traders",
      "Minimal manual intervention required",
    ],
  },

  {
    id: "python-algo",
    name: "Python Algo Trader",
    badge: "Python",
    price: "$899",
    image: "/images/tradingbots.jpeg",
    shortDesc: "Machine learning meets trading",

    overview:
      "Python Algo Trader is an AI-powered trading system using machine learning models to analyze market data and execute trades intelligently.",

    specifications: [
      "Language: Python",
      "Strategy Type: AI / Machine Learning",
      "Execution: API-based (Binance, MT5 bridge)",
      "Models Used: Random Forest, LSTM",
      "Backtesting: Historical + Walk-forward",
      "Risk Engine: AI-based capital allocation",
    ],

    features: [
      "Self-learning market behavior analysis",
      "Adaptive strategy switching",
      "Advanced statistical modeling",
      "Supports crypto & forex markets",
      "Ideal for quantitative traders",
    ],
  },
];

export default botsData;
