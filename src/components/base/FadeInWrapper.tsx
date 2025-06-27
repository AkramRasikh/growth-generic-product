import { ReactNode, useEffect, useState } from 'react';

interface FadeInWrapperProps {
  children: ReactNode;
}

const FadeInWrapper = ({ children }: FadeInWrapperProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`transition-opacity duration-500 ${
        mounted ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {children}
    </div>
  );
};

export default FadeInWrapper;
