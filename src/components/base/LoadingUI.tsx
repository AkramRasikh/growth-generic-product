import { LoaderPinwheel } from 'lucide-react';

const LoadingUI = () => (
  <div className='absolute top-1/2 left-1/2' data-testid='loading-ui'>
    <LoaderPinwheel className='animate-spin h-20 w-20 m-auto' />
  </div>
);

export default LoadingUI;
