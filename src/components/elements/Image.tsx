'use client';
import React, {
  useState,
  FC,
  ImgHTMLAttributes,
  useEffect,
  useRef,
} from 'react';

import styles from './SkeletonLoader.module.css';

interface ImageWithSkeletonProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

const ImageWithSkeleton: FC<ImageWithSkeletonProps> = ({
  src,
  alt,
  className,
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => setLoaded(true);

  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (imageRef.current && imageRef.current.complete) {
      setLoaded(true);
    }
  }, []);

  return (
    <div className={`${styles.imageWrapper} ${className}`}>
      {!loaded && <div className={styles.skeleton}></div>}
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className={`${styles.image} ${loaded ? styles.loaded : ''}`}
        onLoad={handleImageLoad}
        {...props}
      />
    </div>
  );
};

export default ImageWithSkeleton;
