import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-gray-200 flex flex-col items-center px-6 py-16">
      <h1 className="text-4xl font-bold mb-6 text-center text-white">
        About <span className="text-blue-400">ChartMind</span>
      </h1>
      <p className="max-w-3xl text-center text-lg text-gray-400 leading-relaxed">
        ChartMind is an AI-powered trading companion that helps you understand
        the markets like never before. Our mission is to make technical analysis
        simple, smart, and conversational.
      </p>

      <div className="mt-10 grid md:grid-cols-3 gap-8 max-w-5xl">
        <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-gray-800">
          <h3 className="text-xl font-semibold text-blue-400 mb-2">
            🧠 AI Market Insights
          </h3>
          <p className="text-gray-400">
            Get instant chart analysis, pattern recognition, and trading
            suggestions powered by advanced AI models.
          </p>
        </div>

        <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-gray-800">
          <h3 className="text-xl font-semibold text-blue-400 mb-2">
            💬 Conversational Learning
          </h3>
          <p className="text-gray-400">
            Learn technical analysis concepts through real-time conversations
            with ChartMind’s intelligent chat interface.
          </p>
        </div>

        <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-gray-800">
          <h3 className="text-xl font-semibold text-blue-400 mb-2">
            📊 Smarter Decisions
          </h3>
          <p className="text-gray-400">
            Use data-driven insights to improve your entries, stop-loss, and
            take-profit levels with confidence.
          </p>
        </div>
      </div>

      <p className="mt-10 text-gray-500 text-center text-sm max-w-2xl">
        ChartMind is built for traders, learners, and investors who want to
        blend AI intelligence with market experience.  
        <br />
        We believe in empowering users to trade smarter — not harder.
      </p>
    </div>
  );
};

export default AboutUs;
