import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { signUp } from "../../api.communicators";


const VerifyOtp = () => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "unknown email"; // Fallback if email is missing

  const handleOtpSubmission = async (e) => {
    e.preventDefault();
    const formData = {
      ...location.state, // contains email from previous step
      otp,
    };
    try {
      console.log("printinf data in verifyotp component",formData);
      // Make the final sign-up call with the OTP and form data
      await signUp(formData, navigate);
    } catch (error) {
      console.error("Error verifying OTP and signing up:", error);
    }
  };

  return (
    <div>
      <h2>Verify Your Email</h2>
      <form onSubmit={handleOtpSubmission}>
        <label>
          Enter OTP sent to {email}:
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
        </label>
        <button type="submit">Verify OTP</button>
      </form>
    </div>
  );
};

export default VerifyOtp;

