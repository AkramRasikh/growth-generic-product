import { ReactNode } from 'react';
import LoadingUI from './LoadingUI';
import ErrorUI from './ErrorUI';

interface PageContainerProps {
  isLoading: boolean;
  children: ReactNode;
  errorMessage?: string;
}

const PageContainer = ({
  isLoading,
  errorMessage,
  children,
}: PageContainerProps) => (
  <div className='bg-amber-50 h-lvh'>
    {isLoading ? (
      <LoadingUI />
    ) : errorMessage ? (
      <ErrorUI errorMessage={errorMessage} />
    ) : (
      children
    )}
  </div>
);

export default PageContainer;
