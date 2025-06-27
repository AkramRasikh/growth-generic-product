import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Home, { fallBackErrorMsg } from './page'; // adjust to actual path
import '@testing-library/jest-dom';
import { responseData } from './api/on-load/response-data';
import { benefitsArr, flagOptions } from './context/DataProvider';
import { verifications } from './components/SocialProof/SocialProofVerifications';
import { tabs } from './components/TabComponent/key-map';
import {
  badgeIconsText,
  controlOptions,
  mockResultPrices,
  segmentedPlanBadgesOptions,
  segmentedPlanOmissionOptions,
} from './context/flag-text';

const mockData = {
  ...responseData,
};

const errorMsg = 'Error loading, please try again';

const commonSimilarities = () => {
  expect(screen.getByTestId('carousel-image')).toBeInTheDocument();
  expect(screen.getByTestId('social-proof-institutional')).toBeInTheDocument();
  expect(screen.getByTestId('social-proof-verifications')).toBeInTheDocument();
  // flags
  expect(screen.getByText("The Athlete's cave")).toBeInTheDocument();
  expect(screen.getByText('5.0cm x 6.9m (per roll)')).toBeInTheDocument();
  flagOptions.map((flag) => {
    expect(screen.getByText(flag.value)).toBeInTheDocument();
  });
  // RatingsContainer
  expect(screen.getByTestId('tabs-rating-section')).toBeInTheDocument();
  expect(screen.getByTestId('review-stars')).toBeInTheDocument();

  // three upsells
  verifications.map((verifi) => {
    expect(screen.getByText(verifi.text)).toBeInTheDocument();
  });
  mockResultPrices.map((mockResultPrice) => {
    expect(screen.getByText(mockResultPrice)).toBeInTheDocument();
  });

  // tabs
  tabs.map((tabItem) => {
    expect(screen.getByText(tabItem.title)).toBeInTheDocument();
  });

  // review section
  expect(screen.getByTestId('incentive-review-btn')).toBeInTheDocument();
  fireEvent.click(screen.getByTestId('incentive-review-btn'));
  responseData.reviews.map((reviewUser) => {
    expect(screen.getByText(reviewUser.review)).toBeInTheDocument();
    expect(screen.getByText(reviewUser.userName)).toBeInTheDocument();
    expect(screen.getByText(reviewUser.userSince)).toBeInTheDocument();
  });
};

describe('Home Page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('shows loading UI on initial render', async () => {
    (fetch as jest.Mock).mockImplementation(() => new Promise(() => {}));

    render(<Home />);
    expect(screen.getByTestId('loading-ui')).toBeInTheDocument();
    expect(screen.queryByTestId('plan-screen')).not.toBeInTheDocument();
  });

  it('shows error message if fetch fails', async () => {
    (fetch as jest.Mock).mockRejectedValue(new Error(errorMsg));

    render(<Home />);
    await waitFor(() => expect(screen.getByText(errorMsg)).toBeInTheDocument());
    expect(screen.queryByTestId('plan-screen')).not.toBeInTheDocument();
  });

  it('renders plan screen when data is fetched successfully - CONTROL', async () => {
    (fetch as jest.Mock).mockResolvedValue({
      json: () => Promise.resolve(mockData),
    });

    render(<Home />);
    await waitFor(() =>
      expect(screen.getByTestId('plan-screen')).toBeInTheDocument(),
    );
    expect(screen.queryByText(fallBackErrorMsg)).not.toBeInTheDocument();
    expect(screen.getByLabelText('control')).toBeChecked();
    expect(screen.queryByTestId('segmented-hr')).not.toBeInTheDocument();
    expect(screen.getByTestId('tab-order-btn')).toBeInTheDocument();
    expect(screen.getAllByText('£9.67').length).toBe(4);

    benefitsArr.map((benefit) => {
      expect(screen.queryByText(benefit)).not.toBeInTheDocument();
    });

    badgeIconsText.map((badgeIcon) => {
      expect(screen.queryByText(badgeIcon)).not.toBeInTheDocument();
    });
    controlOptions.map((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      if (item?.subtext) {
        expect(screen.getByText(item.subtext)).toBeInTheDocument();
      }
    });
    commonSimilarities();
  });
  it('renders plan screen when data is fetched successfully - IS-SEGMENTED-PLAN', async () => {
    (fetch as jest.Mock).mockResolvedValue({
      json: () => Promise.resolve(mockData),
    });

    render(<Home />);
    await waitFor(() =>
      expect(screen.getByTestId('plan-screen')).toBeInTheDocument(),
    );
    expect(screen.queryByText(fallBackErrorMsg)).not.toBeInTheDocument();
    expect(screen.getByLabelText('control')).toBeChecked();
    expect(screen.queryByTestId('segmented-hr')).not.toBeInTheDocument();

    fireEvent.click(screen.getByLabelText('is-segmented-plan'));
    expect(screen.getByLabelText('is-segmented-plan')).toBeChecked();
    expect(screen.getByTestId('segmented-hr')).toBeInTheDocument();
    expect(screen.getByTestId('tab-order-btn')).toBeInTheDocument();

    benefitsArr.map((benefit) => {
      expect(screen.queryByText(benefit)).not.toBeInTheDocument();
    });

    controlOptions.map((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      if (item?.subtext) {
        expect(screen.getByText(item.subtext)).toBeInTheDocument();
      }
    });
    expect(screen.getAllByText('£9.67').length).toBe(4);
    badgeIconsText.map((badgeIcon) => {
      expect(screen.queryByText(badgeIcon)).not.toBeInTheDocument();
    });
    commonSimilarities();
  });

  it('renders plan screen when data is fetched successfully - IS-SEGMENTED-PLAN-OMISSION', async () => {
    (fetch as jest.Mock).mockResolvedValue({
      json: () => Promise.resolve(mockData),
    });

    render(<Home />);
    await waitFor(() =>
      expect(screen.getByTestId('plan-screen')).toBeInTheDocument(),
    );
    expect(screen.queryByText(fallBackErrorMsg)).not.toBeInTheDocument();
    expect(screen.getByLabelText('control')).toBeChecked();
    expect(screen.queryByTestId('segmented-hr')).not.toBeInTheDocument();

    fireEvent.click(screen.getByLabelText('is-segmented-plan-omission'));
    expect(screen.getByLabelText('is-segmented-plan-omission')).toBeChecked();
    expect(screen.getByTestId('segmented-hr')).toBeInTheDocument();
    expect(screen.getByTestId('tab-order-btn')).toBeInTheDocument();

    benefitsArr.map((benefit) => {
      expect(screen.queryByText(benefit)).not.toBeInTheDocument();
    });
    segmentedPlanOmissionOptions.map((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      if (item?.subtext) {
        expect(screen.getByText(item.subtext)).toBeInTheDocument();
      }
    });
    expect(screen.getAllByText('£9.67').length).toBe(3);

    badgeIconsText.map((badgeIcon) => {
      expect(screen.queryByText(badgeIcon)).not.toBeInTheDocument();
    });

    commonSimilarities();
  });

  it('renders plan screen when data is fetched successfully - IS-SEGMENTED-BADGES', async () => {
    (fetch as jest.Mock).mockResolvedValue({
      json: () => Promise.resolve(mockData),
    });

    render(<Home />);
    await waitFor(() =>
      expect(screen.getByTestId('plan-screen')).toBeInTheDocument(),
    );
    expect(screen.queryByText(fallBackErrorMsg)).not.toBeInTheDocument();
    expect(screen.getByLabelText('control')).toBeChecked();
    expect(screen.queryByTestId('segmented-hr')).not.toBeInTheDocument();

    fireEvent.click(screen.getByLabelText('is-segmented-badges'));
    expect(screen.getByLabelText('is-segmented-badges')).toBeChecked();
    expect(screen.getByTestId('segmented-hr')).toBeInTheDocument();

    segmentedPlanBadgesOptions.map((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
    benefitsArr.map((benefit) => {
      expect(screen.getByText(benefit)).toBeInTheDocument();
    });
    expect(screen.queryByTestId('tab-order-btn')).not.toBeInTheDocument();
    expect(
      screen.getByText('NO CONTRACT ◦ CANCEL ANYTIME'),
    ).toBeInTheDocument();
    // prices
    expect(screen.getAllByText('£9.67').length).toBe(3);

    badgeIconsText.map((badgeIcon) => {
      expect(screen.getByText(badgeIcon)).toBeInTheDocument();
    });

    const monthlyLabel = 'checkout-label-1';
    fireEvent.click(screen.getByTestId(monthlyLabel));
    // click monthly doesn't have it
    benefitsArr.map((benefit) => {
      expect(screen.queryByText(benefit)).not.toBeInTheDocument();
    });
    commonSimilarities();
  });
});
