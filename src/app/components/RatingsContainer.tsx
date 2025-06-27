import useData from '../context/useData';
import ReviewStars from './ReviewStars';

const RatingsContainer = () => {
  const { ratingAggregate } = useData();
  return (
    <div className='flex flex-col gap-2 pb-2'>
      <h2 className='scroll-m-20 text-3xl font-semibold tracking-tight first:mt-0'>
        Unlimited Athletic Tape (UATape)
      </h2>
      <div data-testid='review-stars'>
        <ReviewStars ratings={ratingAggregate} />
      </div>
    </div>
  );
};

export default RatingsContainer;
