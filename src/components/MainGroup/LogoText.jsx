import React from "react";

const LogoText = ({
  text,
  gradientColors = [
    { color: "#e2509f", stop: "0%" },
    { color: "#d9a441", stop: "45%" },
    { color: "#de4e31", stop: "100%" },
  ],
  fontSize = "5em",
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
        fontSize: fontSize,
        fontWeight: "700",
        marginBottom: "0.7rem",
        zIndex: "-1",
      }}
    >
      {text}
    </h1>
  );
};

export default LogoText;
