import { Label } from '@/components/ui/label';
import CheckoutRadioGroupPricing from './CheckoutRadioGroupPricing';
import { PlanOption } from '@/app/context/DataProvider';

interface CheckoutRadioGroupLabelProps {
  value: PlanOption['value'];
  text: PlanOption['title'];
  isMonthlyAndIllusion: boolean;
  discountRate: PlanOption['discountRate'];
}

const CheckoutRadioGroupLabel = ({
  value,
  text,
  isMonthlyAndIllusion,
  discountRate,
}: CheckoutRadioGroupLabelProps) => {
  return (
    <Label htmlFor={value} data-testid={`checkout-label-${value}`}>
      <span className='flex justify-between w-full'>
        <span>{text}</span>
        <CheckoutRadioGroupPricing
          isMonthlyAndIllusion={isMonthlyAndIllusion}
          discountRate={discountRate}
        />
      </span>
    </Label>
  );
};

export default CheckoutRadioGroupLabel;
