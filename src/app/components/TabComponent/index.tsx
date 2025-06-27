import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ReviewUserCard from './TabReviewUserCard';
import { TabName, tabs } from './key-map';
import TabDescription from './TabDescription';
import TabCheckoutContainer from './TabCheckoutContainer';
import useData from '@/app/context/useData';

const TabContent = () => (
  <>
    <TabCheckoutContainer />
    <TabDescription />
    <ReviewUserCard />
  </>
);

const TabComponent = () => {
  const { orderBtnRef, selectedTabState, setSelectedTabState } = useData();

  return (
    <div className='flex w-full flex-col gap-6'>
      <Tabs
        defaultValue={'plan'}
        onValueChange={(val: string) => setSelectedTabState(val as TabName)} // minor clash!
        value={selectedTabState}
      >
        <TabsList className='m-auto md:m-0' ref={orderBtnRef}>
          {tabs.map((tab) => (
            <TabsTrigger key={tab.value} value={tab.value}>
              {tab.title}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabContent />
      </Tabs>
    </div>
  );
};

export default TabComponent;
