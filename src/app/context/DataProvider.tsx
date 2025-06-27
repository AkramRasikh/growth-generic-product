'use client';

import { BadgeType } from '@/components/base/BadgeIconText';
import { Activity, Flame, Star } from 'lucide-react';
import {
  createContext,
  ReactNode,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import { TabName } from '../components/TabComponent/key-map';
import useObserveElVisibility from '../hooks/useObserveElVisibility';
import useSortOptions from './useSortOptions';

export const flagOptions = [
  { text: 'control', value: 'control' },
  { text: 'is-segmented-plan', value: 'is-segmented-plan' },
  { text: 'is-segmented-plan-omission', value: 'is-segmented-plan-omission' },
  { text: 'is-segmented-badges', value: 'is-segmented-badges' },
];

export const userEventPrefix = 'Event - User click. ';
export const userExposeFlagePrefix = 'USER EXPOSE FLAG:. ';

export const benefitsArr = [
  'Auto Renew',
  'Downgrade anytime',
  'New tape samples',
  'Not happy? Money back guarantee!',
];

type Review = {
  userName: string;
  review: string;
  userSince: string;
};

type SelectedPlan = '1' | '3' | '6' | '12';

type FlagName =
  | 'control'
  | 'is-segmented-plan'
  | 'is-segmented-plan-omission'
  | 'is-segmented-badges';

export type PlanOption = {
  value: SelectedPlan;
  title: string;
  eventTrackerTag: string;
  discountRate: number;
  segmentedOrder: number;
  subtext?: string;
  badge?: BadgeType;
};

export interface DataContextType {
  images: string[];
  price: number;
  institutionalProof: string[];
  reviews: Review[];
  ratingAggregate: number[];
  isSegmentedPlans: boolean;
  isSegmentedPlanOmission: boolean;
  isSegmentedWithBadges: boolean;
  selected: SelectedPlan;
  setSelected: (plan: SelectedPlan) => void;
  isSegmented: boolean;
  options: PlanOption[];
  flagState: FlagName;
  scrollToOrder: () => void;
  isVisible: boolean;
  setQuantityState: (num: number) => void;
  quantityState: number;
  setFlagState: (flag: FlagName) => void;
  orderBtnRef: RefObject<HTMLDivElement>;
  userEvent: (str: string) => void;
  selectedTabState: TabName;
  setSelectedTabState: (str: TabName) => void;
  setAnalyticsTrackerState: (event: string[]) => void;
}

export const DataContext = createContext<DataContextType | null>(null);

export type DataPayload = {
  ratingAggregate: number[];
  reviews: Review[];
  images: string[];
  institutionalProof: string[];
  price: number;
};

interface DataProviderProps {
  children: ReactNode;
  data: DataPayload;
}

export const DataProvider = ({ data, children }: DataProviderProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [flagState, setFlagState] = useState<FlagName>('control');
  const [quantityState, setQuantityState] = useState(1);
  const [optionsState, setOptionsState] = useState<PlanOption[] | []>([]);
  const [analyticsTrackerState, setAnalyticsTrackerState] = useState<string[]>(
    [],
  );
  const [selectedTabState, setSelectedTabState] = useState<TabName>('plan');

  console.log('## analyticsTrackerState', analyticsTrackerState);

  const orderBtnRef = useRef<HTMLDivElement>(null) as RefObject<HTMLDivElement>; // come back to

  const [selected, setSelected] = useState<SelectedPlan>('3');

  const { images, price, institutionalProof, reviews, ratingAggregate } = data;

  const isSegmentedPlans = 'is-segmented-plan' === flagState;
  const isSegmentedPlanOmission = 'is-segmented-plan-omission' === flagState;
  const isSegmentedWithBadges = 'is-segmented-badges' === flagState;

  const isSegmented =
    isSegmentedPlans || isSegmentedPlanOmission || isSegmentedWithBadges;

  const { scrollToOrder } = useObserveElVisibility({
    ref: orderBtnRef,
    setIsVisible,
  });

  const userEvent = (event: string) =>
    setAnalyticsTrackerState((prev: string[]) => [
      ...prev,
      `${userEventPrefix}${event}`,
    ]);

  useEffect(() => {
    userEvent(`${selectedTabState} selected`);
  }, [selectedTabState]);

  useEffect(() => {
    setAnalyticsTrackerState((prev: string[]) => [
      ...prev,
      `${userEventPrefix} ${flagState}`,
    ]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (selected && optionsState?.length > 0) {
      const userPlanEventTag = optionsState.find(
        (option) => option.value === selected,
      )?.eventTrackerTag;
      if (userPlanEventTag) {
        userEvent(`${userPlanEventTag} plan selected`);
      }
    }
  }, [optionsState, selected]);

  const options = [
    {
      value: '1',
      title:
        isSegmentedWithBadges || isSegmentedPlanOmission
          ? 'Monthly plan'
          : 'Monthly plan (save 10%)',
      discountRate: 0.1,
      segmentedOrder: 1,
      eventTrackerTag: 'Monthly',
    },
    {
      value: '12',
      title: isSegmentedWithBadges ? 'Annual plan' : 'Annual plan (save 25%)',
      discountRate: 0.25,
      subtext: '💰 Best value',
      badge: {
        icon: () => <Flame />,
        classes: 'bg-red-100 text-red-700 animate-pulse left-7/10',
        text: `Limited Offer ${(0.25 * 100).toString()}% OFF`,
      },
      segmentedOrder: 2,
      eventTrackerTag: 'Annual',
    },
    {
      value: '6',
      title: isSegmentedWithBadges ? '6 month plan' : '6 month plan (save 20%)',
      discountRate: 0.2,
      badge: {
        icon: () => <Activity />,
        classes: 'bg-blue-500 text-white',
        text: `${(0.2 * 100).toString()}% OFF`,
      },
      segmentedOrder: 3,
      eventTrackerTag: 'Bi-annual',
    },
    {
      value: '3',
      title: isSegmentedWithBadges
        ? 'Quarterly plan'
        : 'Quarterly plan (save 15%)',
      discountRate: 0.15,
      subtext: '⭐️ Most popular',
      badge: {
        icon: () => <Star />,
        classes: 'bg-yellow-500 text-white',
        text: `Most Popular  ${(0.15 * 100).toString()}% OFF`,
      },
      segmentedOrder: 4,
      eventTrackerTag: 'Quarterly',
    },
  ] as PlanOption[];

  useSortOptions({
    options,
    setOptionsState,
    flagState,
    isSegmented,
  });

  return (
    <DataContext.Provider
      value={{
        images,
        price,
        institutionalProof,
        reviews,
        ratingAggregate,
        isSegmentedPlans,
        isSegmentedPlanOmission,
        isSegmentedWithBadges,
        setSelected,
        selected,
        setFlagState,
        flagState,
        scrollToOrder,
        isVisible,
        isSegmented,
        quantityState,
        setQuantityState,
        options: optionsState,
        orderBtnRef,
        userEvent,
        selectedTabState,
        setSelectedTabState,
        setAnalyticsTrackerState,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
