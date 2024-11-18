import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import styles from "./LoginModal.module.css";

const LoginModal = ({ isOpen, onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <IoClose size={24} />
        </button>

        <div className="flex flex-col md:flex-row">
          <div className={`${styles.modalColumn} ${styles.modalLeftColumn}`}>
            <div className="max-w-sm">
              <h1 className={styles.modalTitle}>Login</h1>
              <p className={styles.modalDescription}>
                Log in to find the best services and products near you. Access
                personalized recommendations and manage your preferences.
              </p>
            </div>
          </div>

          <div className={styles.modalColumn}>
            <div className="max-w-sm mx-auto">
              <div className="mb-6">
                <label className="block text-sm text-gray-600 mb-2">
                  Continue with mobile number & OTP
                </label>
                <div className={styles.phoneInput}>
                  <select className={styles.countrySelect}>
                    <option>+94</option>
                  </select>
                  <input
                    type="tel"
                    className={styles.numberInput}
                    placeholder="Enter mobile number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>

                <button className={styles.loginButton}>Login</button>
              </div>

              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 text-gray-500 bg-white">OR</span>
                </div>
              </div>

              <div className="space-y-4">
                <button className={styles.socialButton}>
                  <FcGoogle size={20} />
                  <span className="text-gray-600">Continue with Google</span>
                </button>

                <button className={styles.socialButton}>
                  <FaFacebook size={20} className="text-blue-600" />
                  <span className="text-gray-600">Continue with Facebook</span>
                </button>
              </div>

              <p className="text-center text-gray-500 text-sm mt-6">
                By signing up for an account you agree to our{" "}
                <a href="#" className="text-blue-500 hover:underline">
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
