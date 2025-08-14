import React, { useEffect, useRef } from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  onIntersect?: (entry: IntersectionObserverEntry) => void;
}

const Section: React.FC<SectionProps> = ({ className = '', children, onIntersect }) => {
  const baseClass =
    "home py-32 grid grid-cols-1 md:grid-cols-2 gap-10 px-4 opacity-0 translate-y-40 transition-all duration-1500";
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      threshold: 0.2,
      rootMargin: "0px",
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          target.classList.remove("opacity-0");
          target.classList.remove("translate-y-40");

          if (onIntersect) {
            onIntersect(entry);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [onIntersect]);

  return (
    <section ref={sectionRef} className={`${baseClass} ${className}`}>
      {children}
    </section>
  );
};

export default Section;
