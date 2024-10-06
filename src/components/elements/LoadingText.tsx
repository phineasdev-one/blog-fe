// components/Loading.tsx
import React from 'react';

const LoadingText: React.FC = () => {
  return (
    <div className="loading-text">
      <span>Loading</span>
      <span className="dot dot1">.</span>
      <span className="dot dot2">.</span>
      <span className="dot dot3">.</span>
    </div>
  );
};

export default LoadingText;
