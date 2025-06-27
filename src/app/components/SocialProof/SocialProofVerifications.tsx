import { CheckIcon, DropletOff, Vegan } from 'lucide-react';

export const verifications = [
  { icon: <DropletOff />, text: 'Sweat resistance' },
  { icon: <CheckIcon />, text: 'EFAB approved' },
  {
    icon: <Vegan />,
    text: 'Vegan',
  },
];

const SocialProofVerifications = () => (
  <ul
    className='flex gap-4 flex-wrap justify-center max-w-4/5 m-auto scale-75 md:scale-100'
    data-testid='social-proof-verifications'
  >
    {verifications.map((item, index) => (
      <li
        key={index}
        className='flex flex-col gap-2 text-sm opacity-60 text-center flex-wrap overflow-auto'
      >
        <span className='m-auto mt-0 mb-0 border rounded-3xl p-2'>
          {item.icon}
        </span>
        <span className='max-w-18'>{item.text}</span>
      </li>
    ))}
  </ul>
);

export default SocialProofVerifications;
