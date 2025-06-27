import { StarIcon } from 'lucide-react';
import { StarIconProps } from '.';

const ReviewStarsFull = ({ starNumber }: StarIconProps) => {
  return [...Array(starNumber)].map((_, i) => (
    <StarIcon
      key={`full-${i}`}
      fill='currentColor'
      stroke='none'
      className='w-5 h-5'
    />
  ));
};

export default ReviewStarsFull;
