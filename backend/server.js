import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import "./config/env.js";
import aiRouter from "./routers/ai.routes.js"
import authRouter from "./routers/User.routes.js"

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(cors({
    origin: 'https://chart-mind-react-bot-ck89.vercel.app', // Replace with your frontend URL
    credentials: true,
    allowedHeaders: [
        'Content-Type',
        'Authorization',
        'Accept',
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
     preflightContinue: false,
    optionsSuccessStatus: 204
}));

connectDB();    

app.get('/', (req, res) => {
    try {
      
        res.json({ message: 'Welcome to AIChartBot API' });
    } catch (error) {
        res.status(500).json({ message: 'Database connection failed', error: error.message });
    }
});



app.use("/api/ai",aiRouter);
app.use("/api/auth",authRouter);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

// For local development
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
        console.log(`Server running in development mode on port ${PORT}`);
    });
}

// For Vercel serverless deployment
export default app;