import React, { useState, useEffect } from 'react';

// Custom throttle hook
function useThrottle(callback, limit) {
  const [lastExecuted, setLastExecuted] = useState(0);

  const throttle = (...args) => {
    const now = new Date().getTime();
    if (now - lastExecuted >= limit) {
      callback(...args);
      setLastExecuted(now);
    }
  };

  return throttle;
}

function ScrollComponent() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const throttledScroll = useThrottle((e) => {
    setScrollPosition(e.scrollY);
    console.log('Scrolled:', e.scrollY);
  }, 200); // Throttle interval of 200ms

  useEffect(() => {
    const handleScroll = (event) => {
      throttledScroll(event.target);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [throttledScroll]);

  return (
    <div style={{ height: '2000px' }}>
      <h1>Scroll Position: {scrollPosition}</h1>
    </div>
  );
}

export default ScrollComponent;
