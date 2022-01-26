import React, { useEffect, useState } from 'react';

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    window.addEventListener('resize', () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    });

    return () => {
      window.removeEventListener(('resize', () => {}));
    };
  }, []);

  return windowSize;
};

export default useWindowSize;
