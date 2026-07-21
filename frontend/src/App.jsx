import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    
    const apiUrl = import.meta.env.VITE_API_URL;

    axios
      .get(`${apiUrl}/`)
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error("API error:", error);
        setMessage("Backend se connect nahi ho paya!");
      });
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">
          E-Commerce Frontend
        </h1>
        <p className="text-gray-700 font-medium border p-4 bg-gray-50 rounded">
          Backend Response: {message}
        </p>
      </div>
    </div>
  );
}

export default App;
