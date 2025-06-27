import { Button } from '@/components/ui/button';
import useData from '../context/useData';

const ScrollToCheckoutBtn = () => {
  const { scrollToOrder, userEvent, isVisible } = useData();

  const handleScroll = () => {
    userEvent('(scroll down to see plans section)');
    scrollToOrder();
  };
  if (isVisible) {
    return null;
  }

  return (
    <div
      className='fixed bottom-4 left-10/12 transform -translate-x-1/2 z-50 sm:hidden'
      data-testid='scroll-to-checkout-btn'
    >
      <Button
        variant='outline'
        className='bg-black text-white'
        onClick={handleScroll}
      >
        Order
      </Button>
    </div>
  );
};

export default ScrollToCheckoutBtn;
