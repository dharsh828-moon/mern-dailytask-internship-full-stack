export const initialSubscriptions = [
  { id: 1, name: 'Netflix', category: 'Entertainment', amount: 649, cycle: 'Monthly', nextDate: '2026-11-29', color: '#e84855', initials: 'N', plan: 'Premium' },
  { id: 2, name: 'Spotify', category: 'Music', amount: 119, cycle: 'Monthly', nextDate: '2026-12-02', color: '#1db954', initials: 'S', plan: 'Individual' },
  { id: 3, name: 'YouTube Premium', category: 'Entertainment', amount: 149, cycle: 'Monthly', nextDate: '2026-12-06', color: '#f04444', initials: 'Y', plan: 'Individual' },
  { id: 4, name: 'Google One', category: 'Utilities', amount: 1300, cycle: 'Yearly', nextDate: '2026-12-12', color: '#4285f4', initials: 'G', plan: '100 GB' },
  { id: 5, name: 'Figma', category: 'Productivity', amount: 720, cycle: 'Monthly', nextDate: '2026-12-18', color: '#8b5cf6', initials: 'F', plan: 'Professional' },
]
export const initialExpenses = [
  { id: 1, title: 'Apartment internet', category: 'Utilities', amount: 999, date: '2026-11-20', paidBy: 'You', people: ['You','Aarav','Maya'], settled: false },
  { id: 2, title: 'Weekend groceries', category: 'Groceries', amount: 1850, date: '2026-11-18', paidBy: 'Maya', people: ['You','Aarav','Maya'], settled: true },
  { id: 3, title: 'Movie night', category: 'Entertainment', amount: 840, date: '2026-11-15', paidBy: 'Aarav', people: ['You','Aarav'], settled: false },
]
export const spendingData = [
  { month: 'Jun', subscriptions: 1750, shared: 900 }, { month: 'Jul', subscriptions: 1900, shared: 1250 },
  { month: 'Aug', subscriptions: 2050, shared: 1100 }, { month: 'Sep', subscriptions: 2300, shared: 1450 },
  { month: 'Oct', subscriptions: 2450, shared: 1650 }, { month: 'Nov', subscriptions: 2937, shared: 1840 },
]
