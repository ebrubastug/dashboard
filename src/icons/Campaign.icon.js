import * as React from "react";

export const Campaign = ({ pathColor = "#292D32" }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.3">
        <path
          d="M11.97 2C6.45 2 1.97 6.48 1.97 12C1.97 17.52 6.45 22 11.97 22C17.49 22 21.97 17.52 21.97 12C21.97 6.48 17.5 2 11.97 2ZM15.72 12.35L12 16.58L11.56 17.08C10.95 17.77 10.45 17.59 10.45 16.66V12.7H8.75C7.98 12.7 7.77 12.23 8.28 11.65L12 7.42L12.44 6.92C13.05 6.23 13.55 6.41 13.55 7.34V11.3H15.25C16.02 11.3 16.23 11.77 15.72 12.35Z"
          fill={pathColor}
        />
      </g>
    </svg>
  );
};
