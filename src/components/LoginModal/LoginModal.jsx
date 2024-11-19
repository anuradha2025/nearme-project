import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import styles from "./LoginModal.module.css";

import { FcGoogle } from "react-icons/fc";

import { FaFacebook } from "react-icons/fa";

const LoginModal = ({ isOpen, onClose }) => {
  const [phone, setPhone] = useState("");
  const [valid, setValid] = useState(false);

  if (!isOpen) return null;

  const handleLogin = () => {
    if (valid) {
      console.log("Logging in with:", phone);
    } else {
      console.log("Please enter a valid phone number");
    }
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={handleBackdropClick}>

      <div
        className="container flex flex-col md:flex-row justify-between p-4 md:p-8 pb-4 border-2 border-white max-w-4xl relative"
        style={{ borderRadius: "0.8rem" }}
      >

        {/* Close button */}
        <button
          onClick={onClose}
          className={styles.closeButton}
          aria-label="Close modal"
        >
          ×
        </button>

        {/* Left Section */}
        <div className="flex flex-col justify-start p-4 md:p-8 w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-light mb-4">Login</h1>
          <p className="text-gray-600 text-justify text-sm leading-tight quicksand">
            Log in to find the best services and products near you. Access
            personalized recommendations and manage your preferences.
          </p>
        </div>

        {/* Divider */}
        <div className={`${styles.divider} hidden md:block`} />

        {/* Right Section */}
        <div className="flex flex-col justify-center p-4 md:p-8 w-full md:w-1/2">

          <h3 className="text-gray-600 quicksand text-lg mb-2">

            Continue with mobile number & OTP
          </h3>
          <div className="flex flex-col justify-between text-center">

            <div className={styles.phoneInputContainer}>

              <PhoneInput
                country={"lk"}
                value={phone}
                onChange={(phone, country, e, formattedValue) => {
                  setPhone(phone);
                  setValid(phone.length >= 10);
                }}
                inputClass="!w-full !h-10 !text-base"
                containerClass="mb-2"
                buttonClass="!h-10"
                enableSearch
                searchClass="!text-base"
                searchPlaceholder="Search country..."
                inputProps={{
                  required: true,
                  placeholder: "Enter phone number",
                }}
              />
            </div>
            <button
              onClick={handleLogin}
              disabled={!valid}
              className={`bg-red-600 text-white border-none py-3 mt-3 cursor-pointer transition-colors ${!valid ? "opacity-50 !cursor-not-allowed" : "hover:bg-red-700"}`}
              style={{
                borderRadius: "0.9rem",
              }}
            >

              Login
            </button>
            <h3 className="text-gray-600 quicksand my-5">OR</h3>
            <button
              onClick={() => console.log("Google login")}
              className={`${styles.socialLoginBtn} text-gray-500 hover:text-gray-600 py-3 mb-2 cursor-pointer font-medium  transition-colors flex items-center justify-center gap-2`}
            >
              <FcGoogle className="text-3xl" /> Continue with Google
            </button>
            <button
              onClick={() => console.log("Facebook login")}
              className={`${styles.socialLoginBtn} text-gray-500 hover:text-gray-600 py-3 mb-1 cursor-pointer font-medium  transition-colors flex items-center justify-center gap-2`}
            >
              <FaFacebook className="text-3xl text-blue-600" /> Continue with Facebook
            </button>
            <div className="mt-3">
              <p className="text-gray-600 quicksand">

                <span>By signing up for an account you agree to our</span>
                <br />
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >

                  Terms and Conditions
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
