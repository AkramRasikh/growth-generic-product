import React from 'react';
import ReviewStarsFull from './ReviewStarsFull';
import ReviewStarsPartial from './ReviewStarsPartial';
import { DataContextType } from '@/app/context/DataProvider';
import ReviewStarsEmpty from './ReviewStarsEmpty';

interface ReviewStarsProps {
  ratings: DataContextType['ratingAggregate'];
}

export interface StarIconProps {
  starNumber: number;
}

const ReviewStars = ({ ratings }: ReviewStarsProps) => {
  const totalReviews = ratings.length;
  const averageRating = totalReviews
    ? ratings.reduce((sum, r) => sum + r, 0) / totalReviews
    : 0;

  const fullStars = Math.floor(averageRating);
  const partialFill = averageRating % 1;
  const emptyStars = 5 - Math.ceil(averageRating);

  return (
    <div className='flex items-center gap-2 text-yellow-500'>
      <div className='flex'>
        <ReviewStarsFull starNumber={fullStars} />
        {partialFill > 0 && <ReviewStarsPartial starNumber={partialFill} />}
        <ReviewStarsEmpty starNumber={emptyStars} />
      </div>
      <span className='text-gray-600 text-sm'>{totalReviews} reviews</span>
    </div>
  );
};

export default ReviewStars;
