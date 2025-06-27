import React from 'react';
import { Star as StarIcon } from 'lucide-react';
import { StarIconProps } from '.';

const ReviewStarsEmpty = ({ starNumber }: StarIconProps) => {
  return [...Array(starNumber)].map((_, i) => (
    <StarIcon
      key={`empty-${i}`}
      className='w-5 h-5 text-gray-300'
      stroke='none'
      fill='currentColor'
    />
  ));
};

export default ReviewStarsEmpty;
