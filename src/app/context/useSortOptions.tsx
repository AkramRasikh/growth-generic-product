'use client';

import { useEffect } from 'react';
import { DataContextType, PlanOption } from './DataProvider';

interface UseSortOptionsProps {
  options: DataContextType['options'];
  setOptionsState: (val: PlanOption[]) => void;
  isSegmented: DataContextType['isSegmented'];
  flagState: DataContextType['flagState'];
}

const useSortOptions = ({
  options,
  setOptionsState,
  isSegmented,
  flagState,
}: UseSortOptionsProps) => {
  const sortBySegmented = () => {
    if (!isSegmented) return options;

    return [...options].sort((a, b) => {
      const aOrder = a.segmentedOrder ?? Infinity;
      const bOrder = b.segmentedOrder ?? Infinity;
      return aOrder - bOrder;
    });
  };
  useEffect(() => {
    const sortedItems = isSegmented ? sortBySegmented() : options;
    setOptionsState(sortedItems);
  }, [flagState, isSegmented]);
};

export default useSortOptions;
