import React from "react"

const LoveIcon = ({ onClick, ...props }: { onClick: React.MouseEventHandler<HTMLOrSVGElement> | undefined }) => {
  return (
    <svg onClick={onClick} version="1.2" xmlns="http://www.w3.org/2000/svg" style={props} viewBox="0 0 960 960" width="32" height="32">
      <defs>
        <clipPath clipPathUnits="userSpaceOnUse" id="clip-path-love">
          <path d="m480.5 818c-188.85 0-341.5-152.65-341.5-341.5 0-188.85 152.65-341.5 341.5-341.5 188.85 0 341.5 152.65 341.5 341.5 0 188.85-152.65 341.5-341.5 341.5z" />
        </clipPath>
        <linearGradient id="gr1" x2="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(330.555,960,-960,330.555,314.723,0)">
          <stop offset="0" stopColor="#ff657c" />
          <stop offset=".01" stopColor="#ff657c" />
          <stop offset=".99" stopColor="#ec3653" />
          <stop offset="1" stopColor="#ec3653" />
        </linearGradient>
      </defs>
      <g clipPath="url(#clip-path-love)">
        <path id="Layer 4" style={{ fill: "#ffffff" }} d="m480.5 818c-188.8 0-341.5-152.7-341.5-341.5 0-188.8 152.7-341.5 341.5-341.5 188.8 0 341.5 152.7 341.5 341.5 0 188.8-152.7 341.5-341.5 341.5z" />
        <rect width="960" height="960" id="Gradient Fill 2 copy" style={{ fill: "url(#gr1)" }} />
      </g>
      <path id="Color Fill 1" style={{ fill: "#ffffff" }} d="m476.8 354.4c0 0 142.4-87.3 202.1 27.5 69.6 133.9-206.7 303.6-206.7 303.6 0 0-240.4-181.5-183.8-299 59.7-124 188.4-32.1 188.4-32.1z" />
    </svg>
  )
}

export default LoveIcon
