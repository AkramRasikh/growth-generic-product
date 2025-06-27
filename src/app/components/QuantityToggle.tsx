'use client';

import Toggle from '../../components/base/Toggle';
import useData from '../context/useData';

const QuantityToggleHeading = () => (
  <div>
    <p className='text-2xl font-bold text-center'>Quantity:</p>
    <span className='opacity-50 text-xs'>5.0cm x 6.9m (per roll)</span>
  </div>
);

const QuantityToggle = () => {
  const { quantityState, setQuantityState, userEvent } = useData();

  const onClick = (adjustment: number) => {
    const newQuantity = quantityState + adjustment;
    userEvent(
      `User CLICK ${
        adjustment === -1 ? 'decrease' : 'increase'
      } toggle to ${newQuantity}`,
    );

    setQuantityState(quantityState + adjustment);
  };

  return (
    <div className='p-2 pb-0 flex justify-around m-auto w-full'>
      <QuantityToggleHeading />
      <Toggle state={quantityState} onClick={onClick} />
    </div>
  );
};

export default QuantityToggle;
