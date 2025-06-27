'use client';

import React, { useEffect, useState } from 'react';
import FeatureFlagNavBar from './components/FeatureFlagNavBar';
import TabsAndRatings from './components/TabsAndRatings';
import { DataPayload, DataProvider } from './context/DataProvider';
import SocialProof from './components/SocialProof';
import ScrollToCheckoutBtn from './components/ScrollToCheckoutBtn';
import PageContainer from '@/components/base/PageContainer';

export default function Page() {
  const [data, setData] = useState<DataPayload | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessageState, setErrorMessageState] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch('/api/on-load');
        const json = await res.json();
        setData(json);
      } catch (error) {
        const errorMessage = (error as Error).message;
        if (errorMessage) {
          setErrorMessageState(errorMessage || 'Error getting data');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const loadingState = isLoading || (!data && !errorMessageState);

  return (
    <PageContainer isLoading={loadingState} errorMessage={errorMessageState}>
      {data ? (
        <DataProvider data={data}>
          <div data-testid='plan-screen'>
            <FeatureFlagNavBar />
            <ScrollToCheckoutBtn />
            <div className='max-w-4xl m-auto bg-amber-50 p-3'>
              <h1 className='font-extrabold text-center text-2xl p-5'>
                The Athlete&apos;s cave
              </h1>
              <div className='justify-between gap-10 md:flex'>
                <SocialProof />
                <TabsAndRatings />
              </div>
            </div>
          </div>
        </DataProvider>
      ) : null}
    </PageContainer>
  );
}
