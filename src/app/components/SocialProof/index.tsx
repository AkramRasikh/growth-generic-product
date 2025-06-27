import SocialProofInstiutionalProof from './SocialProofInstiutionalProof';
import SocialProofMobileHeading from './SocialProofMobileHeading';
import SocialProofVerifications from './SocialProofVerifications';
import CarouselImage from '@/components/base/CarouselImage';
import useData from '@/app/context/useData';

const SocialProof = () => {
  const { images, userEvent } = useData();

  const previousOnClick = () => userEvent('Previous image');

  const nextOnClick = () => userEvent('Next image');

  return (
    <div className='flex flex-col gap-1 pb-2 md:pb-0 md:gap-6 h-fit'>
      <CarouselImage
        images={images}
        previousOnClick={previousOnClick}
        nextOnClick={nextOnClick}
      />
      <SocialProofInstiutionalProof />
      <div className='block md:hidden'>
        <SocialProofMobileHeading />
      </div>
      <SocialProofVerifications />
    </div>
  );
};

export default SocialProof;
