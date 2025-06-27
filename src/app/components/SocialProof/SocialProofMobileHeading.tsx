import useData from '@/app/context/useData';
import ReviewStars from '../ReviewStars';

export const SocialProofMobileHeading = () => {
  const { ratingAggregate } = useData();
  return (
    <div className='flex flex-col gap-2 text-center'>
      <h2 className='scroll-m-20 text-xl font-semibold tracking-tight first:mt-0'>
        Unlimited Athletic Tape (UATape)
      </h2>
      <div className='m-auto' data-testid='review-stars-mobile'>
        <ReviewStars ratings={ratingAggregate} />
      </div>
    </div>
  );
};

export default SocialProofMobileHeading;
