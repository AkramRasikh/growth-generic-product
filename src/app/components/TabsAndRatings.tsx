import RatingsContainer from './RatingsContainer';
import TabComponent from './TabComponent';

const TabsAndRatings = () => {
  return (
    <div
      className='md:min-w-120 pb-10 md:p-2'
      data-testid='tabs-rating-section'
    >
      <div className='hidden md:block'>
        <RatingsContainer />
      </div>
      <TabComponent />
    </div>
  );
};

export default TabsAndRatings;
