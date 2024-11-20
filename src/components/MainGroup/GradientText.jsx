import React from "react";

const GradientText = ({
  text,
  gradientColors = [
    { color: "#e2509f", stop: "0%" },
    { color: "#CD853F", stop: "50%" },
    { color: "#de4e31", stop: "100%" },
  ],
}) => {
  const gradientString = `linear-gradient(120deg, ${gradientColors
    .map(({ color, stop }) => `${color} ${stop}`)
    .join(", ")})`;

  return (
    <h1
      style={{
        background: gradientString,
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        display: "inline-block",
        fontSize: "5em",
        fontWeight: "700",
        marginBottom: "0.7rem",
        zIndex: "-1",
      }}
    >
      {text}
    </h1>
  );
};

export default GradientText;
