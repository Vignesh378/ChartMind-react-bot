import React, { useEffect, useState, useRef } from "react";
import { Loader2 } from "lucide-react";
import axiosInstance from "../../utils/axiosInstance.js";
import { API_PATHS } from "../../utils/apiPath.js";
import { useAuth } from "../../context/AuthContext.jsx";
import Input from "../../component/ui/Input.jsx";
import { formatAIResponse } from "../../utils/helper.js";
function Generator() {
  const { user, loading } = useAuth();
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("chatMessages");
    return saved ? JSON.parse(saved) : [];
  });

  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState(null);
  const [input, setInput] = useState("");
  const [symbol, setSymbol] = useState("");
  const chatEndRef = useRef(null);
  const [listening, setListening] = useState(false);

  // ✅ Save chat history
  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);

  // ✅ Greet user
  useEffect(() => {
    if (!loading && user) {
      setMessages((prev) => {
        if (prev.length === 0) {
          return [
            { sender: "ai", text: `Hello ${user.name}, how can I assist you today?` },
          ];
        }
        return prev;
      });
    }
  }, [user, loading]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (loading) return <div>Loading...</div>;

  // Handle file upload + AI request
  const handleSend = async () => {
    if (!file && !input.trim()) return;
     console.log("Sending file:", file);
    const userMessage = {
      sender: "user",
      text: file ? file.name : input 
    };

    setMessages((prev) => [...prev, userMessage, { sender: "ai", type: "loading" }]);
    setIsLoading(true);

    try {
    
    const formData = new FormData();
      
     formData.append("file", file);

      


const response = await axiosInstance.post(API_PATHS.AI.GENERATE, formData, {
  headers: {
    "Content-Type": "multipart/form-data",
  },
});


      let data = response.data;
      if (typeof data === "string") {
        try {
          data = JSON.parse(data);
        } catch {
          data = { text: data };
        }
      }

      // ✅ Replace loading message with AI response
      const aiMessage = {
        sender: "ai",
        text: formatAIResponse(data),
      };

      setMessages((prev) => {
        const updated = [...prev];
        const index = updated.findIndex((msg) => msg.type === "loading");
        if (index !== -1) updated[index] = aiMessage;
        return updated;
      });
    } catch (error) {
      console.error(error);
      setMessages((prev) => {
        const updated = [...prev];
        const index = updated.findIndex((msg) => msg.type === "loading");
        if (index !== -1)
          updated[index] = { sender: "ai", text: "❌ Sorry, something went wrong." };
        return updated;
      });
    } finally {
      setIsLoading(false);
      setInput("");
      setFile(null);
    }
  };


 

  return (
    <div className="flex flex-col h-screen bg-[#111111] text-gray-200">
      {/* Chat Display */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-3 rounded-2xl max-w-[75%] whitespace-pre-wrap ${
                msg.sender === "user"
                  ? "bg-[#2c2c2c] text-white"
                  : "bg-[#1a1a1a] text-gray-300 border border-gray-700"
              }`}
            >
              {msg.type === "loading" ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                msg.text
              )}
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Input Bar */}
      <Input
       
        handleSend={handleSend}
        
        file={file}
        setFile={setFile}
      />
    </div>
  );
}

export default Generator;
