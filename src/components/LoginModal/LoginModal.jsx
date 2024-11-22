import React, { useState } from "react";
import Modal from "react-modal";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import styles from "./LoginModal.module.css";

import { FcGoogle } from "react-icons/fc";

import { FaFacebook } from "react-icons/fa";

import { Link } from "react-router-dom";

// Bind modal to appElement for accessibility
Modal.setAppElement("#root");

const LoginModal = ({ isOpen, onClose }) => {
  const [phone, setPhone] = useState("");
  const [valid, setValid] = useState(false);

  const handleLogin = () => {
    if (valid) {
      console.log("Logging in with:", phone);
    } else {
      console.log("Please enter a valid phone number");
    }
  };

  const customStyles = {
    overlay: {
      backgroundColor: "hsla(0, 0%, 45%, 0.5)",
      backdropFilter: "blur(2px)",
      zIndex: 1000,
    },

    content: {
      position: "absolute",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#EDEDED",
      width: "95%",
      maxWidth: "56rem",
      padding: 0,
      border: "2px solid white",
      borderRadius: "0.8rem",
      overflow: "auto",
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Login Modal"
      className={styles.modalAnimation}
    >
      <div className="container flex flex-col md:flex-row justify-between p-4 md:p-8 pb-4 relative">
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
          <h1 className="text-black text-3xl md:text-4xl font-light mb-4">
            Login
          </h1>
          <p className="signin-text text-justify text-sm leading-tight font-normal">
            Log in to find the best services and products near you. Access
            personalized recommendations and manage your preferences.
          </p>
        </div>
        {/* Divider */}
        <div
          className={`$ {
        styles.divider
      }

      hidden md:block`}
        />
        {/* Right Section */}
        <div className="flex flex-col justify-center p-4 md:p-8 w-full md:w-1/2">
          <h3 className="signin-text font-normal text-lg mb-2">
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
            <h3 className="text-gray-600 font-normal my-5">OR</h3>
            <button
              onClick={() => console.log("Google login")}
              className={`${styles.socialLoginBtn} py-3 mb-2 cursor-pointer font-medium transition-colors flex items-center justify-center gap-2`}
            >
              <FcGoogle className="text-3xl" /> Continue with Google
            </button>
            <button
              onClick={() => console.log("Facebook login")}
              className={`${styles.socialLoginBtn} py-3 mb-1 cursor-pointer font-medium transition-colors flex items-center justify-center gap-2`}
            >
              <FaFacebook className="text-3xl text-blue-600" /> Continue with
              Facebook
            </button>
            <div className="mt-3">
              <p className="text-gray-500 font-normal">
                <span className="no-word-break">
                  By signing up for an account you agree to our
                </span>
                <br />
                <a href="#" className={styles.termsAndConditions}>
                  Terms&nbsp;and&nbsp;Conditions
                </a>
              </p>
              <p className="text-gray-500 font-normal mt-5">
                <span className="no-word-break">Don't have an account?</span>
                &nbsp;&nbsp;&nbsp;
                <Link
                  to="/register"
                  state={{
                    from: "homepage",
                  }}
                  className="text-red-600 font-semibold"
                  onClick={onClose}
                >
                  Sign&nbsp;Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
