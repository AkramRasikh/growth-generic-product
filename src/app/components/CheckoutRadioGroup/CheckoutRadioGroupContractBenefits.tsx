import { CheckIcon } from 'lucide-react';
import { benefitsArr } from '../../context/DataProvider';
import BadgeIconText from '../../../components/base/BadgeIconText';

const CheckoutRadioGroupContractBenefits = () => (
  <div className='flex flex-wrap gap-2 justify-center'>
    {benefitsArr.map((benefit) => (
      <BadgeIconText key={benefit} icon={() => <CheckIcon />} text={benefit} />
    ))}
  </div>
);

export default CheckoutRadioGroupContractBenefits;
