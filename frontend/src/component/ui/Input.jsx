import React, { useRef } from "react";
import { Send } from "lucide-react";

function Input({ handleSend, setFile, file }) {
  const fileRef = useRef();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleClick = () => {
    handleSend();
    if (fileRef.current) fileRef.current.value = ""; // clear file input
  };

  return (
    <div className="w-full border-t border-gray-800 p-4">
      <div className="flex items-center bg-[#1e1e1e] rounded-full px-4 py-2">
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="flex-1 bg-transparent outline-none text-gray-200 placeholder-gray-500 px-2"
        />
        <button onClick={handleClick}>
          <Send className="w-5 h-5 text-gray-400 hover:text-white" />
        </button>
      </div>
    </div>
  );
}

export default Input;
