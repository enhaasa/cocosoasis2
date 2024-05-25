import { useState, useEffect, useRef } from 'react';

const LazyLoadWrapper = ({ children, placeholder = null }: any) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observe = () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }
    };

    if (document.readyState === 'complete') {
      observe();
    } else {
      window.addEventListener('load', observe, { once: true });
    }

    return () => window.removeEventListener('load', observe);
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash && !isVisible) {
      const targetElement = document.getElementById(hash.substring(1));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [isVisible]);

  return (
    <div ref={elementRef}>
      {isVisible ? children : placeholder}
    </div>
  );
};

export default LazyLoadWrapper;
