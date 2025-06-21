export default function Location(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={14}
      viewBox="0 0 24 24"
      {...props}
    >
      <mask id="lineMdMapMarkerFilledLoop0">
        <g
          fill="none"
          fillOpacity={0}
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        >
          <path
            fill="#fff"
            strokeDasharray={48}
            strokeDashoffset={48}
            d="M12 20.5c0 0 -6 -7 -6 -11.5c0 -3.31 2.69 -6 6 -6c3.31 0 6 2.69 6 6c0 4.5 -6 11.5 -6 11.5Z"
          >
            <animate
              fill="freeze"
              attributeName="fill-opacity"
              begin="0.7s"
              dur="0.5s"
              values="0;1"
            ></animate>
            <animate
              fill="freeze"
              attributeName="stroke-dashoffset"
              dur="0.6s"
              values="48;0"
            ></animate>
            <animateTransform
              attributeName="transform"
              dur="3s"
              keyTimes="0;0.3;0.4;0.54;0.6;0.68;0.7;1"
              repeatCount="indefinite"
              type="rotate"
              values="0 12 20.5;0 12 20.5;-8 12 20.5;0 12 20.5;5 12 20.5;-2 12 20.5;0 12 20.5;0 12 20.5"
            ></animateTransform>
          </path>
          <circle cx={12} cy={9} r={2.5} fill="#000" stroke="none">
            <animate
              fill="freeze"
              attributeName="fill-opacity"
              begin="1.2s"
              dur="0.5s"
              values="0;1"
            ></animate>
          </circle>
        </g>
      </mask>
      <rect
        width={24}
        height={24}
        fill="currentColor"
        mask="url(#lineMdMapMarkerFilledLoop0)"
      ></rect>
    </svg>
  );
}
