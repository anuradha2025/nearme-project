import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import styles from "./TopBannerOffer.module.css";

const TopBannerOffer = ({
  discount = "45% OFF",
  title = "Exclusive Deals Near You!",
  description = "Save big on top services and products in your area. Limited-time offers—don't miss out!",
  backgroundColor = "#f0f0f0",
  textColor = "#000000",
  accentColor = "#ff4444",
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show banner after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`${styles.animateSlideDown} fixed top-6 left-4 right-4 sm:left-16 sm:right-16 z-50 opacity-90`}
    >
      <div
        className="relative flex flex-col sm:flex-row items-center justify-center px-4 py-3 rounded-lg sm:rounded-full"
        style={{ backgroundColor }}
      >
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
          {/* Discount Section */}
          <div
            className="text-lg sm:text-xl font-bold text-center whitespace-nowrap w-full sm:w-2/12"
            style={{ color: accentColor }}
          >
            {discount}
          </div>

          {/* Vertical Divider */}
          <div
            className="hidden sm:block h-6 w-px"
            style={{ backgroundColor: "#bbb" }}
          />

          {/* Main Content */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 w-full sm:w-10/12">
            <span
              className="font-semibold text-lg sm:text-xl text-center sm:text-left"
              style={{ color: textColor }}
            >
              {title}
            </span>
            <span className="text-xs sm:text-sm" style={{ color: textColor }}>
              {description}
            </span>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 hover:bg-black/10 rounded-full transition-colors w-fit self-end sm:self-auto"
            aria-label="Close promotion banner"
          >
            <X size={20} className="text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBannerOffer;
