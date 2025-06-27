import { RadioGroup } from '@/components/ui/radio-group';
import clsx from 'clsx';
import { Fragment } from 'react';
import useData from '../../context/useData';
import CheckoutRadioGroupLabel from './CheckoutRadioGroupLabel';
import RadioItem from '@/components/base/RadioItem';
import CheckoutRadioGroupNestedOrderBtn from './CheckoutRadioGroupNestedOrderBtn';
import { DataContextType } from '@/app/context/DataProvider';

const CheckoutRadioGroup = () => {
  const {
    isSegmented,
    options,
    isSegmentedPlanOmission,
    isSegmentedWithBadges,
    setSelected,
    selected,
  } = useData();
  return (
    <div>
      <RadioGroup
        defaultValue={selected}
        className={clsx('gap-5 p-2', !isSegmentedWithBadges ? ' rounded' : '')}
        onValueChange={(val: DataContextType['selected']) => setSelected(val)}
      >
        {options.map((item, index) => {
          const isMonthly = item.value === '1';
          const isMonthlyAndIllusion =
            (isSegmentedWithBadges || isSegmentedPlanOmission) && isMonthly;

          const showBottomSection =
            selected === item.value && isSegmentedWithBadges;

          return (
            <Fragment key={index}>
              <RadioItem
                selected={selected}
                label={item.value}
                customLabel={() => (
                  <CheckoutRadioGroupLabel
                    value={item.value}
                    text={item.title}
                    isMonthlyAndIllusion={isMonthlyAndIllusion}
                    discountRate={item.discountRate}
                  />
                )}
                value={item.value}
                subText={item?.subtext}
                iconText={item?.badge?.text}
                withBorder={isSegmentedWithBadges}
                badge={item?.badge}
                bottomActionArea={
                  showBottomSection && (
                    <CheckoutRadioGroupNestedOrderBtn
                      isNotMonthly={!isMonthly}
                    />
                  )
                }
              />
              {isSegmented && index === 0 && (
                <hr className='pb-3' data-testid='segmented-hr' />
              )}
            </Fragment>
          );
        })}
      </RadioGroup>
    </div>
  );
};

export default CheckoutRadioGroup;
