export const initialBalance = { gems: 420, ves: 3850 };

export const exchangeOptions = [
  { id: 'exchange-01', title: 'Daily Gem Conversion', requiredGems: 28, receiveVEs: 151, isPopular: true },
  { id: 'exchange-02', title: 'Reward Conversion', requiredGems: 39, receiveVEs: 168, isPopular: true },
  { id: 'exchange-03', title: 'Value Conversion', requiredGems: 57, receiveVEs: 255, isPopular: false },
  { id: 'exchange-04', title: 'Premium Conversion', requiredGems: 100, receiveVEs: 455, isPopular: false },
];

export const conversionHistory = [
  { id: 'h-1', gems: 28, ves: 151, date: '26 Aug 2026', status: 'completed' },
  { id: 'h-2', gems: 39, ves: 168, date: '25 Aug 2026', status: 'completed' },
  { id: 'h-3', gems: 57, ves: 255, date: '23 Aug 2026', status: 'completed' },
  { id: 'h-4', gems: 25, ves: 112, date: '20 Aug 2026', status: 'completed' },
  { id: 'h-5', gems: 28, ves: 151, date: '19 Aug 2026', status: 'failed' },
];

export const exchangeSteps = [
  { id: 1, title: 'Earn Gems', text: 'Complete eligible activities and earn Gems.' },
  { id: 2, title: 'Choose Conversion', text: 'Select a conversion that suits your Gems balance.' },
  { id: 3, title: 'Review Exchange', text: 'Review the details before confirming.' },
  { id: 4, title: 'Confirm', text: 'Confirm the exchange to convert your Gems.' },
  { id: 5, title: 'Receive VEs', text: 'VEs are added to your balance instantly.' },
];

export const exchangeRules = [
  'Only eligible Gems can be exchanged.',
  'Exchange rates are predefined by VELOOP Rewards.',
  'Available conversions may vary.',
  'A successful conversion cannot be duplicated.',
  'Your balance is updated after successful conversion.',
  'Platform rules apply.',
];
export const infoExplanations = {
  gems: {
    label: 'What are Gems?',
    text: 'Gems are reward credits earned through eligible activities on VELOOP Rewards.',
  },
  ves: {
    label: 'What are VEs?',
    text: "VEs are VELOOP Rewards' virtual reward currency and may be used for eligible redemption options according to platform rules.",
  },
  exchangeRate: {
    label: 'Exchange Value',
    text: 'The number of VEs you receive for a given amount of Gems, as set by VELOOP Rewards.',
  },
  exchangeRules: {
    label: 'Exchange Rules',
    text: 'Conversions follow VELOOP Rewards platform rules and predefined exchange values.',
  },
};