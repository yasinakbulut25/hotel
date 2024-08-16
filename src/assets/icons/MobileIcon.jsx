import React from "react";

export const MobileIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="17" height="27" x="9" y="2" rx="2" ry="2" />
      <path d="M17.5 22h.1" />
    </svg>
  );
};

export default MobileIcon;
