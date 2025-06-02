import React from "react";
import logo from "../src/assets/bank.png";
const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-3 border-b shadow-sm">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Bank Muscat Logo" className="h-6" />
       
      </div>

      <div className="flex items-center space-x-2"></div>
    </header>
  );
};

const FeesAndCharges = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="p-4 md:p-8">
        <h2 className="text-lg font-semibold mb-4">Fees and Charges:</h2>

        <div className="overflow-x-auto border rounded-lg shadow">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="text-left p-3 border-r w-1/3">Description</th>
                <th className="text-left p-3">Total Amount (with VAT)</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr className="border-b">
                <td className="p-3 border-r font-medium">Personal Loan</td>
                <td className="p-3"> 5000 OMR </td>
              </tr>
              <tr className="border-b">
                <td className="p-3 border-r font-medium">Personal Loan</td>
                <td className="p-3">10,000 OMR </td>
              </tr>
              <tr className="border-b">
                <td className="p-3 border-r font-medium">Business Loan </td>
                <td className="p-3">20,000 OMR </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default FeesAndCharges;
