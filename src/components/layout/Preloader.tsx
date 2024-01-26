'use client';
import { useEffect, useState } from 'react';

const PreLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <div
      className={`preloader ${
        loading ? 'd-flex justify-content-center align-items-center' : 'd-none'
      }`}>
      <div className="centrize full-width">
        <div className="vertical-center">
          <img
            src={'/assets/imgs/template/loading-1.gif'}
            width={250}
            alt="loading"
          />
        </div>
      </div>
    </div>
  );
};
export default PreLoader;
