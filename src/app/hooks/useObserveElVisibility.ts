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
    const element = ref.current; //

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.6 },
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { scrollToOrder };
};

export default useObserveElVisibility;
