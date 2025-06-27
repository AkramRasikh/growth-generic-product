import { HoverCard } from '@/components/ui/hover-card';
import useData from '../../context/useData';
import TabContentContainer from './TabContentContainer';
import AvatarCard from '@/components/base/AvatarCard';

const TabReviewUserCard = () => {
  const { reviews } = useData();
  return (
    <TabContentContainer value='reviews'>
      <HoverCard>
        <ul className='flex flex-col gap-3'>
          {reviews.map((user, index) => (
            <li key={index}>
              <AvatarCard
                heading={user.userName}
                text={user.review}
                subText={user.userSince}
              />
            </li>
          ))}
        </ul>
      </HoverCard>
    </TabContentContainer>
  );
};

export default TabReviewUserCard;
