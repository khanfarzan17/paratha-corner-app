// Dev-only safety net: warns in the browser console if menu.js has a typo.
const TYPES = ['list', 'combo'];

export function validateMenu(sections) {
  const ids = new Set();
  sections.forEach((s, i) => {
    const warn = (msg) => console.warn(`[menu] "${s.title || `section #${i + 1}`}": ${msg}`);
    if (!s.id) warn('missing id');
    else if (ids.has(s.id)) warn(`duplicate id "${s.id}"`);
    ids.add(s.id);
    if (!s.title) warn('missing title');
    if (s.type && !TYPES.includes(s.type)) warn(`unknown type "${s.type}" (use ${TYPES.join(' or ')})`);
    if (!Array.isArray(s.items) || s.items.length === 0) warn('has no items');
    (s.items || []).forEach((it, j) => {
      const w = (m) => warn(`item #${j + 1} (${it.name || 'no name'}): ${m}`);
      if (!it.name) w('missing name');
      if (it.price === undefined || it.price === null || it.price === '') w('missing price');
      if (s.type === 'combo' && !it.includes) w('combo needs "includes"');
    });
  });
}
