import SectionHeader from './SectionHeader';
import ListBody from './ListBody';
import ComboBody from './ComboBody';

// To support a new kind of section later, add one entry here.
const BODIES = { list: ListBody, combo: ComboBody };

export default function MenuSection({ title, subtitle, type = 'list', items = [], enabled = true }) {
  if (!enabled || items.length === 0) return null;
  const Body = BODIES[type] || ListBody;
  return (
    <section className="menu-section">
      <SectionHeader title={title} subtitle={subtitle} />
      <Body items={items} />
    </section>
  );
}
