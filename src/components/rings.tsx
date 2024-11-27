const Rings = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-[1100px]"
      style={{
        zIndex: 0,
      }}
    >
      <ellipse
        cx="35%"
        cy="50%"
        rx="30%"
        ry="18%"
        fill="none"
        stroke="rgba(255, 255, 255, 0.1)"
        strokeWidth="2"
        style={{
          transform: 'rotate(15deg)',
          transformOrigin: 'center',
        }}
      />
      <ellipse
        cx="35%"
        cy="50%"
        rx="60%"
        ry="32%"
        fill="none"
        stroke="rgba(255, 255, 255, 0.07)"
        strokeWidth="2"
        style={{
          transform: 'rotate(15deg)',
          transformOrigin: 'center',
        }}
      />
      <ellipse
        cx="35%"
        cy="50%"
        rx="70%"
        ry="48%"
        fill="none"
        stroke="rgba(255, 255, 255, 0.05)"
        strokeWidth="2"
        style={{
          transform: 'rotate(15deg)',
          transformOrigin: 'center',
        }}
      />
      <circle cx="80%" cy="30%" r="1.5" fill="white" opacity="0.5" />
      <circle cx="15%" cy="20%" r="1.5" fill="white" opacity="0.5" />
      <circle cx="25%" cy="70%" r="1.5" fill="white" opacity="0.5" />
    </svg>
  );
};

export default Rings;
