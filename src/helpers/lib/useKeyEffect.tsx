import { useEffect } from 'react';

const useKeyEffect = (key: KeyboardEvent['key'], onKey: () => void) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === key) {
        onKey();
      }
    };
    window.addEventListener('keydown', handleKey);

    return () => {
      window.removeEventListener('keydown', handleKey);
    };
  }, []);
};

export default useKeyEffect;
