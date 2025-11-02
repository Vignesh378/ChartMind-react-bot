import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-gray-200 flex flex-col items-center px-6 py-16">
      <h1 className="text-4xl font-bold mb-4 text-white">Contact Us</h1>
      <p className="text-gray-400 text-center mb-8">
        Have questions, suggestions, or feedback?  
        We’d love to hear from you — the ChartMind team is always listening.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-[#1a1a1a] p-8 rounded-2xl border border-gray-800 shadow-md w-full max-w-md"
      >
        <div className="mb-4">
          <label className="block text-gray-400 mb-2">Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-[#111] border border-gray-700 rounded-lg p-3 text-gray-200 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-400 mb-2">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-[#111] border border-gray-700 rounded-lg p-3 text-gray-200 outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-400 mb-2">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-[#111] border border-gray-700 rounded-lg p-3 text-gray-200 outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition-all text-white font-semibold py-3 rounded-lg"
        >
          Send Message
        </button>
      </form>

      <p className="mt-10 text-gray-500 text-sm">
        📧 Email us directly: <span className="text-blue-400">support@chartmind.ai</span>
      </p>
    </div>
  );
};

export default ContactUs;
