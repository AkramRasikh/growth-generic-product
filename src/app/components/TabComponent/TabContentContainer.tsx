import { TabsContent } from '@/components/ui/tabs';
import { Card, CardHeader } from '@/components/ui/card';
import { ReactNode } from 'react';

interface TabContentContainerProps {
  value: string;
  children: ReactNode;
}

const TabContentContainer = ({ value, children }: TabContentContainerProps) => (
  <TabsContent className='w-full max-w-[600px] mx-auto md:mx-0' value={value}>
    <Card>
      <CardHeader>{children}</CardHeader>
    </Card>
  </TabsContent>
);

export default TabContentContainer;
