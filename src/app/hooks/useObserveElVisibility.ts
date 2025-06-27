import { RefObject, useEffect } from 'react';

interface UseObserveElVisibilityProps {
  ref: RefObject<HTMLDivElement>;
  setIsVisible: (bool: boolean) => void;
}

const useObserveElVisibility = ({
  ref,
  setIsVisible,
}: UseObserveElVisibilityProps) => {
  const scrollToOrder = () => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      setIsVisible(true);
    }
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.6 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return { scrollToOrder };
};

export default useObserveElVisibility;
