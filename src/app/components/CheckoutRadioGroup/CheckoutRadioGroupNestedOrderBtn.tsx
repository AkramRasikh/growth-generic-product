import { Button } from '@/components/ui/button';
import ContractBenefits from './CheckoutRadioGroupContractBenefits';
import FadeInWrapper from '../../../components/base/FadeInWrapper';
import useData from '@/app/context/useData';

interface CheckoutRadioGroupNestedOrderBtnProps {
  isNotMonthly: boolean;
}

const CheckoutRadioGroupNestedOrderBtn = ({
  isNotMonthly,
}: CheckoutRadioGroupNestedOrderBtnProps) => {
  const { userEvent } = useData();
  return (
    <FadeInWrapper>
      <div className='flex flex-col gap-2 text-center mt-2'>
        {isNotMonthly && <ContractBenefits />}
        <Button
          className='w-full cursor-pointer'
          onClick={() => userEvent('Nested order button clicked')}
        >
          ORDER NOW
        </Button>
        <p className='text-neutral-500'>NO CONTRACT ◦ CANCEL ANYTIME</p>
      </div>
    </FadeInWrapper>
  );
};

export default CheckoutRadioGroupNestedOrderBtn;
