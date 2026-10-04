# How to update the menu (edit only `src/data/menu.js`)

**Change a price:** change the `price` number. **Rename:** change `name`.

**Add an item to an existing section**
```js
{ name: 'Mooli Paratha', price: 40 },            // add inside that section's items: [ ... ]
{ name: 'Paneer Paratha', price: 65, badge: 'New' },
{ name: 'Dal Paratha', price: 35, available: false },   // shows "Sold out"
{ name: 'Aloo Paratha', price: 40, description: 'Served hot' },
```

**Add a new section** (shows in the order you place it)
```js
{ id: 'rolls', title: 'Paratha Rolls', subtitle: 'Quick bites', items: [
  { name: 'Aloo Roll', price: 50 },
] },
```
`id` must be unique, lowercase, no spaces.

**Add combos** (type: 'combo')
```js
{ id: 'combos', title: 'Combos', subtitle: 'Great Taste. Better Value.', type: 'combo', items: [
  { name: 'Aloo Paratha Combo', includes: ['2 Aloo Paratha', 'Curd', 'Pickle'], price: 90 },
  { name: 'Paneer Paratha Combo', includes: ['2 Paneer Paratha', 'Curd', 'Pickle'], price: 140 },
] },
```
Combos are numbered automatically — add as many as you like.

**Hide something without deleting:** add `enabled: false` to a section.
**Contact / delivery / notes:** edit `BUSINESS` at the top of the file.

Run `npm run dev`: if you make a typo, the browser console shows a `[menu]` warning telling you where.
