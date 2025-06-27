import { ReactNode } from 'react';

interface CenterScreenWrapperProps {
  children: ReactNode;
}

const CenterScreenWrapper = ({ children }: CenterScreenWrapperProps) => (
  <div className='absolute top-1/2 left-1/2'>{children}</div>
);

export default CenterScreenWrapper;
