const ExclamationIcon = ({ className = "", ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 284 284"
      className={className}
      {...props}
    >
      <circle cx="142" cy="142" r="142" fill="#d42c2c" />
      <rect x="131" y="71" width="22" height="110" fill="#f3f3f3" />
      <rect x="131" y="190.58" width="22" height="22.42" fill="#f3f3f3" />
    </svg>
  );
};
export default ExclamationIcon;
