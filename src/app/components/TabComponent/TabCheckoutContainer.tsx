import QuantityToggle from '../QuantityToggle';
import { Button } from '@/components/ui/button';
import useData from '../../context/useData';
import TabContentContainer from './TabContentContainer';
import CheckoutRadioGroup from '../CheckoutRadioGroup';

const IncentiveReviewQuote = () => {
  const { userEvent, setSelectedTabState } = useData();

  const onSeeReviews = () => {
    userEvent('Why upgrade quote -> reviews');
    setSelectedTabState('reviews');
  };
  return (
    <div>
      <Button
        variant='link'
        className='italic text-xs px-0 opacity-50 cursor-pointer'
        onClick={onSeeReviews}
        data-testid='incentive-review-btn'
      >
        <u>
          Why <span className='font-extrabold'>83%</span> of our athletes go for{' '}
          <span className='font-extrabold'>Annual</span>...
        </u>
      </Button>
    </div>
  );
};

const TabCheckoutContainer = () => {
  const { isSegmentedWithBadges, userEvent } = useData();

  return (
    <TabContentContainer value='plan'>
      <QuantityToggle />
      <IncentiveReviewQuote />

      <CheckoutRadioGroup />
      {!isSegmentedWithBadges && (
        <Button
          data-testid='tab-order-btn'
          onClick={() => userEvent(' Order btn clicked')}
          className='cursor-pointer'
        >
          Order
        </Button>
      )}
    </TabContentContainer>
  );
};

export default TabCheckoutContainer;
