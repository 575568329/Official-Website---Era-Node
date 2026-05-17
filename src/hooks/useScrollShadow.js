import { useState, useEffect } from 'react';

// 滚动超过指定距离后返回 true
export function useScrollShadow(threshold = 50) {
  const [showShadow, setShowShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowShadow(window.scrollY > threshold);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return showShadow;
}
