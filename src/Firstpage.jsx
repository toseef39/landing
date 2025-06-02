import React, { useState } from "react";
import FeesAndCharges from "./FeesAndCharges";
import { useNavigate } from "react-router-dom";

function Firstpage() {
    const navigate = useNavigate()
  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = () => {
  if (!phone.match(/^03\d{9}$/)) {
    setError("Invalid phone number format (e.g., 03xxxxxxxxx)");
    return;
  }
  if (!agreed) {
    setError("You must agree to all policies.");
    return;
  }

  setError("");
  
  navigate("/feecharges"); // ✅ Navigate only when all checks pass
};

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-red-300 to-red-700 flex items-center justify-center px-4">
      {/* Top-left Login/Register */}
      <header className="flex items-center justify-between px-4 py-3 border-b shadow-sm">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Bank Muscat Logo" className="h-6" />
             
            </div>
      
            <div className="flex items-center space-x-2"></div>
          </header>
      <h2 className="absolute top-6 left-6 text-white text-2xl font-semibold">
        Login/Register
      </h2>

      <div className="w-full max-w-sm flex flex-col ">
        <h1 className="text-xl text-white font-[cursive] mb-2 drop-shadow-md">
          MAXIMUS
        </h1>
        <p className=" text-sm text-gray-600 mb-1">
          <span className="font-bold text-xl font-[cursive] text-white">OMR 20,000</span>
        </p>
        <p className=" text-xs text-white mb-4">
          Get a loan only within 3–5 minutes!
        </p>
        {/* Card */}
        <div className="w-full bg-white rounded-2xl shadow-md p-6">
        
          <label className="block text-xl font-semibold text-green-800 mb-1">
           Enter Your Bank Register Number
          </label>
          <input
            type="text"
            placeholder="Enter Your Bank Register Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 mb-2"
          />

          {/* Agreement checkbox */}
          <div className="flex items-start space-x-2 mb-3">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="accent-green-600 mt-1"
            />
            <p className="text-xs text-gray-600">
              I have read and agree with{" "}
              <a href="#" className="text-blue-500 underline">
                Privacy Policy
              </a>
              ,{" "}
              <a href="#" className="text-blue-500 underline">
                Terms & Conditions
              </a>{" "}
              and{" "}
              <a href="#" className="text-blue-500 underline">
                User Data Policy
              </a>
            </p>
          </div>

          {/* Error message */}
          {error && <p className="text-xs text-red-500 mb-2">{error}</p>}

          {/* Next button */}
          <button
            onClick={handleSubmit}
            disabled={!agreed}
            className={`w-full ${
              agreed ? "bg-yellow-400 hover:bg-yellow-500" : "bg-yellow-500"
            } text-white font-semibold py-2 rounded-full transition`}
          >
            Next
          </button>

          {/* Footer */}
          <div className="text-center text-xs text-gray-500 mt-5 leading-tight">
            <p className="font-semibold">[ Licensed By SECP ]</p>
            <p>
              Powered by Gold Lion Financials Private Limited
              <br />
              Licensed No. SECP/LRD/89/GLFPL/2022-36
            </p>
          </div>
        </div>
      </div>
    </div>
   
  );
}

export default Firstpage;
