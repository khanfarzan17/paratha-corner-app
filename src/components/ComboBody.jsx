import ComboCard from './ComboCard';

export default function ComboBody({ items }) {
  return (
    <div className="combo-list">
      {items.map((item, i) => <ComboCard key={`${item.name}-${i}`} number={i + 1} {...item} />)}
    </div>
  );
}
