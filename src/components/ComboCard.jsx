import { formatPrice } from '../data/menu';

export default function ComboCard({ name, includes, price, number, badge, available = true }) {
  const text = Array.isArray(includes) ? includes.join(' + ') : includes;
  return (
    <article className={`combo${available ? '' : ' sold-out'}`}>
      <span className="num">{number}</span>
      <div>
        <h3>{name}{badge && <em className="tag">{badge}</em>}</h3>
        {text && <p>{text}</p>}
      </div>
      <span className="price">{available ? formatPrice(price) : 'Sold out'}</span>
    </article>
  );
}
