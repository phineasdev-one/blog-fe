// components/SkeletonLoader.js
import React, { FC } from 'react';

import styles from './SkeletonLoader.module.css';

type Props = {
  className?: string;
};

const SkeletonLoader: FC<Props> = ({ className }) => {
  return (
    <div
      className={`${styles.skeleton} ${styles.skeletonImage} ${className}`}></div>
  );
};

export default SkeletonLoader;
