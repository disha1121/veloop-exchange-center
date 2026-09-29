export const initialBalance = { gems: 420, ves: 3850 };

export const exchangeOptions = [
  {
    id: 'exchange-01',
    title: 'Daily Gem Conversion',
    type: 'daily',
    requiredGems: 28,
    receiveVEs: 151,
    isPopular: true,
    gemTheme: 'purple',
    description: 'Convert your earned Gems into VEs instantly.',
  },
  {
    id: 'exchange-02',
    title: 'Reward Conversion',
    type: 'reward',
    requiredGems: 39,
    receiveVEs: 168,
    isPopular: true,
    gemTheme: 'blue',
    description: 'Higher conversion for your better rewards.',
  },
  {
    id: 'exchange-03',
    title: 'Value Conversion',
    type: 'value',
    requiredGems: 57,
    receiveVEs: 255,
    isPopular: false,
    gemTheme: 'green',
    description: 'Unlock greater value with more Gems.',
  },
  {
    id: 'exchange-04',
    title: 'Premium Conversions',
    type: 'premium',
    requiredGems: 100,
    receiveVEs: 455,
    isPopular: false,
    gemTheme: 'orange',
    description: 'Premium conversion for premium rewards.',
  },
];

export const conversionHistory = [
  {
    id: 'h-1',
    gems: 28,
    ves: 151,
    date: '26 Aug 2026',
    time: '04:32 PM',
    status: 'completed',
    gemTheme: 'purple',
  },
  {
    id: 'h-2',
    gems: 39,
    ves: 168,
    date: '25 Aug 2026',
    time: '11:15 AM',
    status: 'completed',
    gemTheme: 'blue',
  },
  {
    id: 'h-3',
    gems: 57,
    ves: 255,
    date: '23 Aug 2026',
    time: '06:40 PM',
    status: 'completed',
    gemTheme: 'green',
  },
  {
    id: 'h-4',
    gems: 25,
    ves: 112,
    date: '20 Aug 2026',
    time: '09:10 AM',
    status: 'completed',
    gemTheme: 'orange',
  },
  {
    id: 'h-5',
    gems: 28,
    ves: 151,
    date: '19 Aug 2026',
    time: '03:22 PM',
    status: 'failed',
    gemTheme: 'purple',
  },
];

export const exchangeSteps = [
  {
    id: 1,
    stepNum: '01',
    title: 'Earn Gems',
    text: 'Complete eligible activities and earn Gems.',
    iconType: 'gem',
  },
  {
    id: 2,
    stepNum: '02',
    title: 'Choose Conversion',
    text: 'Select a conversion that suits your Gems balance.',
    iconType: 'list',
  },
  {
    id: 3,
    stepNum: '03',
    title: 'Review Exchange',
    text: 'Review the details before confirming the conversion.',
    iconType: 'search',
  },
  {
    id: 4,
    stepNum: '04',
    title: 'Confirm',
    text: 'Confirm the exchange to convert your Gems.',
    iconType: 'confirm',
  },
  {
    id: 5,
    stepNum: '05',
    title: 'Receive VEs',
    text: 'VEs are added to your balance instantly.',
    iconType: 've',
  },
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
  availableConversions: {
    label: 'Available Conversions',
    text: 'Choose from predefined conversion options based on your available Gems balance.',
  },
  howItWorks: {
    label: 'How Exchange Works',
    text: 'Follow these 5 simple steps to easily convert your Gems into VEs.',
  },
};