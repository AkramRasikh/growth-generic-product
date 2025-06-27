import Image from 'next/image';
import useData from '../../context/useData';

const SocialProofInstiutionalProofHeading = () => (
  <p className='m-auto opacity-50 font-bold text-center'>Trusted by the best</p>
);

const SocialProofInstiutionalProof = () => {
  const { institutionalProof } = useData();
  return (
    <div
      className='m-auto scale-75 md:scale-100'
      data-testid='social-proof-institutional'
    >
      <SocialProofInstiutionalProofHeading />
      <ul className='flex flex-row gap-2 flex-wrap justify-center pt-2 '>
        {institutionalProof.map((instiutionalImage, index) => (
          <li key={index}>
            <Image
              src={instiutionalImage}
              alt={instiutionalImage}
              width={0}
              height={0}
              sizes='100vw'
              style={{ width: 'auto', height: 50 }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialProofInstiutionalProof;
