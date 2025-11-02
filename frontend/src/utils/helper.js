export const  validateEmail=(email)=>{
    const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!email) return "email os required";
    if(!emailRegex.test(email)) return "Please enter a valid email address";
    return"";
};

export const validatePassword=(password)=>{
    if(!password) return "password is required";
    if(password.legnth<6) return"password must be at least 6 charcters";
    return "";
};


export const formatAIResponse = (data) => {
  // 1️⃣ Handle missing or invalid data
  if (!data) return "No response received.";

  // 2️⃣ If it's a string (e.g., markdown like the parsed example)
  if (typeof data === "string") {
    // Try to detect "parsed:" or markdown formatting and return as-is
    if (
      data.trim().startsWith("**parsed:**") ||
      data.includes("📈") ||
      data.includes("**") ||
      data.includes("*") ||
      data.includes("\n")
    ) {
      return data.trim();
    }

    // Otherwise just return the raw text
    return String(data);
  }

  // 3️⃣ If it's an object (AI returned JSON-like structure)
  if (typeof data === "object") {
    // If it contains a markdown field (common for GPT APIs)
    if (data.parsed || data.text) {
      return data.parsed || data.text;
    }

    // Otherwise format nested objects into markdown
    const formatted = Object.entries(data)
      .map(([key, value]) => {
        if (typeof value === "object" && value !== null) {
          const nested = Object.entries(value)
            .map(([subKey, subVal]) => `• **${subKey}:** ${String(subVal)}`)
            .join("\n");
          return `**${key}:**\n${nested}`;
        }
        return `**${key}:** ${String(value)}`;
      })
      .join("\n\n");

    return formatted;
  }

  // 4️⃣ Default fallback
  return String(data);
};
