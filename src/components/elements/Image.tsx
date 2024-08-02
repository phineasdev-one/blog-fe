'use client';
import React, { useState, useRef, useEffect, CSSProperties } from 'react';

import styles from './SkeletonLoader.module.css';

type ImageWithSkeletonProps = {
  src: string;
  alt: string;
  className?: string;
  style?: CSSProperties;
};

const ImageWithSkeleton: React.FC<ImageWithSkeletonProps> = ({
  src,
  alt,
  className,
  style,
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const handleLoad = () => setLoaded(true);

  useEffect(() => {
    if (imageRef.current && imageRef.current.complete) {
      setLoaded(true);
    }
  }, []);

  return (
    <div className={`${styles.wrapper} ${className}`}>
      {!loaded && (
        <div className={styles.skeleton}>
          <div className={styles.skeletonImage}></div>
        </div>
      )}

      <img
        src={src}
        alt={alt}
        {...props}
        ref={imageRef}
        onLoad={handleLoad}
        style={{ display: loaded ? 'block' : 'none', ...style }}
        className={className}
      />
    </div>
  );
};

export default ImageWithSkeleton;
