import BadgeIconText, { BadgeType } from '@/components/base/BadgeIconText';
import { Label } from '@/components/ui/label';
import { RadioGroupItem } from '@/components/ui/radio-group';
import clsx from 'clsx';
import { ReactNode } from 'react';

interface RadiotItemProps {
  label: string;
  value: string;
  selected: string;
  customLabel?: () => ReactNode;
  subText?: string;
  iconText?: string;
  withBorder?: boolean;
  badge?: BadgeType;
  bottomActionArea?: ReactNode;
}

const RadioItem = ({
  label,
  customLabel,
  value,
  selected,
  subText,
  iconText,
  withBorder,
  badge,
  bottomActionArea,
}: RadiotItemProps) => {
  const thisIsSelected = selected === value;

  return (
    <div className={clsx('relative', withBorder ? 'border p-2 rounded' : '')}>
      {iconText && withBorder && badge && (
        <BadgeIconText
          text={iconText}
          icon={badge.icon}
          classes={badge?.classes}
          selected={thisIsSelected}
          withWrapper
        />
      )}
      <div className='flex items-center space-x-2 '>
        <RadioGroupItem
          value={value}
          id={value}
          className='mb-auto'
          checked={thisIsSelected}
        />
        <div className='w-full flex flex-col gap-1.5'>
          {customLabel?.() || <Label htmlFor={value}>{label}</Label>}
          {subText && !withBorder && (
            <span className='text-muted-foreground text-sm'>{subText}</span>
          )}
        </div>
      </div>
      {bottomActionArea}
    </div>
  );
};

export default RadioItem;
