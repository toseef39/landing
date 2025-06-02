import React from "react";
import FeesAndCharges from "./FeesAndCharges";
import { Routes, Route } from "react-router-dom";
import Firstpage from "./Firstpage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Firstpage />} />
        <Route path="/feecharges" element={<FeesAndCharges />} />
      </Routes>
    </>
  );
}

export default App;
