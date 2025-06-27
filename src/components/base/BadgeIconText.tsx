import { Badge } from '@/components/ui/badge';
import clsx from 'clsx';
import { ReactNode } from 'react';
import ConditionalWrapper from './ConditionalWrapper';

export type BadgeType = {
  icon: () => ReactNode;
  classes: string;
  text: string;
};

interface BadgeIconProps {
  icon: BadgeType['icon'];
  text: BadgeType['text'];
  classes?: BadgeType['classes'];
  selected?: boolean;
  withWrapper?: boolean;
}

interface BadgeIconTextAbsoluteWrapperProps {
  children: ReactNode;
  selected?: boolean;
}

const BadgeIconTextAbsoluteWrapper = ({
  selected,
  children,
}: BadgeIconTextAbsoluteWrapperProps) => (
  <div
    className={clsx(
      'flex w-full flex-wrap gap-2 absolute justify-end bottom-11/12 pr-1',
      selected ? 'bottom-[98%]' : '',
    )}
  >
    {children}
  </div>
);

const BadgeIconText = ({
  icon,
  text,
  classes,
  selected,
  withWrapper = false,
}: BadgeIconProps) => {
  return (
    <ConditionalWrapper
      condition={withWrapper}
      wrapper={(children) => (
        <BadgeIconTextAbsoluteWrapper selected={selected}>
          {children}
        </BadgeIconTextAbsoluteWrapper>
      )}
    >
      <Badge
        variant='secondary'
        className={clsx('', classes ? classes : '')}
        data-testid='badge-icon'
      >
        {icon()}
        {text}
      </Badge>
    </ConditionalWrapper>
  );
};

export default BadgeIconText;
