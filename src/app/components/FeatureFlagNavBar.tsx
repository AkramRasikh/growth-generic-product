import React from 'react';
import useData from '../context/useData';
import {
  DataContextType,
  flagOptions,
  userExposeFlagePrefix,
} from '../context/DataProvider';
import { RadioGroup } from '@/components/ui/radio-group';
import RadioItem from '@/components/base/RadioItem';

const FeatureFlagNavBar = () => {
  const { setFlagState, flagState, setAnalyticsTrackerState } = useData();

  const onValueChange = (val: DataContextType['flagState']) => {
    setFlagState(val);
    setAnalyticsTrackerState([userExposeFlagePrefix + ` ${val}`]);
  };
  return (
    <div className='w-full bg-white border-b border-gray-300 shadow-sm z-50 p-5'>
      <RadioGroup
        defaultValue={flagState}
        className='flex flex-wrap justify-center gap-2.5'
        onValueChange={onValueChange}
      >
        {flagOptions.map((item, index) => {
          return (
            <RadioItem
              key={index}
              selected={flagState}
              label={item.value}
              value={item.value}
            />
          );
        })}
      </RadioGroup>
    </div>
  );
};

export default FeatureFlagNavBar;
