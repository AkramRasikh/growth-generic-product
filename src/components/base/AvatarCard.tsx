import { Avatar, AvatarImage } from '@/components/ui/avatar';

interface AvatarCardProps {
  heading: string;
  text: string;
  subText?: string;
}

const AvatarCard = ({ heading, text, subText }: AvatarCardProps) => (
  <div className='flex gap-4 w-full'>
    <Avatar>
      <AvatarImage src='https://github.com/vercel.png' />
    </Avatar>
    <div className='space-y-1'>
      <h4 className='text-sm font-semibold'>{heading}</h4>
      <p className='text-sm'>{text}</p>
      {subText && (
        <div className='text-muted-foreground text-xs italic'>{subText}</div>
      )}
    </div>
  </div>
);

export default AvatarCard;
