const BackgroundEllipses = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Large top ellipse */}
      <svg
        className="absolute -top-[300px] -left-[200px]"
        width="1200"
        height="800"
        viewBox="0 0 1200 800"
        fill="none"
      >
        <ellipse
          cx="600"
          cy="400"
          rx="600"
          ry="300"
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="1"
          fill="none"
        />
      </svg>

      {/* Medium middle ellipse */}
      <svg
        className="absolute top-[100px] -right-[300px]"
        width="1000"
        height="600"
        viewBox="0 0 1000 600"
        fill="none"
      >
        <ellipse
          cx="500"
          cy="300"
          rx="500"
          ry="250"
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="1"
          fill="none"
        />
      </svg>

      {/* Bottom ellipse */}
      <svg
        className="absolute bottom-[-200px] -left-[100px]"
        width="1400"
        height="800"
        viewBox="0 0 1400 800"
        fill="none"
      >
        <ellipse
          cx="700"
          cy="400"
          rx="700"
          ry="350"
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="1"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default BackgroundEllipses;
