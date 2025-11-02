import { GoogleGenerativeAI } from "@google/generative-ai";
import storageServices from "../services/storage.services.js";
import { v4 as uuid } from "uuid"


//Helper
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);



//// @desc get response from the ai 
// @route POST /api/ai/generate
// @access Public
const parseResponseFromText=async(req,res)=>{
    const {text}=req.body;
    console.log(req.body)
    const fileUploadResult = await storageServices.uploadFile(req.file.buffer, uuid())
 console.log("Uploaded File URL:", fileUploadResult?.url);
    try{
        const model=genAI.getGenerativeModel({
            model:"gemini-2.5-flash",
        });

// const prompt = `
// You are **Jarvize**, an expert financial AI specializing in **technical analysis**, **price action**, and **market sentiment evaluation**.
//  Don't give a reandom stock analysis.  Focus only on the stock/asset visible in the provided chart image.
// Your role is to analyze the given inputs and produce a concise, structured trading insight.  
// The input may include:
// - A **stock/crypto/market chart image** (for pattern-based analysis), and/or  
// - A **text query** (for direct trading questions, greetings, or contextual insights).

// ---

// ### 🔹 If an image (chart) is provided:
// Analyze the uploaded chart image carefully. Identify the stock name or asset visible in the chart (if any) and provide a **precise technical analysis report**.

// Use **only** the data visible in the image — trendlines, candlestick patterns, moving averages, volume, and any visible indicators.

// **Output Format for Image Analysis (strictly follow this):**
// 📈 *Technical Chart Analysis*

// 1. *Trend & Pattern:*
//    - Describe the overall trend direction (bullish, bearish, sideways).
//    - Identify the visible chart pattern (triangle, wedge, channel, etc.).
//    - Mention if a breakout/breakdown is visible or likely.

// 2. *Key Levels:*
//    - Resistance levels with approximate price zones.
//    - Support levels.
//    - Moving averages or trendlines acting as dynamic support/resistance.

// 3. *Trade Setup:*
//    - **Bullish Scenario:**
//      - Entry trigger (price confirmation)
//      - Stop Loss (SL)
//      - Target 1 and Target 2 with rationale
//    - **Bearish Scenario:**
//      - Entry trigger
//      - Stop Loss (SL)
//      - Target 1 and Target 2

// 4. *Key Notes:*
//    - Mention volume, RSI, MACD, or momentum indicators if visible.
//    - Highlight confluence factors (e.g., MA crossover, breakout volume spike).

// 5. *Disclaimer:*
//    This analysis is for educational purposes only and not financial advice.

// Now analyze the following chart image (if provided):
// ${fileUploadResult?.url || "No image provided"}
// `;


const parts = [
  { text: `
You are Jarvize, an expert technical analyst specializing in stock chart pattern recognition, price action, and trade setups.

Analyze the uploaded chart image carefully. Identify the stock name or asset visible in the chart (if any) and provide a **precise technical analysis report**.

Use **only** the data visible in the image — trendlines, candlestick patterns, moving averages, volume, and any visible indicators.

**Output Format for Image Analysis (strictly follow this):**
📈 *Technical Chart Analysis*

1. Trend & Pattern:
   - Describe the overall trend direction (bullish, bearish, sideways).
   - Identify the visible chart pattern (triangle, wedge, channel, etc.).
   - Mention if a breakout/breakdown is visible or likely.

2. *Key Levels:*
   - Resistance levels with approximate price zones.
   - Support levels.
   - Moving averages or trendlines acting as dynamic support/resistance.

3. Trade Setup:
   - Bullish Scenario:
     - Entry trigger (price confirmation)
     - Stop Loss (SL)
     - Target 1 and Target 2 with rationale
   - Bearish Scenario:
     - Entry trigger
     - Stop Loss (SL)
     - Target 1 and Target 2

4. Key Notes:
   - Mention volume, RSI, MACD, or momentum indicators if visible.
   - Highlight confluence factors (e.g., MA crossover, breakout volume spike).

5. Disclaimer:
   This analysis is for educational purposes only and not financial advice.


Now analyze:` },
];

if (fileUploadResult?.url) {
  parts.push({
    inlineData: {
      mimeType: req.file.mimetype, // e.g. "image/png" or "image/jpeg"
      data: Buffer.from(req.file.buffer).toString("base64"),
    },
  });
}

if (req.body.text) {
  parts.push({ text: `User query: ${req.body.text}` });
}

const result = await model.generateContent({ contents: [{ role: "user", parts }] });

    const response = await result.response;
    const output = response.text();
    const cleanedJson = output
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    res.status(200).json({ parsed:cleanedJson });
  }
  catch(error){
    console.error("Error parsing with AI:", error);
    res.status(500).json({
      message: "Failed to parse invoice data from text.",
      details: error.message,
      });
  }
};

export {parseResponseFromText};