import { formatPrice } from '../data/menu';

export default function PriceRow({ name, note, description, price, featured, badge, available = true }) {
  const label = badge || (featured ? 'Specialty' : null);
  return (
    <li className={`row${featured ? ' featured' : ''}${available ? '' : ' sold-out'}`}>
      <span className="name">
        {name}{note && <small> {note}</small>}
        {label && <em className="tag">{label}</em>}
        {description && <span className="desc">{description}</span>}
      </span>
      <span className="dots" />
      <span className={`price${price === 'FREE' ? ' free' : ''}`}>{available ? formatPrice(price) : 'Sold out'}</span>
    </li>
  );
}
