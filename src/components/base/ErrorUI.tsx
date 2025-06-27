import { SkullIcon } from 'lucide-react';
import CenterScreenWrapper from './CenterScreenWrapper';

interface ErrorUIProps {
  errorMessage: string;
}

const ErrorUI = ({ errorMessage }: ErrorUIProps) => (
  <CenterScreenWrapper>
    <div className='flex flex-col gap-10 m-auto'>
      <p className='text-2xl'>{errorMessage}</p>
      <SkullIcon className='animate-pulse h-20 w-20 m-auto' color='red' />
    </div>
  </CenterScreenWrapper>
);

export default ErrorUI;
