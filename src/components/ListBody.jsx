import PriceRow from './PriceRow';

export default function ListBody({ items }) {
  return (
    <ul className="rows">
      {items.map((item, i) => <PriceRow key={`${item.name}-${i}`} {...item} />)}
    </ul>
  );
}
