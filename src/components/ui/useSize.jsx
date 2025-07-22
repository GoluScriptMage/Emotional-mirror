import { useEffect, useState } from 'react';

const useCardSize = () => {
  const [size, setSize] = useState('md');

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      if (width < 480) setSize('sm');
      else if (width < 768) setSize('md');
      else if (width < 1024) setSize('lg');
      else setSize('xl');
    };

    updateSize(); // initial call
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return size;
};