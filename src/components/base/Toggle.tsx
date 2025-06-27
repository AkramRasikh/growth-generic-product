import * as React from 'react';
import { Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ToggleProps {
  state: number;
  onClick: (num: number) => void;
}

const Toggle = ({ state, onClick }: ToggleProps) => (
  <div className='flex items-center justify-center space-x-2'>
    <Button
      variant='outline'
      size='icon'
      className='h-10 w-10 shrink-0 rounded-full cursor-pointer'
      onClick={() => onClick(-1)}
      disabled={state <= 1}
    >
      <Minus />
      <span className='sr-only'>Decrease</span>
    </Button>
    <div className='flex-1 text-center'>
      <div className='text-xl font-bold tracking-tighter'>{state}</div>
    </div>
    <Button
      variant='outline'
      size='icon'
      className='h-10 w-10 shrink-0 rounded-full cursor-pointer'
      onClick={() => onClick(1)}
    >
      <Plus />
      <span className='sr-only'>Increase</span>
    </Button>
  </div>
);

export default Toggle;
