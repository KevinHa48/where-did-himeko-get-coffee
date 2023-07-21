const SelectionArrow = ({ className = "", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 217.95 198.8"
    className={className}
    {...props}
  >
    <path d="M196.42,71.4" fill="#fff" stroke="#000" stroke-miterlimit="10" />
    <polygon
      points="75.5 154.65 75.44 154.61 75.44 189.4 209 99.4 75.44 9.4 75.44 48.59 75.5 48.55 75.5 154.65"
      stroke="#fff"
      strokeMiterlimit="10"
      strokeWidth="10"
    />
    <polygon points="8.93 99.4 74.94 54.77 140.94 99.4 74.94 144.02 8.93 99.4" />
    <path
      d="M74.93,60.81,132,99.4,74.93,138,17.86,99.4,74.93,60.81m0-12.07-.06,0L0,99.4,74.87,150l.06.05L149.87,99.4,74.93,48.74Z"
      fill="#fff"
    />
  </svg>
);

export default SelectionArrow;
