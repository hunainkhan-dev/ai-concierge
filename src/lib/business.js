// The fictional business the demo concierge represents.
// Swap this one object to re-brand Sage for any client (restaurant, salon, clinic…).
export const business = {
  name: 'Saffron & Sage',
  tagline: 'Modern Levantine kitchen',
  city: 'Karachi',
  hours: 'Tue–Sun, 6pm–11:30pm (closed Mondays)',
  phone: '+92 300 1234567',
  address: '12 Khayaban-e-Shahbaz, DHA Phase 6, Karachi',
  menu: [
    { name: 'Muhammara & Warm Flatbread', price: 'Rs 650', tag: 'veg' },
    { name: 'Lamb Shish with Sumac Onions', price: 'Rs 1,850', tag: 'signature' },
    { name: 'Saffron Chicken Mandi', price: 'Rs 1,650', tag: 'signature' },
    { name: 'Charred Aubergine & Tahini', price: 'Rs 900', tag: 'vegan' },
    { name: 'Pistachio Baklava Cheesecake', price: 'Rs 750', tag: 'dessert' },
  ],
  highlights: [
    'Full vegan & vegetarian section',
    'Private dining room (up to 14)',
    'Reservations recommended on weekends',
  ],
};

// Compact knowledge block injected into the AI's system prompt.
export const businessContext = `
BUSINESS: ${business.name} — ${business.tagline}, ${business.city}.
HOURS: ${business.hours}.
PHONE: ${business.phone}.
ADDRESS: ${business.address}.
MENU (highlights):
${business.menu.map((m) => `- ${m.name} (${m.price})${m.tag ? ` [${m.tag}]` : ''}`).join('\n')}
GOOD TO KNOW:
${business.highlights.map((h) => `- ${h}`).join('\n')}
`.trim();
