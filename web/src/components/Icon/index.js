import React from "react";
import iconlib from "./iconlib";

const getSVG = (symbol) => iconlib[symbol];

const Icon = ({ symbol, size, color }) => {
  if (!symbol) return null;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color || "currentColor"}
    >
      {getSVG(symbol)}
    </svg>
  );
};

export default Icon;
