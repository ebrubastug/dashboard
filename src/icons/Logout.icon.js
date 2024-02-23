import * as React from "react";

export const Logout = ({ pathColor = "#fff" }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"

    >
      <path
        d="M7.2 22.0039L9.8 22.0039C13 22.0039 15 20.0039 15 16.8039V12.7539L8.75 12.7539C8.34 12.7539 8 12.4139 8 12.0039C8 11.5939 8.34 11.2539 8.75 11.2539L15 11.2539V7.20391C15 4.00391 13 2.00391 9.8 2.00391L7.21 2.00391C4.01 2.00391 2.01 4.00391 2.01 7.20391L2.01 16.8039C2 20.0039 4 22.0039 7.2 22.0039Z"
        fill={pathColor}
      />
      <path
        d="M19.44 12.7539L17.37 14.8239C17.22 14.9739 17.15 15.1639 17.15 15.3539C17.15 15.5439 17.22 15.7439 17.37 15.8839C17.66 16.1739 18.14 16.1739 18.43 15.8839L21.78 12.5339C22.07 12.2439 22.07 11.7639 21.78 11.4739L18.43 8.12391C18.14 7.83391 17.66 7.83391 17.37 8.12391C17.08 8.41391 17.08 8.89391 17.37 9.18391L19.44 11.2539L15 11.2539V12.7539L19.44 12.7539Z"
        fill={pathColor}
      />
    </svg>
  );
};
