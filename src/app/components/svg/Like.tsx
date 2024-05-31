const LikeIcon = ({ ...props }) => {
  return (
    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 960 960" width="32" height="32" style={props}>
      <defs>
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath113">
          <path d="m480 930.41c-249.07 0-450.41-201.34-450.41-450.41 0-249.07 201.34-450.41 450.41-450.41 249.07 0 450.41 201.34 450.41 450.41 0 249.07-201.34 450.41-450.41 450.41z" />
        </clipPath>
        <linearGradient id="gradient34243" x2="1" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-960,50.311,-50.311,-960,960,454.844)">
          <stop offset="0" stopColor="#0866ff" />
          <stop offset="1" stopColor="#0048bd" />
        </linearGradient>
      </defs>
      <g clipPath="url(#clipPath113)">
        <path id="Layer 1" style={{ fill: "#7e7e7e" }} d="m480 930.4c-249.1 0-450.4-201.3-450.4-450.4 0-249.1 201.3-450.4 450.4-450.4 249.1 0 450.4 201.3 450.4 450.4 0 249.1-201.3 450.4-450.4 450.4z" />
        <rect width="960" height="960" id="Gradient Fill 1" style={{ fill: "url(#gradient34243)" }} />
      </g>
      <path
        id="Layer"
        style={{ fill: "#ffffff" }}
        d="m660.8 732.3h-321.6v-380l204.6-204.6 36.6 36.6q5.1 5.1 8.4 13.8 3.3 8.8 3.3 16.8v10.3l-32.2 127.1h188.5q23.4 0 41 17.6 17.5 17.5 17.5 40.9v58.4q0 5.1-1.5 11-1.4 5.8-2.9 10.9l-87.7 206.1q-6.5 14.6-21.9 24.9-15.3 10.2-32.1 10.2zm-321.6-380l-31.6 0.2-0.7 379.6 32.3 0.2h-146.1v-380z"
      />
    </svg>
  )
}

export default LikeIcon
