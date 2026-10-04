/**
 * ALL CONTENT LIVES IN THIS FILE — edit only this to update the site.
 * Sections show in the order listed. Section types: 'list' (default) | 'combo'.
 * See HOW_TO_UPDATE.md for copy-paste examples (new item, new section, combos).
 */
export const BUSINESS = {
  name: 'PARATHA CORNER',
  tagline: ['FRESH', 'HOT', 'HOMEMADE'],
  motto: 'Simple Food • Big Happiness',
  footerMessage: 'Fresh Parathas Made with Love',
  phone: '7631528775',
  countryCode: '91',
  delivery: 'Nagawara, HBR Layout', // set to '' to hide the delivery line
  notes: [ // set to [] to hide
    { icon: 'clock', text: 'For small orders, please place', highlight: '1 hour prior' },
    { icon: 'group', text: 'For bulk orders, please place', highlight: 'prior' },
  ],
};

export const SECTIONS = [
  { id: 'roti', title: 'Plain Roti', subtitle: 'Simple. Pure. Homemade.',
    items: [{ name: 'Plain Roti', note: '(Tawa Roti)', price: 15 }] },

  { id: 'plain-paratha', title: 'Plain Paratha', subtitle: 'Soft. Fresh. Everyday.',
    items: [{ name: 'Wheat Paratha', price: 20 }] },

  { id: 'stuffed', title: 'Stuffed Parathas', subtitle: 'Traditional Flavours. Homemade Goodness.',
    items: [
      { name: 'Aloo Paratha', price: 40 },
      { name: 'Onion Paratha', price: 30 },
      { name: 'Dal Paratha', price: 35 },
      { name: 'Sattu Paratha', price: 45, featured: true },
      { name: 'Paneer Paratha', price: 65 },
    ] },

  { id: 'addons', title: 'Add-ons', subtitle: 'Make it more delicious.',
    items: [
      { name: 'Curd', price: 15 },
      { name: 'Butter', price: 15 },
      { name: 'Dhaniya Green Chutney', price: 10 },
      { name: 'Pickle', price: 5 },
    ] },

  // ── FUTURE: copy this block, remove the // marks and edit, to add combos ──
  // { id: 'combos', title: 'Combos', subtitle: 'Great Taste. Better Value.', type: 'combo',
  //   items: [
  //     { name: 'Aloo Paratha Combo', includes: ['2 Aloo Paratha', 'Curd', 'Pickle'], price: 90 },
  //   ] },
];

/** Item fields (all optional except name + price):
 *  note: '(Tawa Roti)'  description: 'short line'  featured: true  badge: 'New'
 *  available: false  → shows "Sold out"      Section: enabled: false → hides it */
export const formatPrice = (p) => (typeof p === 'number' ? `₹${p}` : p);
