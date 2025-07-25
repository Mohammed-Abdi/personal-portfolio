export default function Sad(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={64}
      height={64}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 15c-3.25 0 -4.5 0 -4.5 0c0 0 0.45 0 1 0c0.75 0 0.5 0 3.5 0c3 0 2.75 0 3.5 0c0.55 0 1 0 1 0c0 0 -1.25 0 -4.5 0Z"
      >
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.1s"
          dur="0.2s"
          values="M12 15c-3.25 0 -4.5 0 -4.5 0c0 0 0.45 0 1 0c0.75 0 0.5 0 3.5 0c3 0 2.75 0 3.5 0c0.55 0 1 0 1 0c0 0 -1.25 0 -4.5 0Z;M12 13c-3.25 0 -4.5 2.45 -4.5 3c0 0.55 0.45 1 1 1c0.75 0 0.5 -0.5 3.5 -0.5c3 0 2.75 0.5 3.5 0.5c0.55 0 1 -0.45 1 -1c0 -0.55 -1.25 -3 -4.5 -3Z"
        ></animate>
      </path>
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
      >
        <path
          strokeDasharray={64}
          strokeDashoffset={64}
          d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9"
        >
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.6s"
            values="64;0"
          ></animate>
        </path>
        <path strokeDasharray={2} strokeDashoffset={2} d="M9 9v1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.7s"
            dur="0.2s"
            values="2;0"
          ></animate>
        </path>
        <path strokeDasharray={2} strokeDashoffset={2} d="M15 9v1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.9s"
            dur="0.2s"
            values="2;0"
          ></animate>
        </path>
      </g>
    </svg>
  );
}
