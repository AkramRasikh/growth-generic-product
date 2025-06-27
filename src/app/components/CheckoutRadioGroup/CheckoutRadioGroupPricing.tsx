import { PlanOption } from '@/app/context/DataProvider';
import useData from '../../context/useData';

interface CheckoutRadioGroupPricingProps {
  discountRate: PlanOption['discountRate'];
  isMonthlyAndIllusion: boolean;
}

const CheckoutRadioGroupPricing = ({
  discountRate,
  isMonthlyAndIllusion,
}: CheckoutRadioGroupPricingProps) => {
  const { price } = useData();
  return (
    <span>
      {!isMonthlyAndIllusion && (
        <span className='line-through text-neutral-400'>£{price}</span>
      )}{' '}
      <b>£{(price - discountRate * price).toFixed(2)}</b>
    </span>
  );
};

export default CheckoutRadioGroupPricing;
