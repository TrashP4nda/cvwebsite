import React, { useEffect, useState } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';

function AnimatedText({ children }) {
  
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {

    function checkScreenSize() {
      const isSmallScreen = window.innerWidth < 1300;
      setShouldAnimate(!isSmallScreen);
    }

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  if (!shouldAnimate) {
    
    return (
      <p className={`typewriter`}>
        {children}
      </p>
    );
  }

  return (
    <AnimationOnScroll animateIn="textAnim" duration="5s">
      <p className={`typewriter`}>
        {children}
      </p>
    </AnimationOnScroll>
  );
}

export default AnimatedText;