import React from 'react';
import { Star as StarIcon } from 'lucide-react';
import { StarIconProps } from '.';

const ReviewStarsPartial = ({ starNumber }: StarIconProps) => (
  <div className='relative w-5 h-5'>
    <StarIcon
      className='w-5 h-5 text-gray-300 absolute'
      stroke='none'
      fill='currentColor'
    />
    <StarIcon
      className='w-5 h-5 text-yellow-500 absolute overflow-hidden'
      stroke='none'
      fill='currentColor'
      style={{
        clipPath: `inset(0 ${100 - starNumber * 100}% 0 0)`,
      }}
    />
  </div>
);

export default ReviewStarsPartial;
