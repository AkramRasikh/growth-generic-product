import { CardDescription, CardTitle } from '@/components/ui/card';

import { DropletOff, Ribbon, Shell, Truck, Vegan } from 'lucide-react';
import TabContentContainer from './TabContentContainer';

const upsellSection = [
  { icon: <Ribbon />, text: 'Irritation Free' },
  { icon: <DropletOff />, text: 'Water/Sweat resistance' },
  { icon: <Shell />, text: '5.0cm x 6.9m per roll' },
  {
    icon: <Truck />,
    text: 'Free & flexible delivery. No commitment, cancel anytime',
  },
  {
    icon: <Vegan />,
    text: 'Vegan',
  },
];

const TabDescription = () => (
  <TabContentContainer value='description'>
    <CardTitle>Description</CardTitle>
    <CardDescription>
      The go to UATape tape for all <b>serious</b> athletes. You will love using
      our Tear UATape. It’s the Swiss Army Knife of tapes and a physio bag
      essential.
      <b> Stretchy (180%)</b>, sticky and supportive. It wraps around limbs and
      <b> joints with ease</b>.
    </CardDescription>

    <ul className='flex flex-col gap-3 mt-3'>
      {upsellSection.map((item, index) => (
        <li
          key={index}
          className='flex gap-2 text-sm opacity-60 border-b-1 pb-2'
        >
          {item.icon} {item.text}
        </li>
      ))}
    </ul>
  </TabContentContainer>
);

export default TabDescription;
